import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Linking,
    ScrollView,
    Alert,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/common/Layout/Layout'
import Question from './common/Question'
import Answer from './common/Answer'
import Suggestions from './common/Suggestions'
import TypingArea from './common/TypingArea'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addChat, resetChat } from '../../store/types/chatActions'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorageService from '../../utils/AsyncStorage'
import { moderateScale } from 'react-native-size-matters'
import { hideLoading, showLoading } from '../../store/actions/commonActions'
import localization from '../../utils/localization'
import { getWhatsappLink } from '../../services/auth'

const HelpingHand = () => {
    const [chatText, setChatText] = useState<string>('')
    const dispatch = useAppDispatch()
    const chatData = useAppSelector((state) => state.chat.chatList)

    const chatResponse = async () => {
        if (!chatText.trim()) {
            return
        }

        try {
            dispatch(showLoading())
            const response = await axios.get(
                `https://mychildhelpline.itechmission.org/mychildapigateway/api/chat-service/combined_intent?message=${chatText}&lang=${localization?._language}`
            )

            if (response) {
                dispatch(addChat({ ...response.data, chatName: chatText }))
                dispatch(hideLoading())
            }
        } catch (error) {
            dispatch(hideLoading())
            console.error('Error fetching chat response:', error)
        }
    }

    const resetChatAll = () => {
        dispatch(resetChat())
        setChatText('')
    }

    const sendRequest = () => {
        if (chatText.trim()) {
            chatResponse()
            setChatText('')
        }
    }

    return (
        <Layout ScreenName={localization['helpinghand']} BackButton={true}>
            <View style={styles.chatListRoom}>
                <Answer text={localization.helpingHandText} />
                <ChatScreen chatList={chatData} />
            </View>
            <TypingArea
                chatText={chatText}
                onTextChange={setChatText}
                onReset={resetChatAll}
                sendRequest={sendRequest}
            />
        </Layout>
    )
}

export default HelpingHand

const ChatScreen = ({ chatList }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [country, setCountry] = useState<string>('')
    const [whatsappLink, setWhatsappLink] = useState<any>()

    const flatListRef = useRef<FlatList>(null)

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

    useEffect(() => {
        if (flatListRef.current) {
            setTimeout(() => {
                flatListRef.current?.scrollToEnd({ animated: true })
            }, 100)
        }
    }, [chatList])

    const handlePressRoute = (data: any) => {
        if (data) {
            if (data?.route == 'CallUs') {
                callNo(country)
            } else if (data?.route == 'ParentingHub') {
                navigation.navigate('WebView', {
                    url: 'https://www.unicef.org/parenting/',
                    title: localization?.parentinghub,
                })
            } else if (data?.route == 'GovernmentServices') {
                navigation.navigate('WebView', {
                    url: 'https://ab.gov.ag/detail_page.php?page=21',
                    title: localization?.gosservices,
                })
            } else if (data?.route == 'MyChildHelpline') {
                navigation.navigate('WebView', {
                    url: 'https://www.mychildhelpline.org',
                    title: localization?.mychildhelpline,
                })
            } else if (data?.route == 'UnicefHelp') {
                navigation.navigate('WebView', {
                    url: 'https://www.unicef.org/easterncaribbean/',
                    title: localization?.UNICEF,
                })
            } else if (data?.route == 'FAQs') {
                navigation.navigate('WebView', {
                    url: 'https://www.mychildhelpline.org/faqs.html',
                    title: localization['faqs'],
                })
            } else if (data?.route == 'ChatLine' || data?.route == 'Chatline') {
                openWhatsApp()
                // Counselling
            } else if (data?.route == 'Counselling') {
                navigation.navigate('RequestForCounselling')
            } else if (data?.route == 'Avatar') {
                navigation.navigate('UpdateYourProfile')
                // Avatar
            } else {
                navigation.navigate(data.route)
            }
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
        <FlatList
            ref={flatListRef}
            data={chatList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.suggestionsGroup}>
                    <Question text={item.chatName} />

                    {item?.response && <Answer text={item?.response} />}
                    {item.steps[0] && <Answer text={item.steps[0]} />}

                    <FlatList
                        data={item.options}
                        keyExtractor={(subItems, subIndex) =>
                            subIndex.toString()
                        }
                        renderItem={({ item: subItem }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    handlePressRoute(subItem)
                                }}
                            >
                                <Suggestions title={subItem.name} />
                            </TouchableOpacity>
                        )}
                        numColumns={2}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            )}
            style={styles.chatList}
            nestedScrollEnabled={true}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatListRoom: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: 15,
        minHeight: '82.5%',
        paddingBottom: 73,
    },
    suggestionsGroup: {
        marginBottom: 0,
    },
    chatList: {
        width: '100%',
    },
    answerText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
})
