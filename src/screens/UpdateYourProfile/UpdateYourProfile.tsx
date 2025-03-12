import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert,
    Modal,
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import React, { useEffect, useRef, useState } from 'react'
import CustomText from '../../components/basedComponents/customText'
import SelectDropdown from 'react-native-select-dropdown'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Layout from '../../components/common/Layout/Layout'
import ArrowRightSvg from '../../../assets/svgs/ArrowRight'
import DateIcon from '../../../assets/svgs/DateIcon'
import PenSvg from '../../../assets/svgs/Pen'
import { useAppSelector } from '../../store/hooks'
import useLanguage from '../../hooks/useLanguage'
import { Asset, launchCamera } from 'react-native-image-picker'
import AsyncStorageService from '../../utils/AsyncStorage'
import localization from '../../utils/localization'
import showToast from '../../utils/ToastUtils'
import { getUserCountry, updateUserDetails } from '../../services/auth'
import moment from 'moment'
import { Avataars } from 'rn-customize-avatar/avataaars'
import NoImageSvg from '../../../assets/svgs/NoImage'
import { deviceHeight } from '../../utils/constants'

const languagesList = [
    { languageName: 'English', key: 'en' },
    { languageName: 'Spanish', key: 'es' },
    { languageName: 'French', key: 'fr' },
    { languageName: 'Dutch', key: 'nl' },
]

const genderList = [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }]
const { width, height } = Dimensions.get('window')
const smallMobile = width <= 479

const UpdateYourProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [registerState, setRegisterState] = useState<any>({
        language: null,
        gender: null,
        country: null,
        district: null,
        dob: null,
        name: '',
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
    const [userProfileData, setuserProfileData] = useState<any>()
    const dropdownRef = useRef<SelectDropdown | null>(null)

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

    const getUserCountryData = async () => {
        try {
            const data: any = await getUserCountry()
            setCountryList(data?.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    async function getUserProfileData() {
        try {
            const profilePic = await AsyncStorageService.getItem(
                'UserProfilePic'
            )
            const userDetails = await AsyncStorageService.getItem(
                'user_details'
            )
            if (userDetails) {
                setuserProfileData(userDetails)
            }
            if (profilePic) {
                setuserProfilePic(profilePic)
            }
        } catch (error) {
            console.error('Error fetching user profile data:', error)
        }
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

    const updateHandler = async () => {
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
            payload: {
                name: registerState?.name,
                gender: registerState?.gender?.name,
                age: age,
                area_level: registerState?.district?.district_area_code,
                language: registerState?.language?.key,
            },
            id: userProfileData?.id,
        }

        try {
            const response: any = await updateUserDetails(payload)
            if (response) {
                await AsyncStorageService.setItem('user_details', {
                    ...userProfileData,
                    language: registerState?.language?.key,
                    gender: registerState?.gender?.name,
                    country_area_code:
                        registerState?.country?.country_area_code,
                    country_name: registerState?.country?.country_name,
                    district_name: registerState.district?.district_name,
                    area_level: registerState?.district?.district_area_code,
                    name: registerState?.name,
                    date_of_birth: registerState.dob,
                    age: age,
                })
                handleLanguageChange(registerState?.language?.key)
                showToast('success', localization['profileUpdateSuccess'])

                setDistrictList([])
                navigation.replace('Root', { screen: 'MySpace' })
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

    const handleOpenCamera = async () => {
        const options = {
            mediaType: 'photo' as const,
            includeBase64: true,
        }

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

    const preFillForm = () => {
        const normalize = (value: string | undefined) =>
            value?.trim().toLowerCase()
        const selectedLanguageList = languagesList.find(
            (item) => item.key === userProfileData?.language
        )
        const selectedGenderList = genderList.find(
            (item: any) => item.name === userProfileData?.gender
        )

        const countryListData = countryList.find(
            (item: any) =>
                normalize(item.country_name) ==
                normalize(userProfileData?.country_name)
        )

        const sortedDistricts =
            countryListData?.districts?.sort((a: any, b: any) =>
                a.district_name.localeCompare(b.district_name)
            ) || []
        const selectedDistrict = sortedDistricts?.find(
            (items: any) =>
                items.district_area_code == userProfileData?.area_level
        )

        setDistrictList(sortedDistricts.length > 0 ? sortedDistricts : [])

        setRegisterState((prevState: any) => ({
            ...prevState,
            language: selectedLanguageList || '',
            gender: selectedGenderList || '',
            country: countryListData || '',
            district: selectedDistrict || '',
            dob: userProfileData?.date_of_birth || '',
            name: userProfileData?.name || '',
        }))
    }

    useEffect(() => {
        preFillForm()
    }, [userProfileData, countryList])

    useEffect(() => {
        getUserCountryData()
        getUserProfileData()
    }, [])

    useEffect(() => {
        localization.setLanguage(language)
    }, [language])

    // Handler to get parent width
    const [parentWidth, setParentWidth] = useState(0)

    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout
        setParentWidth(width)
    }

    return (
        <Layout ScreenName={localization['updateprofile']} BackButton={true}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.chooseAvatar}
                    onPress={async () => {
                        chooseOptionWhoSelect()
                    }}
                    activeOpacity={0.8}
                >
                    <View style={styles.profileImageWrapper}>
                        <View
                            style={styles.profileImageBox}
                            onLayout={handleLayout}
                        >
                            {userProfilePic && userAvatar == '' ? (
                                <Image
                                    style={[
                                        styles.profileImage,
                                        { borderRadius: parentWidth / 2 },
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
                                        { borderRadius: parentWidth / 2 },
                                    ]}
                                />
                            )}
                        </View>
                        <View style={[styles.profileImageWrapperEdit]}>
                            <PenSvg width={moderateScale(15)} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.BgContainer}>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['language']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <SelectDropdown
                            data={languagesList}
                            defaultValue={registerState.language}
                            onSelect={(selectedItem, index) =>
                                handleSelect(selectedItem, index, 'language')
                            }
                            renderButton={(selectedItem) => {
                                return (
                                    <View style={styles.input}>
                                        <Text>
                                            {selectedItem &&
                                                localization[
                                                    selectedItem.languageName
                                                ]}
                                        </Text>
                                        <ArrowRightSvg
                                            style={styles.selectImage}
                                        />
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
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={styles.dropdownMenuStyle1}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <CustomText style={styles.label}>
                            {localization['gender']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <SelectDropdown
                            data={genderList}
                            defaultValue={registerState.gender}
                            onSelect={(selectedItem, index) =>
                                handleSelect(selectedItem, index, 'gender')
                            }
                            renderButton={(selectedItem) => {
                                return (
                                    <View style={styles.input}>
                                        <Text>
                                            {selectedItem &&
                                                localization[selectedItem.name]}
                                        </Text>
                                        <ArrowRightSvg
                                            style={styles.selectImage}
                                        />
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
                            {localization['country']}
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
                                            {selectedItem &&
                                            localization?._language == 'en'
                                                ? selectedItem?.country_name
                                                : selectedItem?.[
                                                      `country_name_${localization?._language}`
                                                  ] ||
                                                  selectedItem?.country_name}
                                        </Text>
                                        <ArrowRightSvg
                                            style={styles.selectImage}
                                        />
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
                            {localization['district']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <SelectDropdown
                            data={districtList}
                            defaultValue={registerState.district}
                            ref={dropdownRef}
                            onSelect={(selectedItem, index) =>
                                handleSelect(selectedItem, index, 'district')
                            }
                            renderButton={(selectedItem) => {
                                return (
                                    <View style={styles.input}>
                                        <Text>
                                            {selectedItem &&
                                            localization?._language == 'en'
                                                ? selectedItem?.district_name
                                                : selectedItem?.[
                                                      `district_name_${localization?._language}`
                                                  ] ||
                                                  selectedItem?.district_name}
                                        </Text>
                                        <ArrowRightSvg
                                            style={styles.selectImage}
                                        />
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
                            {localization['dob']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TouchableOpacity
                            style={styles.input}
                            onPress={() => setOpen(true)}
                            activeOpacity={0.2}
                        >
                            <Text>
                                {registerState.dob
                                    ? moment(registerState.dob).format(
                                          'DD-MM-YYYY'
                                      )
                                    : ''}
                            </Text>
                            <DateIcon style={styles.dateImage} />
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            open={open}
                            mode="date"
                            date={
                                registerState.dob
                                    ? new Date(registerState.dob)
                                    : new Date()
                            }
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
                            {localization['callName']}
                            <CustomText style={styles.required}>*</CustomText>
                        </CustomText>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChange}
                            value={registerState.name}
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => updateHandler()}
                            disabled={isLoading}
                        >
                            <CustomText style={styles.buttonText}>
                                {isLoading
                                    ? localization['loading']
                                    : localization['save']}
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <Layout
                    ScreenName={localization['updateprofile']}
                    BackButton={false}
                    style={{ height: '20%' }}
                >
                    <Avataars
                        chipStyle={{ backgroundColor: 'transparent' }}
                        listBgColor="#"
                        backgroundColor="transparent"
                        onDone={async (base64Image: any) => {
                            await AsyncStorageService.setItem(
                                'UserProfilePic',
                                base64Image
                            )
                            setuserAvatar('')

                            setuserProfilePic(base64Image)
                            setModalVisible(false)
                        }}
                        onCancel={() => {
                            setModalVisible(false)
                        }}
                    />
                </Layout>
            </Modal>
        </Layout>
    )
}

export default UpdateYourProfile

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
        borderBottomWidth: 1,
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(20),
        borderColor: '#aaaaaa',
        boxShadow: 'none',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    inputBox: {
        marginBottom: moderateScale(15),
    },
    profileImageWrapper: {
        width: smallMobile ? moderateScale(130) : moderateScale(160),
        height: smallMobile ? moderateScale(130) : moderateScale(160),
        borderRadius: smallMobile ? moderateScale(65) : moderateScale(80),
        marginBottom: moderateScale(5),
        boxShadow: '0 4px 19px 0 rgba(0, 0, 0, 0.35)',
        position: 'relative',
    },
    profileImageBox: {
        width: smallMobile ? moderateScale(130) : moderateScale(160),
        height: smallMobile ? moderateScale(130) : moderateScale(160),
        borderRadius: smallMobile ? moderateScale(65) : moderateScale(80),
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
        bottom: 10,
        right: 5,
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.36)',
        width: smallMobile ? moderateScale(30) : moderateScale(38),
        height: smallMobile ? moderateScale(30) : moderateScale(38),
        borderRadius: smallMobile ? moderateScale(15) : moderateScale(19),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseAvatar: {
        alignItems: 'center',
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 15,
        width: '100%',
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
