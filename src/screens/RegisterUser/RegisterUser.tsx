import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Modal,
} from 'react-native'
import { launchCamera, Asset, CameraOptions } from 'react-native-image-picker'
import DatePicker from 'react-native-date-picker'
import React, { useEffect, useRef, useState } from 'react'
import CustomText from '../../components/basedComponents/customText'
import SelectDropdown from 'react-native-select-dropdown'
import ArrowRightSvg from '../../../assets/svgs/ArrowRight'
import DateIcon from '../../../assets/svgs/DateIcon'
import User from '../../../assets/svgs/User'
import PenSvg from '../../../assets/svgs/Pen'
import NoImageSvg from '../../../assets/svgs/NoImage'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'

import { moderateScale } from 'react-native-size-matters'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getUserCountry, signUpUser } from '../../services/auth'
import showToast from '../../utils/ToastUtils'
import AsyncStorageService from '../../utils/AsyncStorage'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import localization from '../../utils/localization'
import useLanguage from '../../hooks/useLanguage'
import Layout from '../../components/common/Layout/Layout'
import { Avataars } from 'rn-customize-avatar/avataaars'

import CommentTopSectionBoth from '../../../assets/svgs/CommentTopSectionBoth'
import { isModalShow } from '../../store/actions/commonActions'
import { deviceHeight } from '../../utils/constants'

const { height } = Dimensions.get('window')
const bgHeight = height

const languagesList = [
    { languageName: 'English', key: 'en' },
    { languageName: 'Spanish', key: 'es' },
    { languageName: 'French', key: 'fr' },
    { languageName: 'Dutch', key: 'nl' },
]

const genderList = [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }]

const RegisterUser = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [registerState, setRegisterState] = useState<any>({
        language: null,
        gender: null,
        country: null,
        district: null,
        dob: null,
        name: '',
        isChecked: false,
        avatar: null,
        image: null,
    })
    const [countryList, setCountryList] = useState<any>([])
    const [districtList, setDistrictList] = useState<any>([])
    const [open, setOpen] = useState(false)
    const isLoading = useAppSelector((state) => state.loader.isLoading)
    const language = useAppSelector((state) => state.language.language)
    const { handleLanguageChange } = useLanguage()
    const [userAvatar, setuserAvatar] = useState<any>('')
    const [userProfilePic, setuserProfilePic] = useState<any>('')
    const [modalVisible, setModalVisible] = useState(false)
    const dropdownRef = useRef<SelectDropdown | null>(null)
    const dispatch = useAppDispatch()
    const locationSdetails = useAppSelector((state) => state.location)

    const handleSelect = (selectedItem: any, index: any, dropdownName: any) => {
        setRegisterState((prevState: any) => ({
            ...prevState,
            [dropdownName]: selectedItem,
        }))

        if (dropdownName === 'country') {
            if (dropdownRef.current) {
                dropdownRef.current.reset()
                setRegisterState((prevState: any) => ({
                    ...prevState,
                    district: null,
                }))
            }
            const sortDistrict = selectedItem?.districts?.sort(
                (a: any, b: any) => {
                    return a.district_name.localeCompare(b.district_name)
                }
            )
            setDistrictList(sortDistrict)
        }
        if (dropdownName === 'language') {
            handleLanguageChange(selectedItem?.key)
        }
    }

    const handleDateSelect = (selectedDate: any) => {
        setRegisterState((prevState: any) => ({
            ...prevState,
            dob: selectedDate,
        }))
    }

    const handleInputChange = (inputValue: any) => {
        setRegisterState((prevState: any) => ({
            ...prevState,
            name: inputValue,
        }))
    }

    const handleCheckboxChange = () => {
        setRegisterState((prevState: any) => ({
            ...prevState,
            isChecked: !prevState.isChecked,
        }))
    }

    const getUserCountryData = async () => {
        try {
            const data: any = await getUserCountry()
            setCountryList(data?.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        getUserProfileData()
    }, [])

    async function getUserProfileData() {
        let data = await AsyncStorageService.getItem('UserProfilePic')
        let fcmtoken = await AsyncStorageService.getItem('@fcmToken')
        setRegisterState((prevState: any) => ({
            ...prevState,
            deviceToken: fcmtoken,
        }))
        setuserProfilePic(data)
    }

    function calculateAge(birthDateString: any) {
        const birthDate = new Date(birthDateString)
        const currentDate = new Date()
        let age = currentDate.getFullYear() - birthDate.getFullYear()
        const isBeforeBirthdayThisYear =
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() < birthDate.getDate())

        if (isBeforeBirthdayThisYear) {
            age -= 1
        }

        return age
    }

    function is2YearsOldAndWithin90(dateString: string) {
        const dob = moment(dateString, 'YYYY-MM-DD')
        const dobPlus2 = dob.clone().add(2, 'years')
        const dobPlus90 = dob.clone().add(90, 'years')
        const today = moment()
        const hasReachedTwoYears = today.isSameOrAfter(dobPlus2)
        const isWithinNinetyYears = today.isSameOrBefore(dobPlus90)
        return {
            isTwoYearsOld: hasReachedTwoYears,
            isWithin90Years: isWithinNinetyYears,
        }
    }

    const registerForm = async () => {
        const age = calculateAge(registerState?.dob)
        const checkAgeVakidation = is2YearsOldAndWithin90(registerState?.dob)

        if (!registerState?.language) {
            showToast('error', localization['selectLanguageError'])
            return
        }
        if (!registerState?.gender) {
            showToast('error', localization['selectGenderError'])
            return
        }
        if (!registerState?.country) {
            showToast('error', localization['selectCountryError'])
            return
        }
        if (!registerState?.district) {
            showToast('error', localization['selectDistrictError'])
            return
        }
        if (!registerState?.dob) {
            showToast('error', localization['selectDobError'])
            return
        }

        if (!checkAgeVakidation.isTwoYearsOld) {
            showToast('error', localization['ageTooYoungError'])
            return
        }

        if (!checkAgeVakidation.isWithin90Years) {
            showToast('error', localization['ageTooOldError'])
            return
        }

        if (!registerState?.name) {
            showToast('error', localization['enterNameError'])
            return
        }

        const payload: any = {
            name: registerState?.name,
            gender: registerState?.gender?.name,
            age: age,
            // area_level: 'AIA014',
            area_level: registerState?.district?.district_area_code,
            language: registerState?.language?.key,
            deviceToken: registerState.deviceToken,
        }
        try {
            const response: any = await signUpUser(payload)
            if (response) {
                const payload2 = {
                    ...response.data,
                    country_name: registerState?.country?.country_name,
                    country_area_code:
                        registerState?.country?.country_area_code,
                    district_name: registerState.district.district_name,
                    date_of_birth: registerState.dob,
                }
                await AsyncStorageService.setItem('user_details', payload2)
                await AsyncStorageService.setItem('logedin_key', true)
                await AsyncStorageService.setItem('location', locationSdetails)
                showToast('success', localization['registeredsuccessfully'])
                setRegisterState({
                    language: null,
                    gender: null,
                    country: null,
                    district: null,
                    dob: null,
                    name: '',
                    isChecked: false,
                    avatar: null,
                    image: null,
                })

                setDistrictList([])
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Root' }],
                    })
                )
            }
        } catch (error: any) {
            if (error.response) {
                const errorMessage =
                    error.response.data?.message ||
                    'Registration failed due to server error.'
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

    useEffect(() => {
        getUserCountryData()
    }, [])

    useEffect(() => {
        localization.setLanguage(language)
    }, [language])

    const handleOpenCamera = async () => {
        const options: CameraOptions = {
            mediaType: 'photo' as const,
            includeBase64: true,
            maxWidth: 1024, // Adjust to a suitable value
            maxHeight: 1024,
            quality: 0.6,
        }

        try {
            launchCamera(options, async (response) => {
                if (response?.assets && response?.assets?.length > 0) {
                    const capturedImage: Asset = response?.assets?.[0]
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
    const isDisabled = !registerState?.isChecked || isLoading

    // Handler to get parent width
    const [parentWidth, setParentWidth] = useState(0)

    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout
        setParentWidth(width)
    }
    useEffect(() => {
        dispatch(isModalShow(true))
    }, [dispatch])

    const preFillForm = () => {
        const normalize = (value: string | undefined) =>
            value?.trim().toLowerCase()

        const countryListData = countryList?.find(
            (item: any) =>
                normalize(item.country_name) ==
                normalize(locationSdetails?.countryData?.country_name)
        )
        const sortedDistricts =
            countryListData?.districts?.sort((a: any, b: any) =>
                a.district_name.localeCompare(b.district_name)
            ) || []

        const selectedDistrict = sortedDistricts?.find(
            (items: any) =>
                items.district_area_code ==
                locationSdetails?.countryData?.district_code
        )

        setDistrictList(sortedDistricts?.length > 0 ? sortedDistricts : [])

        setRegisterState((prevState: any) => ({
            ...prevState,
            country: countryListData || '',
            district: selectedDistrict || '',
        }))
    }

    useEffect(() => {
        preFillForm()
    }, [countryList, locationSdetails])

    return (
        <ScrollView>
            <View style={styles.bgBefore}>
                <Image
                    source={require('../../../assets/image/BeforeWeBegin.png')}
                    style={styles.bgImage}
                />
            </View>
            <View style={styles.BgContainer}>
                <View style={styles.cardContainer}>
                    <CommentTopSectionBoth
                        commonCommentTitle={localization?.letMeKnow}
                        commentTop={45}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.language}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <SelectDropdown
                        data={languagesList}
                        onSelect={(selectedItem, index) =>
                            handleSelect(selectedItem, index, 'language')
                        }
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem ? (
                                            localization[
                                                selectedItem.languageName
                                            ]
                                        ) : (
                                            <Text style={{ color: 'gray' }}>
                                                {localization?.selectLanguage}
                                            </Text>
                                        )}
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View
                                    style={{
                                        ...styles.selectOptions,
                                        ...(isSelected && {
                                            backgroundColor: '#fff',
                                        }),
                                    }}
                                >
                                    <Text>
                                        {localization[item.languageName]}
                                    </Text>
                                </View>
                            )
                        }}
                        dropdownStyle={styles.dropdownMenuStyle1}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.gender}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <SelectDropdown
                        data={genderList}
                        onSelect={(selectedItem, index) =>
                            handleSelect(selectedItem, index, 'gender')
                        }
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem ? (
                                            localization[selectedItem.name]
                                        ) : (
                                            <Text style={{ color: 'gray' }}>
                                                {localization?.selectedGender}
                                            </Text>
                                        )}
                                    </Text>

                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View
                                    style={{
                                        ...styles.selectOptions,
                                        ...(isSelected && {
                                            backgroundColor: '#fff',
                                        }),
                                    }}
                                >
                                    <Text>{localization[item.name]}</Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle1}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.country}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>

                    <SelectDropdown
                        data={countryList}
                        defaultValue={registerState.country}
                        onSelect={(selectedItem, index) =>
                            handleSelect(selectedItem, index, 'country')
                        }
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        <Text
                                            style={{
                                                color: selectedItem
                                                    ? ''
                                                    : 'gray',
                                            }}
                                        >
                                            {selectedItem
                                                ? localization?._language ===
                                                  'en'
                                                    ? selectedItem?.country_name
                                                    : selectedItem?.[
                                                          `country_name_${localization?._language}`
                                                      ] ||
                                                      selectedItem?.country_name
                                                : localization?.selectCountry}
                                        </Text>
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View
                                    style={{
                                        ...styles.selectOptions,
                                        ...(isSelected && {
                                            backgroundColor: '#fff',
                                        }),
                                    }}
                                >
                                    <Text>
                                        {' '}
                                        {localization?._language == 'en'
                                            ? item?.country_name
                                            : item?.[
                                                  `country_name_${localization?._language}`
                                              ] || item?.country_name}
                                    </Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={true}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.district}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <SelectDropdown
                        ref={dropdownRef}
                        data={districtList}
                        defaultValue={registerState.district}
                        onSelect={(selectedItem, index) =>
                            handleSelect(selectedItem, index, 'district')
                        }
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text
                                        style={{
                                            color: selectedItem
                                                ? undefined
                                                : 'gray',
                                        }}
                                    >
                                        {selectedItem
                                            ? localization?._language === 'en'
                                                ? selectedItem?.district_name
                                                : selectedItem?.[
                                                      `district_name_${localization?._language}`
                                                  ] ||
                                                  selectedItem?.district_name
                                            : localization?.selectDistrict}
                                    </Text>

                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View
                                    style={{
                                        ...styles.selectOptions,
                                        ...(isSelected && {
                                            backgroundColor: '#fff',
                                        }),
                                    }}
                                >
                                    <Text>
                                        {localization?._language == 'en'
                                            ? item?.district_name
                                            : item?.[
                                                  `district_name_${localization?._language}`
                                              ] || item?.district_name}
                                    </Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={true}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.dob}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <TouchableOpacity
                        style={styles.input}
                        onPress={() => setOpen(true)}
                        activeOpacity={0.2}
                    >
                        <Text
                            style={{
                                color: registerState.dob ? undefined : 'gray',
                            }}
                        >
                            {registerState.dob
                                ? moment(registerState.dob).format('DD-MM-YYYY')
                                : localization?.selectDate}
                        </Text>
                        <DateIcon style={styles.dateImage} />
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        mode="date"
                        date={registerState.dob || new Date()}
                        maximumDate={new Date()}
                        onConfirm={(date) => {
                            setOpen(false)
                            handleDateSelect(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.callName}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChange}
                        value={registerState.name}
                        placeholder={
                            !registerState.name ? localization.enterText : ''
                        }
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        {localization.wantToSeeSelf}
                    </CustomText>
                    <View style={styles.chooseBox}>
                        <TouchableOpacity
                            style={styles.chooseAvatar}
                            onPress={() => {
                                handleAvatarSelect()
                            }}
                        >
                            <View style={styles.profileImageWrapper}>
                                <View
                                    style={styles.profileImageBox}
                                    onLayout={handleLayout}
                                >
                                    {userAvatar !== '' ? (
                                        <Image
                                            style={[
                                                styles.profileImage,
                                                {
                                                    borderRadius:
                                                        parentWidth / 2,
                                                },
                                            ]}
                                            source={{
                                                uri: `data:image/png;base64,${userAvatar}`,
                                            }} // Replace 'png' with 'jpeg' or other format if needed
                                            resizeMode="center"
                                        />
                                    ) : (
                                        <User
                                            style={[
                                                styles.profileImage,
                                                {
                                                    borderRadius:
                                                        parentWidth / 2,
                                                },
                                            ]}
                                        />
                                    )}
                                </View>
                                <View style={[styles.profileImageWrapperEdit]}>
                                    <PenSvg width={moderateScale(12)} />
                                </View>
                            </View>
                            <CustomText style={styles.profileImageText}>
                                {localization.chooseAvatar}
                            </CustomText>
                        </TouchableOpacity>
                        <CustomText style={styles.orText}>
                            {localization.orText}
                        </CustomText>
                        <TouchableOpacity
                            style={styles.chooseAvatar}
                            onPress={async () => {
                                handleOpenCamera()
                            }}
                        >
                            <View style={styles.profileImageWrapper}>
                                <View style={styles.profileImageBox}>
                                    {userProfilePic && userAvatar == '' ? (
                                        <Image
                                            style={[
                                                styles.profileImage,
                                                {
                                                    borderRadius:
                                                        parentWidth / 2,
                                                },
                                            ]}
                                            source={{
                                                uri: `data:image/png;base64,${userProfilePic}`,
                                            }}
                                            resizeMode="center"
                                        />
                                    ) : (
                                        <NoImageSvg
                                            style={[
                                                styles.profileImage,
                                                {
                                                    borderRadius:
                                                        parentWidth / 2,
                                                },
                                            ]}
                                        />
                                    )}
                                </View>
                                <View style={[styles.profileImageWrapperEdit]}>
                                    <PenSvg width={moderateScale(12)} />
                                </View>
                            </View>
                            <CustomText style={styles.profileImageText}>
                                {localization.uploadImage}
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.information}>
                    <CustomText style={styles.required}>*</CustomText>
                    <CustomText style={styles.informationText}>
                        {localization.concentDescription}
                    </CustomText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            registerState.isChecked && styles.checkboxChecked,
                        ]}
                        onPress={handleCheckboxChange}
                    >
                        {registerState.isChecked && (
                            <Text style={styles.checkMark}>✓</Text>
                        )}
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <CustomText style={styles.checkboxText}>
                            {localization.privacyContent}
                        </CustomText>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Policies')}
                        >
                            <CustomText style={styles.privacyPolicy}>
                                {localization.privacyPolicy}
                            </CustomText>
                        </TouchableOpacity>
                        <CustomText style={styles.checkboxText}>
                            {localization.privacyAnd}
                        </CustomText>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Policies')}
                        >
                            <CustomText style={styles.privacyPolicy}>
                                {localization.termConditions}
                            </CustomText>
                        </TouchableOpacity>
                        <CustomText>.</CustomText>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => registerForm()}
                    disabled={!registerState?.isChecked || isLoading}
                >
                    <LinearGradient
                        colors={
                            isDisabled
                                ? ['#cccccc', '#a0a0a0']
                                : ['#56CCF2', '#1B4987']
                        }
                        start={{ x: 0.35, y: 0 }}
                        end={{ x: 0.92, y: 1 }}
                        style={[
                            styles.button,
                            { opacity: isDisabled ? 0.7 : 1 },
                        ]}
                    >
                        <CustomText style={styles.nextButton}>
                            {isLoading ? 'Loading...' : localization.nextText}
                        </CustomText>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <Layout ScreenName="Customize Your Avatar" BackButton={false}>
                    <Avataars
                        chipStyle={{ backgroundColor: 'transparent' }}
                        listBgColor="transparent"
                        backgroundColor="transparent"
                        onDone={async (base64Image: any) => {
                            await AsyncStorageService.setItem(
                                'UserProfilePic',
                                base64Image
                            )
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

export default RegisterUser
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
    },
    image: {
        width: 200,
        height: 200,
    },
    nextButton: {
        textAlign: 'center',
        fontSize: moderateScale(18),
        lineHeight: moderateScale(24),
        color: '#fff',
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 2,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 5,
    },
    checkboxChecked: {
        backgroundColor: '#1B4987',
        borderColor: '#fff',
    },
    checkMark: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        color: '#fff',
    },
    privacyPolicy: {
        fontSize: moderateScale(13),
        lineHeight: moderateScale(16),
        fontWeight: '700',
        color: '#1B4987',
    },
    checkboxText: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BgContainer: {
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
        paddingBottom: moderateScale(20),
    },
    bgBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: bgHeight,
        zIndex: -1,
    },
    bgImage: {},
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        marginTop: 30,
        marginBottom: 0,
    },
    hand: {
        alignItems: 'flex-start',
        marginTop: moderateScale(-43),
        marginLeft: moderateScale(50),
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
        padding: moderateScale(12),
        width: '100%',
        borderRadius: moderateScale(5),
        borderColor: '#333333',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    selectImage: {
        position: 'absolute',
        top: 18,
        right: 15,
        transform: [{ rotate: '90deg' }],
    },
    dateImage: {
        position: 'absolute',
        top: 15,
        right: 10,
    },
    required: {
        color: '#FF0000',
    },
    selectOptions: {
        height: moderateScale(40),
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
        padding: moderateScale(10),
        // marginTop: moderateScale(3),
        boxShadow: 'none',
    },
    inputBox: {
        marginBottom: moderateScale(15),
    },
    profileImageWrapper: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: moderateScale(40),
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.25)',
        position: 'relative',
        marginBottom: moderateScale(5),
    },
    profileImageBox: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: moderateScale(40),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(10),
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    profileImageWrapperEdit: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.36)',
        width: moderateScale(25),
        height: moderateScale(25),
        borderRadius: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(10),
    },
    chooseAvatar: {
        alignItems: 'center',
        flex: 1,
    },
    profileImageText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        color: '#222',
    },
    chooseBox: {
        marginTop: moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: {
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
        color: '#666',
        fontSize: moderateScale(16),
        lineHeight: 24,
    },
    informationText: {
        fontSize: moderateScale(11),
        textAlign: 'justify',
        lineHeight: moderateScale(15),
        marginLeft: 5,
    },
    information: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: moderateScale(20),
        paddingBottom: moderateScale(20),
        marginBottom: moderateScale(20),
        borderBottomWidth: 1,
        borderBottomColor: '#666',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: moderateScale(50),
        marginTop: 40,
    },
    dropdownMenuStyle: {
        borderRadius: 8,
        height: deviceHeight * 0.27,
        backgroundColor: '#bbb',
    },
    dropdownMenuStyle1: {
        borderRadius: 8,
        backgroundColor: '#bbb',
    },
})
