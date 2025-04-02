import React, { useEffect, useState } from 'react'
import {
    View,
    TouchableOpacity,
    Linking,
    Alert,
    StyleSheet,
} from 'react-native'
import { scale, moderateScale } from 'react-native-size-matters'
import Call from '../../../assets/svgs/Call'
import RequestCounselling from '../../../assets/svgs/RequestCounselling'
import ParentingHub from '../../../assets/svgs/ParentingHub'
import Government from '../../../assets/svgs/Government'
import Helpline from '../../../assets/svgs/Helpline'
import MentalHealthChatline from '../../../assets/svgs/MentalHealthChatline'
import CustomText from '../../components/basedComponents/customText'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HomeCardBG from '../../../assets/svgs/HomeCardBG'
import localization from '../../utils/localization'
import AsyncStorageService from '../../utils/AsyncStorage'

import ReactNativeBiometrics from 'react-native-biometrics'

const biometrics = new ReactNativeBiometrics()
import { User } from '../../store/User'
import { getWhatsappLink } from '../../services/auth'
const data: any = [
    {
        id: 1,
        title: 'callus',
        subtitle: 'Talktoone',
        icon: <Call width={scale(50)} />,
        backgroundColor: '#ff6d88',
        fillColor: '#d63451',
        link: '',
    },
    {
        id: 2,
        title: 'reqcoun',
        subtitle: 'TalktooneListner',
        icon: <RequestCounselling width={scale(50)} />,
        backgroundColor: '#90D039',
        fillColor: '#74B918',
        link: 'RequestForCounselling',
    },
    {
        id: 3,
        title: 'mydiary',
        subtitle: 'mydiaryText',
        icon: <ParentingHub width={scale(50)} />,
        backgroundColor: '#FEB242',
        fillColor: '#E18F15',
        link: 'MyDiary',
    },
    {
        id: 4,
        title: 'mychillspot',
        subtitle: 'mychillspotText',
        icon: <Government width={scale(50)} />,
        backgroundColor: '#F15D5D',
        fillColor: '#E11F1F',
        link: 'MyChillSpot',
    },
    {
        id: 5,
        title: 'arcade',
        subtitle: 'arcadeText',
        icon: <Helpline width={scale(35)} />,
        backgroundColor: '#66D6FE',
        fillColor: '#21AFE1',
        link: 'Arcade',
    },
    {
        id: 6,
        title: 'mentalHealth',
        subtitle: 'mentalHealthText',
        icon: <MentalHealthChatline width={scale(50)} />,
        backgroundColor: '#6049EF',
        fillColor: '#4530CC',
        link: '',
    },
]

const MySpace = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [country, setCountry] = useState<string>('')
    const [whatsappLink, setWhatsappLink] = useState<any>()

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
    }

    useEffect(() => {
        ;(async () => {
            try {
                const userDetails: any = await AsyncStorageService.getItem(
                    'user_details'
                )
                setCountry(userDetails?.country_name)
            } catch (error) {
                console.error('Failed to fetch user details:', error)
            }
        })()
    }, [])

    const getLockpin = async () => {
        //Lock check whether it is spported or not
        try {
            const { available, biometryType } =
                await biometrics.isSensorAvailable()

            if (available && biometryType === 'TouchID') {
                checkPin()
            } else if (available && biometryType === 'FaceID') {
                checkPin()
            } else if (available && biometryType === 'Biometrics') {
                checkPin()
            } else {
                navigation.navigate('MyDiary')
            }
        } catch (error) {
            props.navigation.navigate('MyDiaryHome')
        }
    }
    const checkPin = async () => {
        let checkLock = await AsyncStorageService.getItem('DiaryLock')

        if (checkLock == true) {
            navigation.navigate('UnlockPage', { redirect: 'MyDiary' })
        } else {
            navigation.navigate('MyDiary')
        }
    }

    const getLinkWhatsapp = async () => {
        const getUserDetails: any = await AsyncStorageService.getItem(
            'user_details'
        )
        const payload = {
            country_code: getUserDetails?.country_area_code,
        }
        try {
            const response: any = await getWhatsappLink(payload)
            setWhatsappLink(response.data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    function parseWhatsAppUrl(url: any) {
        const queryString = url?.split('?')[1]
        if (!queryString) {
            return { phone: null, text: null }
        }

        const params = queryString
            ?.split('&')
            .reduce((acc: any, param: any) => {
                const [key, value] = param.split('=')
                acc[key] = value
                return acc
            }, {})

        return { phone: params.phone, text: params.text }
    }

    const openWhatsApp = async () => {
        try {
            const parsed = parseWhatsAppUrl(whatsappLink?.w_link)
            const phoneNumber = parsed.phone
            const message = encodeURIComponent(parsed.text)
            const urlApp = `whatsapp://send?phone=${phoneNumber}&text=${message}`
            const webUrl = `https://wa.me/${phoneNumber}?text=${message}`

            const supported = await Linking.canOpenURL(urlApp)
            if (!phoneNumber || !parsed?.text) {
                Alert.alert(
                    'Service Not Available',
                    'This chat service is not available in your area.'
                )
                return
            }

            if (supported) {
                try {
                    const response = await Linking.openURL(urlApp)
                } catch (err) {
                    console.error('openURL error:', err)
                }
            } else {
                try {
                    await Linking.openURL(webUrl)
                } catch (err) {
                    console.error('Error opening WhatsApp Web:', err)
                }
            }
        } catch (err) {
            console.error('Error:', err)
        }
    }

    useEffect(() => {
        getLinkWhatsapp()
    }, [])

    return (
        <View style={style.cardBox}>
            {data.map((item: any) => {
                if (item.title === 'mentalHealth' && whatsappLink === null) {
                    return null
                }

                return (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            style.card,
                            { backgroundColor: item.backgroundColor },
                        ]}
                        onPress={() => {
                            if (item.title === 'callus') {
                                callNo(country)
                            } else if (item.title === 'mydiary') {
                                getLockpin()
                            } else if (item.title === 'mentalHealth') {
                                openWhatsApp()
                            } else if (item.link) {
                                navigation.navigate(item.link)
                            }
                        }}
                    >
                        <View style={[style.textSectionBG]}>
                            <HomeCardBG
                                fillColor={item.fillColor}
                                backgroundColor={item.backgroundColor}
                            />
                        </View>
                        <View
                            style={[
                                style.textSection,
                                {
                                    borderBottomRightRadius: 20,
                                    minHeight: scale(120),
                                },
                            ]}
                        >
                            <CustomText style={style.title}>
                                {localization[item.title]}
                            </CustomText>
                            <CustomText style={style.subtitle}>
                                {localization[item.subtitle]}
                            </CustomText>
                        </View>
                        <View style={style.iconSection}>{item.icon}</View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default MySpace

const style = StyleSheet.create({
    cardBox: {
        flex: 1,
        width: '100%',
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        paddingTop: moderateScale(20),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(70),
        position: 'relative',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: moderateScale(20),
    },
    textSection: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(10),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(20),
    },
    textSectionBG: {
        position: 'absolute',
        bottom: 35,
        left: '40%',
        transform: [{ translateX: '-50%' }],
    },
    cardSvg: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        height: '100%',
        margin: 'auto',
    },
    title: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: moderateScale(18),
        marginBottom: 5,
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
    },
    subtitle: {
        fontSize: moderateScale(10),
        lineHeight: moderateScale(12.5),
        fontWeight: 'normal',
        color: '#fff',
        marginBottom: 0,
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
    },
    iconSection: {
        textAlign: 'center',
        alignItems: 'center',
        paddingLeft: moderateScale(0),
        width: moderateScale(120),
    },
})
