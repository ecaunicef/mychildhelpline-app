import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters'
import CircleSvg from '../../../assets/svgs/Circle'
import PrivacySvg from '../../../assets/svgs/PrivacyMatters'
import ArrowRightSvg from '../../../assets/svgs/ArrowRight'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const TwoSlide = () => {
    const rotation = useSharedValue(0)

    // Trigger the loop animation
    React.useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 15000,
                easing: Easing.linear, // Linear for continuous rotation
            }),
            10000
        )
    }, [])
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${rotation.value}deg` }, // Convert to degrees
            ],
        }
    })
    return (
        <View style={styles.Landing}>
            <Animated.View style={[styles.circle, animatedStyle]}>
                <CircleSvg />
            </Animated.View>
            <View style={styles.myChildLogo}>
                <View style={styles.logoSpace}>
                    <PrivacySvg height={moderateScale(250)} />
                </View>
                <View style={styles.introductionText}>
                    <CustomText style={styles.titleBold}>
                        {localization['yourPrivacyMatters']}
                    </CustomText>
                    <CustomText style={styles.paragraph}>
                        {localization['introductionSecondParagraph1']}
                    </CustomText>
                </View>
            </View>
        </View>
    )
}

export default TwoSlide

const styles = StyleSheet.create({
    Landing: {
        flex: 1,
        backgroundColor: '#FFD200',
        width: deviceWidth,
        height: deviceHeight,
        position: 'relative',
        overflow: 'hidden',
    },
    circle: {
        position: 'absolute',
        top: -50,
        left: 0,
        zIndex: -1,
        width: deviceWidth,
        height: deviceHeight + 50,
    },
    myChildLogo: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: deviceHeight - 50,
        justifyContent: 'center',
    },
    logoSpace: {
        height: 250,
        alignItems: 'center',
        marginTop: moderateScale(80),
        marginBottom: moderateScale(50),
    },
    introductionText: {
        paddingTop: moderateScale(20),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        alignItems: 'center',
    },
    titleBold: {
        fontSize: moderateScale(30),
        fontWeight: '600',
        lineHeight: moderateScale(38),
    },
    paragraph: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(18),
        textAlign: 'center',
        lineHeight: moderateScale(22),
        minHeight: 80,
    },
    // ============================== Modal Button
    skip: {
        position: 'absolute',
        bottom: deviceHeight * 0.0375,
        right: 20,

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        zIndex: 1,
    },
    skipButton: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20,
    },
    skipText: {
        marginRight: 8,
    },
    // ============================== Modal Button
})
