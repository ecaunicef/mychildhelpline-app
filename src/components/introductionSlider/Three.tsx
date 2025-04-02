import {
    Alert,
    StyleSheet,
    Text,
    Modal,
    View,
    Dimensions,
    Pressable,
} from 'react-native'
import React, { useState } from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters'
import CircleSvg from '../../../assets/svgs/Circle'
import HelpHand from '../../../assets/svgs/HelpHand'
import MapSvg from '../../../assets/svgs/Map'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const ThreeSlide = () => {
    const [modalVisible, setModalVisible] = useState(false)
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
                    <HelpHand height={moderateScale(250)} />
                </View>
                <View style={styles.introductionText}>
                    <CustomText style={styles.titleBold}>
                        {localization['youAreNotAlone']}
                    </CustomText>
                    <CustomText style={styles.paragraph}>
                        {localization['introductionThirdParagraph1']}
                    </CustomText>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <MapSvg />
                            <CustomText style={styles.modalHeading}>
                                Location permission is off
                            </CustomText>
                            <Text style={styles.modalText}>
                                Please enable location permission for a better
                                experience{' '}
                            </Text>
                            <Pressable
                                style={[styles.continue]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.continueText}>
                                    Continue
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ThreeSlide

const styles = StyleSheet.create({
    // ============================== Modal
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
    },
    modalView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: moderateScale(55),
        paddingBottom: moderateScale(55),
        paddingLeft: moderateScale(19),
        paddingRight: moderateScale(19),
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    modalHeading: {
        color: '#111',
        fontSize: moderateScale(16),
        fontWeight: '600',
        lineHeight: moderateScale(36),
        marginTop: moderateScale(14),
    },
    modalText: {
        color: '#222',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        marginBottom: moderateScale(32),
        textAlign: 'center',
    },
    continue: {
        backgroundColor: '#FFD200',
        width: '100%',
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 50,
    },
    continueText: {
        fontSize: moderateScale(16),
        color: '#222',
        textAlign: 'center',
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
    // ============================== Modal

    // ============================== Modal Button
    skip: {
        position: 'absolute',
        bottom: 25,
        right: 0,
        alignItems: 'flex-end',
        zIndex: 1,
    },
    skipButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    skipText: {
        marginRight: 8,
    },
    // ============================== Modal Button

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
})
