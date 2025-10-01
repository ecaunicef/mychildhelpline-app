import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import CustomText from '../../components/basedComponents/customText'
import { moderateScale } from 'react-native-size-matters'
import Layout from '../../components/common/Layout/Layout'
import { getAllNotifications } from '../../services/auth'
import moment from 'moment'
import AsyncStorageService from '../../utils/AsyncStorage'
import localization from '../../utils/localization'

const Notifications = () => {
    const [notificationsList, setnotificationsList] = useState<any>('')
    const [lastNotificationId, setlastNotificationId] = useState<any>('')
    useEffect(() => {
        getLastNotificationId()
    }, [])

    const getLastNotificationId = async () => {
        let id: any = await AsyncStorageService.getItem('lastNotificationId')
        // setlastNotificationId(id ? id : true)
        getBroadcastData(id)
    }

    const getBroadcastData = async (args: number) => {
        try {
            let data: any = await getAllNotifications({
                id: args ? args : 0,
            })
            let user_details: any = await AsyncStorageService.getItem(
                'user_details'
            )

            let lastId: any = await AsyncStorageService.getItem(
                'lastDeletedNotification'
            )

            if (!lastId) {
                lastId = moment().startOf('day')
            }
            data = data.filter((item: any) => {
                let checkForDeletedNotifications = moment(item.updated)

                let notificationTime: any = moment(item.updated, 'YYYY-MM-DD')
                let userCreationTime: any = moment(
                    user_details.created,
                    'YYYY-MM-DD'
                )
                return (
                    notificationTime.isAfter(userCreationTime) ||
                    (notificationTime.isSame(userCreationTime) &&
                        checkForDeletedNotifications.isAfter(moment(lastId)))
                )
            })
            setnotificationsList(data)
        } catch (error) {
            console.error('Error fetching broadcast data:', error)
        }
    }
    const handleDeleteNotifications = async () => {
        try {
            // setlastNotificationId(moment())
            await AsyncStorageService.setItem(
                'lastDeletedNotification',
                moment()
            )
            setnotificationsList('')
            getLastNotificationId()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout
            ScreenName={localization['broadcastmsg']}
            BackButton={true}
            deleteButton
            onDeleteNotifications={handleDeleteNotifications}
        >
            <FlatList
                data={notificationsList}
                renderItem={({ item }: any) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <CustomText style={styles.title}>
                                    {item.title}
                                </CustomText>
                                <TouchableOpacity>
                                    {/* <Icon name="more-vert" size={20} /> */}
                                </TouchableOpacity>
                            </View>
                            <CustomText style={styles.content}>
                                {item.message}
                            </CustomText>
                            <CustomText style={styles.date}>
                                {/* {moment().format().)} */}
                                {moment(item.created).format(
                                    'MMMM D, YYYY, h:mm A'
                                )}
                            </CustomText>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                removeClippedSubviews={false}
                contentContainerStyle={styles.list}
            />
        </Layout>
    )
}

export default Notifications

const styles = StyleSheet.create({
    list: {
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, .25)',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontWeight: '600',
        fontFamily: 'OpenSans-SemiBold',
        color: '#111111',
    },
    content: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        fontWeight: '400',
        fontFamily: 'OpenSans-Regular',
        color: '#333333',
        marginBottom: 10,
    },
    date: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        fontWeight: '400',
        fontFamily: 'OpenSans-Regular',
        color: '#333333',
    },
})
