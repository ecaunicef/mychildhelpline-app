import React, { useEffect, useState } from 'react'
import {
    View,
    Modal,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Linking,
} from 'react-native'
import Layout from '../../components/common/Layout/Layout'
import { getResources, getResourcesLink } from '../../services/reourcesService'
import CustomText from '../../components/basedComponents/customText'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { moderateScale } from 'react-native-size-matters'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import AsyncStorageService from '../../utils/AsyncStorage'
import LinearGradient from 'react-native-linear-gradient'
import { deviceHeight, deviceWidth } from '../../utils/constants'
import localization from '../../utils/localization'

const Resources = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [resourceData, setResourceData] = useState<any[]>([])
    const [resourceLinkData, SetResourceLinkData] = useState<any[]>([])
    const [selectedTitle, setSelectedTitle] = useState<any>('')
    const [modalVisible2, setModalVisible2] = useState(false)

    const getResourcesData = async () => {
        const payload = {
            classificationType: 'helpline_category',
        }
        try {
            const response: any = await getResources(payload)
            if (response?.data) {
                setResourceData(response.data.data)
            } else {
                setResourceData([])
            }
        } catch (error) {
            console.error('Error fetching resources:', error)
        }
    }

    const getResourcesDataLink = async (id: number) => {
        const getuserDetails: any = await AsyncStorageService.getItem(
            'user_details'
        )
        const payload = {
            category: id,
            country_id: getuserDetails?.country_area_code,
        }
        try {
            const response: any = await getResourcesLink(payload)
            if (response?.data) {
                SetResourceLinkData(response.data)
            } else {
                SetResourceLinkData([])
            }
            setModalVisible2(true)
        } catch (error) {
            console.error('Error fetching resources:', error)
        }
    }

    const showModal = (id: number, item: any) => {
        if (id) {
            setSelectedTitle(
                localization?._language == 'en'
                    ? item.classification_name
                    : item?.[
                          `classification_name_${localization?._language}`
                      ] || item.classification_name
            )

            getResourcesDataLink(id)
        }
    }

    useEffect(() => {
        getResourcesData()
    }, [])

    const [parentHeight, setParentHeight] = useState(0)

    const handleLayout = async (event: any) => {
        const { height } = await event.nativeEvent.layout
        setParentHeight(height)
    }

    return (
        <>
            <Layout ScreenName={localization['resources']} BackButton={true}>
                <View style={styles.container}>
                    <FlatList
                        data={resourceData}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.card}
                                onPress={() => showModal(item?.id, item)}
                            >
                                <CustomText style={styles.cardText}>
                                    {localization?._language == 'en'
                                        ? item.classification_name
                                        : item?.[
                                              `classification_name_${localization?._language}`
                                          ] || item.classification_name}
                                </CustomText>
                                {item.icon}
                            </TouchableOpacity>
                        )}
                        removeClippedSubviews={false}
                        keyExtractor={(item, id) => id.toString() + 'res'}
                    />
                </View>
            </Layout>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2)
                }}
            >
                <View style={styles.centeredView}>
                    <ScrollView
                        contentContainerStyle={styles.modalView}
                        onLayout={handleLayout}
                    >
                        <LinearGradient
                            colors={['#fefffa', '#fff3bd', '#fefffa']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <View style={styles.modalHeader}>
                                <CustomText style={styles.modalHeaderTitle}>
                                    {selectedTitle}
                                </CustomText>
                                <TouchableOpacity
                                    style={styles.headerClose}
                                    onPress={() => {
                                        setModalVisible2(false)
                                        SetResourceLinkData([])
                                    }}
                                >
                                    <Icon name="close" size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.modalBody]}>
                                <FlatList
                                    data={resourceLinkData}
                                    keyExtractor={(item) => item.id.toString()}
                                    removeClippedSubviews={false}
                                    renderItem={({ item }: any) => {
                                        return (
                                            <View
                                                style={[
                                                    styles.bottomEmojisSection,
                                                    styles.custionMarginBottom,
                                                ]}
                                            >
                                                <CustomText
                                                    style={
                                                        styles.bottomEmojisDescription
                                                    }
                                                >
                                                    {item.organization ||
                                                        item.name}
                                                </CustomText>
                                                <View
                                                    style={
                                                        styles.buttonsContainer
                                                    }
                                                >
                                                    {item.helplinenumber && (
                                                        <TouchableOpacity
                                                            style={[
                                                                styles.button,
                                                                styles.buttonRed,
                                                            ]}
                                                            onPress={() =>
                                                                Linking.openURL(
                                                                    `tel:${item.helplinenumber}`
                                                                )
                                                            }
                                                        >
                                                            <Ionicons
                                                                style={
                                                                    styles.buttonIcon
                                                                }
                                                                name="call"
                                                                size={18}
                                                            />
                                                            <CustomText
                                                                style={
                                                                    styles.buttonText
                                                                }
                                                            >
                                                                {
                                                                    localization[
                                                                        'call'
                                                                    ]
                                                                }{' '}
                                                            </CustomText>
                                                        </TouchableOpacity>
                                                    )}
                                                    {item.website && (
                                                        <TouchableOpacity
                                                            style={[
                                                                styles.button,
                                                                styles.buttonOrange,
                                                            ]}
                                                            onPress={() => {
                                                                navigation.navigate(
                                                                    'WebView',
                                                                    {
                                                                        url: item.website,
                                                                    }
                                                                )
                                                            }}
                                                        >
                                                            <MaterialIcons
                                                                style={
                                                                    styles.buttonIcon
                                                                }
                                                                name="web"
                                                                size={18}
                                                            />
                                                            <CustomText
                                                                style={
                                                                    styles.buttonText
                                                                }
                                                            >
                                                                {
                                                                    localization[
                                                                        'website'
                                                                    ]
                                                                }
                                                            </CustomText>
                                                        </TouchableOpacity>
                                                    )}
                                                    {item?.geolocation && (
                                                        <TouchableOpacity
                                                            style={[
                                                                styles.button,
                                                                styles.buttonBlue,
                                                            ]}
                                                            onPress={() => {
                                                                setModalVisible2(
                                                                    false
                                                                )
                                                                navigation.navigate(
                                                                    'TestScreen',
                                                                    {
                                                                        latitude:
                                                                            item?.geolocation
                                                                                ?.split(
                                                                                    ','
                                                                                )[0]
                                                                                .trim(),
                                                                        longitude:
                                                                            item?.geolocation
                                                                                ?.split(
                                                                                    ','
                                                                                )[1]
                                                                                .trim(),
                                                                        title:
                                                                            item?.organization ||
                                                                            item?.name,
                                                                    }
                                                                )
                                                            }}
                                                        >
                                                            <Ionicons
                                                                style={
                                                                    styles.buttonIcon
                                                                }
                                                                name="location-sharp"
                                                                size={18}
                                                            />
                                                            <CustomText
                                                                style={
                                                                    styles.buttonText
                                                                }
                                                            >
                                                                {
                                                                    localization[
                                                                        'location'
                                                                    ]
                                                                }
                                                            </CustomText>
                                                        </TouchableOpacity>
                                                    )}
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </LinearGradient>
                    </ScrollView>
                </View>
            </Modal>
        </>
    )
}

export default Resources

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: moderateScale(18),
        lineHeight: moderateScale(22.5),
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
    },
    scrollContainer: {
        paddingVertical: 10,
    },
    card: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 8,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 4,
    },
    cardText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        fontWeight: '500',
        color: '#333',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: deviceWidth,
        height: deviceHeight,
    },
    modalView: {
        margin: 'auto',
        borderRadius: moderateScale(20),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
        width: deviceWidth - 30,
        minHeight: deviceHeight * 0.5,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        paddingRight: 40,
        minHeight: 40,
        padding: moderateScale(20),
        paddingBottom: 0,
    },
    modalHeaderTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: '600',
        marginBottom: 0,
        width: '100%',
        textAlign: 'center',
    },
    headerClose: {
        position: 'absolute',
        top: 15,
        right: 15,
        opacity: 1,
        zIndex: 999,
    },
    modalBody: {
        padding: moderateScale(20),
    },
    bottomEmojisSection: {
        flexDirection: 'column',
    },
    custionMarginBottom: {
        marginBottom: 15,
    },
    bottomEmojisDescription: {
        fontFamily: 'OpenSans-regular',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontWeight: '400',
        marginBottom: 15,
        flexWrap: 'wrap',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7.5,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginTop: 0,
    },
    buttonRed: {
        backgroundColor: '#E23838',
    },
    buttonOrange: {
        backgroundColor: '#F77415',
    },
    buttonBlue: {
        backgroundColor: '#1463BC',
    },
    buttonIcon: {
        marginEnd: 5,
        color: '#ffffff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 7.5,
    },
    buttonText: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        textAlign: 'center',
        color: '#ffffff',
    },
})
