import React, { useEffect, useRef, useState } from 'react'
import {
    Dimensions,
    PermissionsAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import OneSlide from '../components/introductionSlider/One'
import TwoSlide from '../components/introductionSlider/Two'
import ThreeSlide from '../components/introductionSlider/Three'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Svg, { Rect } from 'react-native-svg'
import CustomText from '../components/basedComponents/customText'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import ArrowRightSvg from '../../assets/svgs/ArrowRight'
import LocationRequestMap from '../../assets/svgs/LocationRequestMap'
import localization from '../utils/localization'

const IntoductionSlider = () => {
    const navigation = useNavigation<any>()
    const [selectedScreen, setselectedScreen] = useState<number>(0)
    const [showLocationAccess, setShowLocationAccess] = useState(false)
    const onboardingRef = useRef<Onboarding>(null)

    const [locationPrompt, setlocationPrompt] = useState('')
    const handleSkipButton = async () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BeforeWeBegin' }],
            })
        )
    }

    const handleDoneButton = async () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BeforeWeBegin' }],
            })
        )
    }
    useEffect(() => {
        if (locationPrompt == 'granted') {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BeforeWeBegin' }],
                })
            )
        }
    }, [locationPrompt])

    return (
        <View style={{ flex: 1 }}>
            <Onboarding
                ref={onboardingRef}
                containerStyles={{ flex: 1 }}
                SkipButtonComponent={() => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                handleSkipButton()
                            }}
                            style={[
                                styles.skipButton,
                                {
                                    left:
                                        Dimensions.get('screen').width -
                                        moderateScale(65.5),
                                },
                            ]}
                        >
                            <CustomText style={styles.skipText}>
                                {localization['skipText']}
                            </CustomText>
                            <ArrowRightSvg style={styles.skipIcon} />
                        </TouchableOpacity>
                    )
                }}
                showNext={false}
                DotComponent={() => {
                    return (
                        <View
                            style={{
                                zIndex: 1,
                                position: 'absolute',
                                bottom: verticalScale(18),
                                left: 0,
                                right: 0,
                                alignItems: 'center',
                            }}
                        >
                            {selectedScreen === 0 ? (
                                <FirstDot />
                            ) : selectedScreen === 1 ? (
                                <SecondDot />
                            ) : (
                                <ThirdDot />
                            )}
                        </View>
                    )
                }}
                DoneButtonComponent={() => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                handleDoneButton()
                            }}
                            style={[styles.doneButton]}
                        >
                            <CustomText style={styles.skipText}>
                                {localization['doneText']}
                            </CustomText>
                        </TouchableOpacity>
                    )
                }}
                bottomBarHeight={-100}
                imageContainerStyles={{
                    width: '100%',
                    height: '125%',
                    top: 0,
                    bottom: 0,
                    zIndex: 1,
                    position: 'absolute',
                }}
                bottomBarColor="transparent"
                bottomBarHighlight={false}
                pageIndexCallback={(pageIndex: number) => {
                    setselectedScreen(pageIndex)
                }}
                pages={[
                    {
                        backgroundColor: 'transparent',
                        image: <OneSlide />,
                        title: '',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: 'transparent',
                        image: <TwoSlide />,
                        title: '',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: 'transparent',
                        image: <ThreeSlide />,
                        title: '',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
            {showLocationAccess && (
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: 'transparent',
                    }}
                >
                    <View style={styles.locationModal}>
                        <View>
                            <LocationRequestMap />
                        </View>
                        <Text
                            style={{
                                fontSize: moderateScale(16),
                                fontFamily: 'OpenSans-Bold',
                                marginBottom: verticalScale(5),
                            }}
                        >
                            Location permission is off
                        </Text>
                        <Text
                            style={{
                                fontSize: moderateScale(14),
                                fontFamily: 'OpenSans-Regular',
                                alignSelf: 'center',
                                marginBottom: verticalScale(0),
                            }}
                        >
                            {`Please enable location permission for a better`}{' '}
                        </Text>
                        <Text
                            style={{
                                fontSize: moderateScale(14),
                                fontFamily: 'OpenSans-Regular',
                                alignSelf: 'center',
                                marginBottom: verticalScale(25),
                            }}
                        >
                            {`experience`}{' '}
                        </Text>
                        <TouchableOpacity
                            onPress={async () => {
                                const hasLocationPermission =
                                    await PermissionsAndroid.check(
                                        PermissionsAndroid.PERMISSIONS
                                            .ACCESS_FINE_LOCATION
                                    )

                                if (!hasLocationPermission) {
                                    const granted =
                                        await PermissionsAndroid.request(
                                            PermissionsAndroid.PERMISSIONS
                                                .ACCESS_FINE_LOCATION
                                        )

                                    if (
                                        granted ===
                                        PermissionsAndroid.RESULTS.GRANTED
                                    ) {
                                        console.log(
                                            'Location permission granted'
                                        )
                                    } else {
                                        console.log(
                                            'Location permission denied'
                                        )
                                    }
                                }
                                setShowLocationAccess(false)
                                navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: 'BeforeWeBegin' }],
                                    })
                                )
                            }}
                            activeOpacity={0.8}
                            style={{
                                width: '85%',
                                padding: verticalScale(8),
                                backgroundColor: '#FFD200',
                                borderRadius: moderateScale(25),
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: moderateScale(14),
                                    fontFamily: 'OpenSans-Medium',
                                    alignSelf: 'center',
                                    marginBottom: verticalScale(5),
                                }}
                            >
                                {`Continue`}{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

export default IntoductionSlider

function FirstDot(props: any) {
    return (
        <Svg
            width={84}
            height={7}
            viewBox="0 0 84 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.851562} width={43} height={7} rx={3.5} fill="#977D04" />
            <Rect x={49.8516} width={14} height={7} rx={3.5} fill="#FFF8D7" />
            <Rect x={69.8516} width={14} height={7} rx={3.5} fill="#FFF8D7" />
        </Svg>
    )
}

function SecondDot(props: any) {
    return (
        <Svg
            width={84}
            height={7}
            viewBox="0 0 84 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={20.8516} width={43} height={7} rx={3.5} fill="#977D04" />
            <Rect x={0.851562} width={14} height={7} rx={3.5} fill="#FFF8D7" />
            <Rect x={69.8516} width={14} height={7} rx={3.5} fill="#FFF8D7" />
        </Svg>
    )
}

function ThirdDot(props: any) {
    return (
        <Svg
            width={84}
            height={7}
            viewBox="0 0 84 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={40.8516} width={43} height={7} rx={3.5} fill="#977D04" />
            <Rect x={0.851562} width={14} height={7} rx={3.5} fill="#FFF8D7" />
            <Rect x={20.8516} width={14} height={7} rx={3.5} fill="#FFF8D7" />
        </Svg>
    )
}

const styles = StyleSheet.create({
    locationModal: {
        zIndex: 1,
        width: '100%',
        height: '45%',
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    skipButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: verticalScale(12.5),
        zIndex: 1,
    },
    doneButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: verticalScale(12.5),
        right: moderateScale(15),
        zIndex: 1,
    },
    skipText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(16),
        letterSpacing: 1,
        color: '#222222',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        padding: moderateScale(5),
    },
    skipIcon: {},

    // Location Modal Design
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
