import {
    StyleSheet,
    View,
    Dimensions,
    PermissionsAndroid,
    Platform,
    Alert,
    Linking,
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CircleSvg from '../../../assets/svgs/Circle'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated'
import Geolocation from '@react-native-community/geolocation'
import { moderateScale } from 'react-native-size-matters'

import LogoSvg from '../../../assets/svgs/Logo'
import HandSvg from '../../../assets/svgs/Hand'
import UnicefSvg from '../../../assets/svgs/Unicef'
import AsyncStorageService from '../../utils/AsyncStorage'
import notifee from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import ReactNativeBiometrics from 'react-native-biometrics'
import { useAppDispatch } from '../../store/hooks'
import {
    getLocationAction,
    loadAccessibilitySettings,
} from '../../store/actions/commonActions'
import { getUserLocation } from '../../services/auth'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
const logoHeight = deviceHeight * 0.15
const handHeight = deviceHeight * 0.42

const rnBiometrics = new ReactNativeBiometrics()
const SplashScreen = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const rotation = useSharedValue(0)

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 15000,
                easing: Easing.linear,
            }),
            10000
        )

        initializeApp()
    }, [dispatch])

    const initializeApp = async () => {
        let locationdata = await AsyncStorageService.getItem('location')
        if (!locationdata?.latitude && !locationdata?.longitude) {
            await requestLocationPermission()
        }
        await requestNotificationPermission()
        if (!locationdata?.latitude && !locationdata?.longitude) {
            await geoLocation()
        }
        dispatch(loadAccessibilitySettings())
    }

    // Function to request location permission
    const requestLocationPermission = async () => {
        try {
            let granted
            if (Platform.OS === 'android') {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
            } else {
                granted = true // For iOS, it's assumed to be granted by default
            }

            if (
                granted === PermissionsAndroid.RESULTS.GRANTED ||
                granted === true
            ) {
                console.log('Location permission granted')
            } else {
                console.log('Location permission denied')
            }
        } catch (error) {
            console.error('Error requesting location permission:', error)
        }
    }

    // Function to request notification permission
    const requestNotificationPermission = async () => {
        try {
            const authStatus = await messaging().requestPermission()
            await notifee.requestPermission()

            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL

            if (enabled) {
                await getDeviceToken()
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error)
        }
    }

    // Function to get device token for FCM
    const getDeviceToken = async () => {
        try {
            const token = await messaging().getToken()
            if (token) {
                await AsyncStorageService.setItem('@fcmToken', token)
            }
            checkLock()
        } catch (error) {
            console.error('Failed to get device token:', error)
        }
    }

    // Function to check lock and biometric authentication
    const checkLock = async () => {
        const isLockEnabled = await AsyncStorageService.getItem('AppLock')
        if (isLockEnabled) {
            rnBiometrics.isSensorAvailable().then((resultObject) => {
                const { available, biometryType } = resultObject
                if (
                    available &&
                    (biometryType === 'TouchID' ||
                        biometryType === 'FaceID' ||
                        biometryType === 'Biometrics')
                ) {
                    navigation.navigate('UnlockPage')
                } else {
                    goToHome()
                }
            })
        } else {
            goToHome()
        }
    }

    // Function to handle navigation based on login status
    const goToHome = async () => {
        const loggedIn = await AsyncStorageService.getItem('logedin_key')
        if (loggedIn) {
            setTimeout(() => {
                navigation.replace('Root')
            }, 1000)
        } else {
            setTimeout(() => {
                navigation.replace('IntoductionSlider')
            }, 3000)
        }
    }

    const handleGeoLocationError = (error) => {
        if (error.code === 1) {
        } else if (error.code === 2) {
            Alert.alert(
                'Location Services Disabled',
                'Please enable location services in your device settings.',
                [
                    {
                        text: 'Go to Settings',
                        onPress: () => {
                            Linking.sendIntent(
                                'android.settings.LOCATION_SOURCE_SETTINGS'
                            )
                            setTimeout(() => {
                                geoLocation()
                            }, 5000)
                        },
                    },
                    { text: 'Cancel', style: 'cancel' },
                ]
            )
        } else if (error.code === 3) {
        }

        goToHome()
    }

    const geoLocation = async () => {
        try {
            let granted
            if (Platform.OS === 'android') {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
            } else {
                granted = true
            }

            if (
                granted === PermissionsAndroid.RESULTS.GRANTED ||
                granted === true
            ) {
                getLocation()
            } else {
                if (Platform.OS === 'ios') {
                    Geolocation.requestAuthorization(true)
                }
                goToHome()
            }
        } catch (err) {
            goToHome()
        }
    }
    const getLocation = async () => {
        let locationKey = await AsyncStorageService.getItem('location')
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                if (!locationKey) {
                    getLocationApi(latitude, longitude)
                }

                goToHome()
            },
            (error) => {
                handleGeoLocationError(error)
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 10000,
            }
        )
    }

    const getLocationApi = async (latitude, longitude) => {
        try {
            const payload = {
                latitude: latitude,
                longitude: longitude,
            }
            const response = await getUserLocation(payload)
            const locationData = {
                latitude,
                longitude,
                countryData: {
                    country_code: response?.data?.country_code || '',
                    country_name: response?.data?.country_name || '',
                    district_code: response?.data?.district_code || '',
                    district_name: response?.data?.district_name || '',
                },
            }
            dispatch(getLocationAction(locationData))
        } catch (error) {
            console.log(error)
        }
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        }
    })

    return (
        <View style={styles.Landing}>
            <Animated.View style={[styles.circle, animatedStyle]}>
                <CircleSvg />
            </Animated.View>
            <View style={styles.myChildLogo}>
                <View style={styles.logoSpaceBox}>
                    <View style={styles.logoSpaceBoxLeft}>
                        <LogoSvg height={logoHeight} />
                    </View>
                    <View style={styles.logoSpaceBoxRight}>
                        <View style={styles.logoSpaceBoxTop}>
                            <CustomText style={styles.logoSpaceBoxHeading}>
                                {localization['myChild']}
                            </CustomText>
                            <CustomText style={styles.logoSpaceBoxHeading}>
                                {localization['helpline']}
                            </CustomText>
                        </View>
                        <View style={styles.logoSpaceBoxBottom}>
                            <CustomText style={styles.logoSpaceBoxSubheading}>
                                {localization['inThePalmOfYourHands']}
                            </CustomText>
                        </View>
                    </View>
                </View>
                <View style={styles.logoSpace}>
                    <HandSvg height={handHeight} />
                </View>
                <View style={styles.unicefSpace}>
                    <CustomText style={styles.unicefSpaceSubheading}>
                        {localization['supportedBy']}
                    </CustomText>
                    <UnicefSvg />
                </View>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    Landing: {
        flex: 1,
        backgroundColor: '#FFD200',
        justifyContent: 'center',
        alignContent: 'center',
    },
    circle: {
        alignItems: 'center',
    },
    text: {
        color: 'blue',
    },
    myChildLogo: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        height: deviceHeight,
    },
    logoSpace: {
        paddingTop: moderateScale(60),
    },
    logoSpaceBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoSpaceBoxLeft: {
        marginRight: 5,
    },
    logoSpaceBoxRight: {},
    logoSpaceBoxTop: {},
    logoSpaceBoxHeading: {
        fontFamily: 'OpenSans-Bold',
        fontWeight: '700',
        fontSize: moderateScale(45),
        lineHeight: moderateScale(52.5),
        color: '#111111',
    },
    logoSpaceBoxBottom: {},
    logoSpaceBoxSubheading: {
        fontFamily: 'OpenSans-Bold',
        fontWeight: '700',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        color: '#111111',
    },
    unicefSpace: {
        paddingTop: moderateScale(90),
    },
    unicefSpaceSubheading: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        color: '#111111',
    },
})
