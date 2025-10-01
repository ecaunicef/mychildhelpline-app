import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Pressable,
    Alert,
    Linking,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/common/Layout/Layout'
import moment from 'moment'
import DatePicker from 'react-native-date-picker'
import { moderateScale } from 'react-native-size-matters'
import DateIcon from '../../../assets/svgs/DateIcon'
import CustomText from '../../components/basedComponents/customText'
import { useAppSelector } from '../../store/hooks'
import showToast from '../../utils/ToastUtils'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import AsyncStorageService from '../../utils/AsyncStorage'
import { counsellingUser } from '../../services/auth'
import { getResources } from '../../services/reourcesService'
import DropDownPicker from 'react-native-dropdown-picker'
import localization from '../../utils/localization'

const RequestForCounselling = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [isPressed, setIsPressed] = useState(false)
    const [counseling, setCounseling] = useState<any>({
        appointmentDate: null,
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        message: '',
    })
    const [resourceData, setResourceData] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const [reasonItems, setReasonItems] = useState<
        { label: string; value: string | number }[]
    >([])

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any[]>([])
    const isLoading = useAppSelector((state) => state.loader.isLoading)

    const handleDateSelect = (selectedDate: any) => {
        setCounseling((prevState: any) => ({
            ...prevState,
            appointmentDate: selectedDate,
        }))
    }

    const handleInputChange = (key: string, value: string) => {
        let formattedValue = value

        if (key === 'firstName' && formattedValue.length > 50) return
        if (key === 'telephoneNumber') {
            if (value.length > 10) return
            formattedValue = value.replace(/[^0-9]/g, '')
        }
        setCounseling((prev: any) => ({
            ...prev,
            [key]: value,
        }))
    }

    const registerForm = async () => {
        if (!counseling?.appointmentDate) {
            showToast('error', localization['appointmentDateError'])
            return
        }
        if (!selectedValue?.length) {
            showToast('error', localization['selectReasonError'])
            return
        }
        if (!counseling?.firstName) {
            showToast('error', localization['enterFirstNameError'])
            return
        }
        if (!counseling?.lastName) {
            showToast('error', localization['enterLastNameError'])
            return
        }
        if (!counseling?.telephoneNumber) {
            showToast('error', localization['enterTelephoneError'])
            return
        }
        if (counseling?.telephoneNumber?.replace(/\D/g, '').length < 10) {
            showToast('error', localization['invalidTelephoneError'])
            return
        }
        if (!counseling?.message) {
            showToast('error', localization['enterMessageError'])
            return
        }

        const selectedResonList = reasonItems
            .filter((item: any) => selectedValue.includes(item.value))
            .map((item: any) => item.label)
        const getuserDetails: any = await AsyncStorageService.getItem(
            'user_details'
        )
        console.log('this is councelling payload', getuserDetails)
        const payload: any = {
            appointment_date: moment(counseling.appointmentDate).format(
                'DD-MM-YYYY'
            ),
            appointment_reason: JSON.stringify(selectedResonList),
            first_name: counseling.firstName,
            second_name: counseling.lastName,
            mobile_number: counseling.telephoneNumber,
            message: counseling.message,
            id_mobileappuser: getuserDetails?.id,
        }
        console.log('this is councelling payload', payload)
        try {
            const response = await counsellingUser(payload)
            if (response) {
                Alert.alert(
                    'Thanks for requesting counselling',
                    'Your request has been successfully submitted. A counsellor will contact you shortly. Thank you for reaching out!',
                    [
                        {
                            text: 'Ok',
                            onPress: () => showSecondAlert(),
                        },
                    ],
                    { cancelable: false }
                )
            }
        } catch (error: any) {
            if (error.response) {
                const errorMessage =
                    error.response.data?.message ||
                    'Counselling failed due to server error.'
                showToast('error', errorMessage)
            } else if (error.request) {
                showToast(
                    'error',
                    'No response from the server. Please try again later.'
                )
            } else {
                showToast(
                    'error',
                    'An unexpected error occurred. Please try again.'
                )
            }
        }
    }

    const callNo = (selected_area: any) => {
        if (selected_area == 'St. Vincent and the Grenadines') {
            Linking.openURL(`tel:4211`)
        } else if (selected_area == 'Barbados') {
            Linking.openURL(`tel:2465373644`)
        } else if (selected_area == 'Grenada') {
            Linking.openURL(`tel:677`)
        } else {
            Linking.openURL(`tel:2684647421`)
        }
        navigation.navigate('Root')
    }

    const resetForm = () => {
        setCounseling({
            appointmentDate: null,
            reason: [],
            firstName: '',
            lastName: '',
            telephoneNumber: '',
            message: '',
        })
        setSelectedValue([])
        navigation.navigate('Root')
    }

    const getResourcesData = async () => {
        const payload = {
            classificationType: 'reason_for_counselling',
        }
        try {
            const response: any = await getResources(payload)
            // console.log('this is ereeere',response)
            if (response?.data) {
                setResourceData(response.data.data)
            } else {
                setResourceData([])
            }
        } catch (error) {
            console.error('Error fetching resources:', error)
        }
    }

    useEffect(() => {
        getResourcesData()
    }, [])

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response: any = await getResources({
                    classificationType: 'reason_for_counselling',
                })
                if (response?.data && Array.isArray(response.data.data)) {
                    setReasonItems(
                        response.data.data.map((item: any) => ({
                            label:
                                localization?._language == 'en'
                                    ? item.classification_name
                                    : item?.[
                                          `classification_name_${localization?._language}`
                                      ] || item.classification_name,
                            value: item.id,
                        }))
                    )
                } else {
                    console.error('Unexpected data format:', response?.data)
                }
            } catch (error) {
                console.error('Error fetching resources:', error)
            }
        }

        fetchResources()
    }, [])

    const showSecondAlert = async () => {
        const getuserDetails: any = await AsyncStorageService.getItem(
            'user_details'
        )

        Alert.alert(
            'Need Immediate Support?',
            'If you need immediate support, please use the Call Us feature.',
            [
                {
                    text: 'Call Us',
                    onPress: () => callNo(getuserDetails?.country_name),
                },
                {
                    text: 'Cancel',
                    onPress: () => resetForm(),
                },
            ],
            { cancelable: false }
        )
    }

    const getCustomSelectedText = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return localization['selectMultipleReason']
        }
        return `${selectedValue
            .map((val) => reasonItems.find((item) => item.value === val)?.label)
            .join(', ')}`
    }
    const isFormValid =
        Object.values(counseling).every(
            (value) => value !== null && value !== ''
        ) || isLoading

    return (
        <Layout ScreenName={localization['reqcoun']} BackButton={true}>
            <ScrollView>
                <View style={styles.BgContainer}>
                    <View>
                        <CustomText style={styles.introline}>
                            {localization['fillFormLine']}
                        </CustomText>
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['appointmentDate']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TouchableOpacity
                            style={styles.input}
                            onPress={() => setOpen(true)}
                            activeOpacity={0.2}
                        >
                            <Text>
                                {counseling.appointmentDate ? (
                                    moment(counseling.appointmentDate).format(
                                        'DD-MM-YYYY'
                                    )
                                ) : (
                                    <Text
                                        style={{
                                            color: 'gray',
                                        }}
                                    >
                                        Select date
                                    </Text>
                                )}
                            </Text>
                            <DateIcon style={styles.dateImage} />
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            open={open}
                            mode="date"
                            date={counseling.appointmentDate || new Date()}
                            minimumDate={new Date()}
                            onCancel={() => {
                                setOpen(false)
                            }}
                            onConfirm={(date) => {
                                setOpen(false)
                                handleDateSelect(date)
                            }}
                            title={localization['appointmentDate']}
                            buttonColor="red"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['reasonForCounselling']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <DropDownPicker
                            open={isOpen}
                            value={selectedValue}
                            items={reasonItems}
                            setOpen={setIsOpen}
                            setValue={setSelectedValue}
                            setItems={setReasonItems}
                            multiple={true}
                            listMode="SCROLLVIEW"
                            multipleText={`${
                                selectedValue.length > 1
                                    ? `${selectedValue.length} ${localization['reasonsSelected']}`
                                    : `${selectedValue.length} ${localization['reasonSelected']}`
                            }`}
                            placeholder={getCustomSelectedText()}
                            listItemContainerStyle={styles.listItemContainer}
                            listItemLabelStyle={styles.listItemLabel}
                            placeholderStyle={{ color: 'gray' }}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['firstName']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) =>
                                handleInputChange('firstName', text)
                            }
                            value={counseling.firstName}
                            placeholder={
                                !counseling.firstName
                                    ? localization['enterText']
                                    : ''
                            }
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['lastName']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) =>
                                handleInputChange('lastName', text)
                            }
                            value={counseling.lastName}
                            placeholder={
                                !counseling.lastName
                                    ? localization['enterText']
                                    : ''
                            }
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['telephoneNumber']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={(text) =>
                                handleInputChange('telephoneNumber', text)
                            }
                            value={counseling.telephoneNumber}
                            placeholder={
                                !counseling.telephoneNumber
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
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TextInput
                            onChangeText={(text) =>
                                handleInputChange('message', text)
                            }
                            style={[styles.input, styles.textArea]}
                            multiline
                            value={counseling.message}
                            numberOfLines={8}
                            placeholder={
                                !counseling.message
                                    ? localization['typeHere']
                                    : ''
                            }
                            placeholderTextColor="gray"
                        />
                    </View>
                    <Pressable
                        style={[
                            styles.booking,
                            isPressed && styles.bookingPressed,
                            !isFormValid && styles.bookingDisabled,
                        ]}
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
                        onPress={() => registerForm()}
                        disabled={!isFormValid}
                    >
                        <CustomText style={styles.bookingText}>
                            {isLoading
                                ? localization['loading']
                                : localization['bookCounselling']}
                        </CustomText>
                    </Pressable>
                    <Pressable style={[styles.cancel]} onPress={resetForm}>
                        <CustomText style={styles.cancelText}>
                            {localization['cancel']}
                        </CustomText>
                    </Pressable>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default RequestForCounselling

const styles = StyleSheet.create({
    textArea: {
        height: 140,
        textAlignVertical: 'top',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
    },
    BgContainer: {
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
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
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(12),
        width: '100%',
        borderRadius: moderateScale(5),
        borderColor: '#333333',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    dateImage: {
        position: 'absolute',
        top: '50%',
        right: 10,
    },
    required: {
        color: '#FF0000',
    },
    inputBox: {
        marginBottom: moderateScale(15),
        position: 'relative',
    },
    introline: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        marginTop: moderateScale(10),
        marginBottom: moderateScale(20),
    },
    booking: {
        backgroundColor: '#FFD200',
        width: '100%',
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 50,
        marginTop: 30,
    },
    bookingText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        color: '#222',
        textAlign: 'center',
    },
    cancel: {
        backgroundColor: '#ffffff',
        width: '100%',
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 50,
        marginBottom: 40,
        marginTop: 15,
    },
    cancelText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        color: '#222',
        textAlign: 'center',
    },
    bookingPressed: {
        backgroundColor: '#E6B800', // Slightly darker shade
    },
    bookingDisabled: {
        backgroundColor: '#cccccc',
    },
    listItemContainer: {
        borderBottomWidth: 1,
        borderColor: '#333333',
        padding: moderateScale(12),
        height: 'auto',
    },
    listItemLabel: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: '400',
        color: '#333333',
        width: '100%',
    },
    alert: {
        color: '#aaa',
        fontSize: moderateScale(12),
        lineHeight: moderateScale(18),
        marginBottom: moderateScale(5),
        fontStyle: 'italic',
    },
})
