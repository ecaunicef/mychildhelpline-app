import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Dimensions,
} from 'react-native'
import NotificationSVG from '../../assets/svgs/Notification'
import Humburger from '../../assets/svgs/Humburger'
import CloudBG from '../../assets/svgs/CloudBg'
import User from '../../assets/svgs/User'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import CustomText from './basedComponents/customText'
import PenSvg from '../../assets/svgs/Pen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AccessibilitySVG from '../../assets/svgs/AccessibilitySVG'
import AsyncStorageService from '../utils/AsyncStorage'
import ModalEmoji from './ModalEmoji'
import { statusBarHeight } from '../utils/constants'
import localization from '../utils/localization'
import { MySpace } from '../screens'

const ONE_DAY_MS = 24 * 60 * 60 * 1000 // 1 day

const { width, height } = Dimensions.get('window')

const smallMobile = width <= 479

const Layout = (props: any) => {
    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [userPic, setuserPic] = useState<any>('')

    const lastShowModal = async () => {
        try {
            const lastShown: any = await AsyncStorageService.getItem(
                'modalLastShown'
            )

            const now = Date.now()

            if (!lastShown || now - parseInt(lastShown, 10) > ONE_DAY_MS) {
                setTimeout(() => {
                    setShowModal(true)
                }, 2000)

                await AsyncStorageService.setItem(
                    'modalLastShown',
                    now.toString()
                )
            }
        } catch (error) {
            console.error('Error fetching or updating modal timestamp:', error)
        }
    }

    const getUserData = async () => {
        try {
            let picdata = await AsyncStorageService.getItem('UserProfilePic')
            setuserPic(picdata)
        } catch (error) {}
    }
    useEffect(() => {
        getUserData()
        lastShowModal()
    }, [])

    return (
        <ScrollView style={styles.container} bounces={false}>
            <View
                style={{
                    paddingTop:
                        Platform.OS == 'ios'
                            ? statusBarHeight + verticalScale(20)
                            : 0,
                }}
            >
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.headerSpace}
                            onPress={() => {
                                navigation.navigate('Settings')
                            }}
                        >
                            <Humburger />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={styles.headerSpace}
                            onPress={() => {
                                navigation.navigate('Accessibility')
                            }}
                        >
                            <AccessibilitySVG />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.headerSpace,
                                styles.paddingLeftCustom,
                            ]}
                            onPress={() => {
                                navigation.navigate('Notifications')
                            }}
                        >
                            <NotificationSVG />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Header Section */}

                {/* Main Content */}
                <View style={styles.profileContainer}>
                    <View style={styles.profileImageWrapper}>
                        {userPic !== '' ? (
                            <Image
                                style={{
                                    width: moderateScale(160),
                                    height: moderateScale(160),
                                    borderRadius: moderateScale(80),
                                    overflow: 'hidden',
                                }}
                                source={{
                                    uri: `data:image/png;base64,${userPic}`,
                                }} // Replace 'png' with 'jpeg' or other format if needed
                                resizeMode="contain"
                            />
                        ) : (
                            <User style={styles.profileImage} />
                        )}
                        <View style={[styles.profileImageWrapperEdit]}>
                            <PenSvg
                                width={
                                    smallMobile
                                        ? moderateScale(12)
                                        : moderateScale(20)
                                }
                            />
                        </View>
                    </View>
                    <CustomText>
                        <CustomText style={styles.greeting}>
                            {localization.goodMorning},{' '}
                        </CustomText>
                        <CustomText style={styles.name}>Adora</CustomText>
                    </CustomText>
                </View>
                <CloudBG style={styles.dayImage} />
            </View>
            <MySpace />
            {showModal && <ModalEmoji />}
        </ScrollView>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff8bb75',
    },
    headerSpace: {
        padding: 5,
    },
    paddingLeftCustom: {
        paddingLeft: moderateScale(10),
    },
    dayImage: {
        width: width,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(10),
        paddingTop: moderateScale(10),
    },
    headerLeft: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    headerRight: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        marginTop: moderateScale(-30),
    },
    profileImageWrapper: {
        width: smallMobile ? moderateScale(100) : moderateScale(160),
        height: smallMobile ? moderateScale(100) : moderateScale(160),
        borderRadius: moderateScale(80),
        backgroundColor: '#ffffff',
        shadowColor: '#00000061',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(5),
        boxShadow: '0 4px 19px 0 rgba(0, 0, 0, 0.35)',
    },
    profileImageWrapperEdit: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.36)',
        width: smallMobile ? moderateScale(25) : moderateScale(38),
        height: smallMobile ? moderateScale(25) : moderateScale(38),
        borderRadius: '100%',
        backgroundColor: '#ffffff',
        shadowColor: '#00000061',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(10),
    },
    profileImage: {},
    greeting: {
        color: '#FFF',
        fontSize: moderateScale(15),
        lineHeight: moderateScale(30),
        fontWeight: '400',
    },
    name: {
        color: '#FFF',
        fontSize: moderateScale(23),
        lineHeight: moderateScale(30),
        fontWeight: '600',
    },
    // ============================================= Layout Css
})
