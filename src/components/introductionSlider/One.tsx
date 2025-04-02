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
import MessageSvg from '../../../assets/svgs/Message'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const OneSlide = () => {
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
                <View style={styles.messageText}>
                    <MessageSvg />
                </View>
                <View style={styles.introductionText}>
                    <CustomText style={styles.title}>
                        {localization['welcomeTo']}
                    </CustomText>
                    <CustomText style={styles.titleBold}>
                        {localization['myChildHelpLine']}
                    </CustomText>
                    <CustomText style={styles.paragraph}>
                        {localization['introductionFirstParagraph1']}
                        {'\n'}
                        {'\n'}
                        {localization['introductionFirstParagraph2']}
                    </CustomText>
                </View>
            </View>
        </View>
    )
}

export default OneSlide

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
        zIndex: 1,
        width: deviceWidth,
        height: deviceHeight,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15,
    },
    logoSpace: {
        height: 220,
        alignItems: 'center',
    },
    introductionText: {
        paddingTop: moderateScale(20),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        alignItems: 'center',
    },
    title: {
        color: '#111',
        fontSize: moderateScale(30),
        fontWeight: '300',
        lineHeight: moderateScale(38),
        fontFamily: 'OpenSans-Light',
        margin: 0,
    },
    titleBold: {
        fontSize: moderateScale(30),
        fontWeight: '700',
        lineHeight: moderateScale(38),
        fontFamily: 'OpenSans-Bold',
    },
    paragraph: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(18),
        textAlign: 'center',
        lineHeight: moderateScale(22),
        minHeight: 80,
    },
    messageText: {
        width: '75%',
        height: 375,
    },
    // ============================== Modal Button
    skip: {
        position: 'absolute',
        bottom: 120,
        right: 0,

        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        zIndex: 1,
    },
    skipButton: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 20,
    },
    skipText: {
        marginRight: 8,
    },
    // ============================== Modal Button
})
