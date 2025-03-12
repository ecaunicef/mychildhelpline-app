import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Layout from '../../components/common/Layout/Layout'
import CustomText from '../../components/basedComponents/customText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
    fontFamilly,
    increaseFontSize,
    lineHeight,
    textSpacing,
} from '../../store/actions/commonActions'
import CheckIconSVG from '../../../assets/svgs/CheckIcon'
import localization from '../../utils/localization'

const Accessibility = () => {
    const Accessibility = useAppSelector(
        (state) => state.accessibility.clickCount
    )

    const dispatch = useAppDispatch()

    const handleIncreaseFontSize = () => {
        dispatch(increaseFontSize())
    }

    const handleTextSpacing = () => {
        dispatch(textSpacing())
    }

    const handleLineHeight = () => {
        dispatch(lineHeight())
    }

    const handleFontFamilly = () => {
        dispatch(fontFamilly())
    }

    return (
        <Layout ScreenName={localization['accessibility']} BackButton={true}>
            <ScrollView bounces={false}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleFontFamilly}
                    >
                        {(Accessibility.dyslexiaFriendly === 1 ||
                            Accessibility.dyslexiaFriendly === 2) && (
                            <View style={styles.activeCheck}>
                                <CheckIconSVG style={styles.activeCheckIcon} />
                            </View>
                        )}
                        <Image
                            source={require('../../../assets/image/dyslexiaFriendly.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['dyslexiaFriendly']}
                        </CustomText>
                        {(Accessibility.dyslexiaFriendly === 1 ||
                            Accessibility.dyslexiaFriendly === 2) && (
                            <View style={[styles.buttonOptionSteps]}>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.dyslexiaFriendly === 1 ||
                                            Accessibility.dyslexiaFriendly ===
                                                2) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsTwoStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        Accessibility.dyslexiaFriendly == 2 &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsTwoStyles.buttonOptionStep,
                                    ]}
                                ></View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleIncreaseFontSize}
                    >
                        {(Accessibility.fontSize === 1 ||
                            Accessibility.fontSize === 2 ||
                            Accessibility.fontSize === 3) && (
                            <View style={styles.activeCheck}>
                                <CheckIconSVG style={styles.activeCheckIcon} />
                            </View>
                        )}
                        <Image
                            source={require('../../../assets/image/biggerText.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['biggerText']}
                        </CustomText>
                        {(Accessibility.fontSize === 1 ||
                            Accessibility.fontSize === 2) && (
                            <View style={[styles.buttonOptionSteps]}>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.fontSize === 1 ||
                                            Accessibility.fontSize === 2) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsTwoStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        Accessibility.fontSize === 2 &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsTwoStyles.buttonOptionStep,
                                    ]}
                                ></View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLineHeight}
                    >
                        {(Accessibility.lineHeight === 1 ||
                            Accessibility.lineHeight === 2 ||
                            Accessibility.lineHeight === 3) && (
                            <View style={styles.activeCheck}>
                                <CheckIconSVG style={styles.activeCheckIcon} />
                            </View>
                        )}
                        <Image
                            source={require('../../../assets/image/lineHeight.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['lineHeight']}
                        </CustomText>
                        {(Accessibility.lineHeight === 1 ||
                            Accessibility.lineHeight === 2 ||
                            Accessibility.lineHeight === 3) && (
                            <View style={[styles.buttonOptionSteps]}>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.lineHeight === 1 ||
                                            Accessibility.lineHeight === 2 ||
                                            Accessibility.lineHeight === 3) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.lineHeight === 2 ||
                                            Accessibility.lineHeight === 3) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        Accessibility.lineHeight === 3 &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTextSpacing}
                    >
                        {(Accessibility.texSpacing === 1 ||
                            Accessibility.texSpacing === 2 ||
                            Accessibility.texSpacing === 3) && (
                            <View style={styles.activeCheck}>
                                <CheckIconSVG style={styles.activeCheckIcon} />
                            </View>
                        )}
                        <Image
                            source={require('../../../assets/image/textSpacing.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['textSpacing']}
                        </CustomText>
                        {(Accessibility.texSpacing === 1 ||
                            Accessibility.texSpacing === 2 ||
                            Accessibility.texSpacing === 3) && (
                            <View style={[styles.buttonOptionSteps]}>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.texSpacing === 1 ||
                                            Accessibility.texSpacing === 2 ||
                                            Accessibility.texSpacing === 3) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        (Accessibility.texSpacing === 2 ||
                                            Accessibility.texSpacing === 3) &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                                <View
                                    style={[
                                        styles.buttonOptionStep,
                                        Accessibility.texSpacing === 3 &&
                                            styles.buttonOptionStepActive,
                                        buttonOptionStepsThreeStyles.buttonOptionStep,
                                    ]}
                                ></View>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Accessibility

const styles = StyleSheet.create({
    customMarginBottom: {
        marginBottom: 10,
    },
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    bgImage: {},
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 30,
        marginBottom: 30,
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
    },
    modalHeaderTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    headerClose: {
        top: 0,
        right: 15,
        opacity: 1,
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 50,
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.25)',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        borderRadius: 8,
        padding: 20,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
    },
    label: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 8,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 140,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#FFD200',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: 'auto',
    },
    saveButtonText: {
        color: '#000',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
        position: 'relative',
    },
    icon: {
        width: 75,
        height: 75,
    },
    buttonText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        textAlign: 'center',
    },
    buttonsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        padding: 15,
        marginBottom: 30,
    },
    activeCheck: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA500',
        width: 20,
        height: 20,
        borderRadius: 50,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    activeCheckIcon: {
        width: 12,
        height: 15,
    },
    buttonOptionSteps: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 3,
        marginTop: 10,
    },
    buttonOptionStep: {
        backgroundColor: '#FFF1D8',
        height: 3,
    },
    buttonOptionStepActive: {
        backgroundColor: '#FFA500',
    },
})

const buttonOptionStepsTwoStyles = StyleSheet.create({
    buttonOptionStep: {
        width: '48%',
    },
})

const buttonOptionStepsThreeStyles = StyleSheet.create({
    buttonOptionStep: {
        width: '30.6666666667%',
    },
})
