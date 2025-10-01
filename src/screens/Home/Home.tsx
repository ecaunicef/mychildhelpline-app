import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
    Dimensions,
    Alert,
    Modal,
} from 'react-native'
import NotificationSVG from '../../../assets/svgs/Notification'
import Humburger from '../../../assets/svgs/Humburger'
import CloudBG from '../../../assets/svgs/CloudBg'
import User from '../../../assets/svgs/User'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../../components/basedComponents/customText'
import PenSvg from '../../../assets/svgs/Pen'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AccessibilitySVG from '../../../assets/svgs/AccessibilitySVG'
import AsyncStorageService from '../../utils/AsyncStorage'
import ModalEmoji from '../../components/ModalEmoji'
import localization from '../../utils/localization'
import MySpace from '../MySpace/MySpace'
import { Asset, CameraOptions, launchCamera } from 'react-native-image-picker'
import { Avataars } from 'rn-customize-avatar/avataaars'
import Layout from '../../components/common/Layout/Layout'
import { getAllNotifications } from '../../services/auth'
import { useAppSelector } from '../../store/hooks'

const { width } = Dimensions.get('window')

const smallMobile = width <= 479

const HomeScreen = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [name, setname] = useState<any>()
    const [userAvatar, setuserAvatar] = useState<any>('')
    const [userProfilePic, setuserProfilePic] = useState<any>('')
    const [modalVisible, setModalVisible] = useState(false)
    const [isNewNotification, setisNewNotification] = useState<boolean>(false)
    const getEmojiState = useAppSelector((state) => state.emoji.isEmojiModal)

    const getUserData = async () => {
        try {
            let userData: any = await AsyncStorageService.getItem(
                'user_details'
            )
            setname(userData.name)
            let picdata = await AsyncStorageService.getItem('UserProfilePic')
            setuserProfilePic(picdata)
        } catch (error) {}
    }

    useEffect(() => {
        getBroadcastData()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getUserData()
            return
        }, [])
    )

    const getBroadcastData = async () => {
        try {
            let data: any = await getAllNotifications({
                id: 0,
            })
            let newId: any = data[0].id
            let oldId: any = await AsyncStorageService.getItem(
                'lastViewdNotificationId'
            )

            if (parseInt(newId) > parseInt(oldId)) {
                setisNewNotification(true)
            }
        } catch (error) {
            console.error('Error fetching broadcast data:', error)
        }
    }

    const handleOpenCamera = async () => {
        const options: CameraOptions = {
            mediaType: 'photo' as const,
            includeBase64: true, // Include Base64 string in the response
            maxWidth: 1024, // Adjust to a suitable value
            maxHeight: 1024,
            quality: 0.6,
        }

        try {
            launchCamera(options, async (response) => {
                if (response.assets && response.assets.length > 0) {
                    const capturedImage: Asset = response.assets[0]
                    if (capturedImage.base64) {
                        const base64String = `${capturedImage.base64}`
                        await AsyncStorageService.setItem(
                            'UserProfilePic',
                            base64String
                        )
                        setuserAvatar('')
                        setuserProfilePic(base64String)
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleAvatarSelect = async () => {
        setModalVisible(true)
    }

    const chooseOptionWhoSelect = () => {
        Alert.alert(
            localization['chooseOption'],
            '',
            [
                {
                    text: localization['avatar'],
                    onPress: handleAvatarSelect,
                },
                {
                    text: localization['camera'],
                    onPress: handleOpenCamera,
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        )
    }

    return (
        <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}
        >
            <View
                style={{
                    paddingTop:
                        Platform.OS == 'ios'
                            ? Dimensions.get('screen').height * 0.05
                            : Dimensions.get('screen').height * 0.006,
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
                            <NotificationSVG
                                newNotification={isNewNotification}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Header Section */}

                {/* Main Content */}
                <View style={styles.profileContainer}>
                    <TouchableOpacity
                        style={styles.profileImageWrapper}
                        onPress={chooseOptionWhoSelect}
                        activeOpacity={0.8}
                    >
                        {userProfilePic || userAvatar !== '' ? (
                            <Image
                                style={{
                                    width: smallMobile
                                        ? moderateScale(80)
                                        : moderateScale(160),
                                    height: smallMobile
                                        ? moderateScale(80)
                                        : moderateScale(160),
                                    borderRadius: moderateScale(80),
                                    overflow: 'hidden',
                                }}
                                source={{
                                    uri:
                                        userProfilePic != ''
                                            ? `data:image/png;base64,${userProfilePic}`
                                            : `data:image/png;base64,${userAvatar}`,
                                }}
                                resizeMode="contain"
                            />
                        ) : (
                            <User
                                style={styles.profileImage}
                                width={
                                    smallMobile
                                        ? moderateScale(80)
                                        : moderateScale(160)
                                }
                                height={
                                    smallMobile
                                        ? moderateScale(80)
                                        : moderateScale(160)
                                }
                            />
                        )}
                        <View style={[styles.profileImageWrapperEdit]}>
                            <TouchableOpacity onPress={chooseOptionWhoSelect}>
                                <PenSvg
                                    width={
                                        smallMobile
                                            ? moderateScale(12)
                                            : moderateScale(20)
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <CustomText>
                        <CustomText style={styles.greeting}>
                            {localization['goodMorning']!} ,{' '}
                            <CustomText style={styles.name}>{name}</CustomText>
                        </CustomText>
                    </CustomText>
                </View>
                <CloudBG style={styles.dayImage} />
            </View>
            <MySpace />
            {getEmojiState && <ModalEmoji />}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <Layout
                    ScreenName={localization['customizeyouravatar']}
                    BackButton={false}
                >
                    <Avataars
                        listBgColor="#"
                        backgroundColor="#gray"
                        onDone={async (base64Image: any) => {
                            await AsyncStorageService.setItem(
                                'UserProfilePic',
                                base64Image
                            )
                            setuserProfilePic('')
                            setuserAvatar(base64Image)
                            setModalVisible(false)
                        }}
                        onCancel={() => {
                            setModalVisible(false)
                        }}
                    />
                </Layout>
            </Modal>
        </ScrollView>
    )
}

export default HomeScreen

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
    profileImage: {
        width: smallMobile ? moderateScale(80) : moderateScale(160),
        height: smallMobile ? moderateScale(80) : moderateScale(160),
    },
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
})
