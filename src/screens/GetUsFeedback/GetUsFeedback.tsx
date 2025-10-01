import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import React, { useState } from 'react'
import CustomText from '../../components/basedComponents/customText'
import { moderateScale } from 'react-native-size-matters'
import Layout from '../../components/common/Layout/Layout'
import showToast from '../../utils/ToastUtils'
import AsyncStorageService from '../../utils/AsyncStorage'
import { feedBackUser } from '../../services/auth'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import localization from '../../utils/localization'
const GetUsFeedback = () => {
    const [feedbackText, setFeedbackText] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    })
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const handleInputChange = (key: string, value: string) => {
        let formattedValue = value
        const emojiRegex =
            /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2300}-\u{23FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu

        if (key === 'name' && value.length > 50) return

        if (key === 'contact') {
            if (value.length > 12) return
            formattedValue = value.replace(/[^0-9]/g, '')
        }

        if (key === 'message') {
            if (emojiRegex.test(value)) {
                return (formattedValue = value.replace(emojiRegex, ''))
            }
        }
        setFeedbackText((prev) => ({
            ...prev,
            [key]: formattedValue,
        }))
    }

    const sendMessage = async () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        const trimmedFeedback = {
            name: feedbackText.name.trim(),
            email: feedbackText.email.trim(),
            contact: feedbackText.contact.trim(),
            message: feedbackText.message.trim(),
        }

        if (!trimmedFeedback.name) {
            showToast('error', localization['emptyNameError'])
            return
        }
        if (trimmedFeedback.email && !emailRegex.test(trimmedFeedback.email)) {
            showToast('error', localization['invalidEmailError'])
            return
        }

        if (trimmedFeedback.contact && trimmedFeedback.contact.length < 10) {
            showToast('error', localization['invalidContactError'])
            return
        }

        if (!trimmedFeedback.message) {
            showToast('error', localization['emptyMessageError'])
            return
        }

        try {
            const getuserDetails: any = await AsyncStorageService.getItem(
                'user_details'
            )

            if (!getuserDetails?.id) {
                showToast('error', localization['userDetailsError'])
                return
            }

            const payload = {
                name: trimmedFeedback.name,
                email: trimmedFeedback.email,
                contact_number: trimmedFeedback.contact,
                message: trimmedFeedback.message,
                id_mobileappuser: getuserDetails?.id,
                flag: 0,
            }
            const response = await feedBackUser(payload)
            if (response) {
                Alert.alert(
                    'Thanks for feedback',
                    localization['successFeedback'],
                    [
                        {
                            text: 'Ok',
                        },
                    ],
                    { cancelable: false }
                )
                setFeedbackText({
                    name: '',
                    email: '',
                    contact: '',
                    message: '',
                })
                navigation.navigate('Settings')
            } else {
                showToast(
                    'error',
                    'Failed to submit feedback, please try again later.'
                )
            }
        } catch (error) {
            showToast('error', 'Something went wrong. Please try again later.')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Layout
                ScreenName={localization['givefeedback']}
                ScreenSubName={localization['message']}
                BackButton={true}
            >
                <ScrollView>
                    <View style={styles.BgContainer}>
                        <View style={styles.inputBox}>
                            <CustomText style={styles.label}>
                                {localization['name']}
                                <CustomText style={styles.required}>
                                    *
                                </CustomText>
                            </CustomText>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) =>
                                    handleInputChange('name', text)
                                }
                                value={feedbackText.name}
                                placeholder={
                                    !feedbackText.name
                                        ? localization['enterText']
                                        : ''
                                }
                                placeholderTextColor="gray"
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomText style={styles.label}>
                                {localization['email']}
                            </CustomText>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) =>
                                    handleInputChange('email', text)
                                }
                                value={feedbackText.email}
                                keyboardType="email-address"
                                placeholder={
                                    !feedbackText.email
                                        ? localization['enterText']
                                        : ''
                                }
                                placeholderTextColor="gray"
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomText style={styles.label}>
                                {localization['contact']}
                            </CustomText>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                onChangeText={(text) =>
                                    handleInputChange('contact', text)
                                }
                                value={feedbackText.contact}
                                maxLength={10}
                                placeholder={
                                    !feedbackText.contact
                                        ? localization['enterNumber']
                                        : ''
                                }
                                placeholderTextColor="gray"
                            />
                            <CustomText style={styles.alert}>
                                e.g: 2464299999
                            </CustomText>
                        </View>
                        <View style={styles.inputBox}>
                            <CustomText style={styles.label}>
                                {localization['message']}
                                <CustomText style={styles.required}>
                                    *
                                </CustomText>
                            </CustomText>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                onChangeText={(text) =>
                                    handleInputChange('message', text)
                                }
                                value={feedbackText.message}
                                multiline={true}
                                numberOfLines={10}
                                placeholder={
                                    !feedbackText.message
                                        ? localization['typeHere']
                                        : ''
                                }
                                placeholderTextColor="gray"
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={sendMessage}
                            >
                                <CustomText style={styles.buttonText}>
                                    {localization['message']}
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
}

export default GetUsFeedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BgContainer: {
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        paddingBottom: moderateScale(20),
    },
    label: {
        color: '#222',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        marginBottom: moderateScale(5),
    },
    input: {
        height: moderateScale(45),
        borderWidth: 1,
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        width: '100%',
        borderRadius: moderateScale(5),
        borderColor: '#333333',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },

    required: {
        color: '#FF0000',
    },
    inputBox: {
        marginBottom: moderateScale(15),
    },
    pen: {
        position: 'absolute',
        right: 3,
        bottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 15,
        minWidth: '35%',
        backgroundColor: '#FFD200',
        borderRadius: 50,
        marginTop: 30,
    },
    buttonText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        textAlign: 'center',
        color: '#222222',
    },
    alert: {
        color: '#aaa',
        fontSize: moderateScale(12),
        lineHeight: moderateScale(18),
        // marginBottom: moderateScale(5),
        fontStyle: 'italic',
    },
})
