import React, { useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import {
    Modal,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Linking,
    Dimensions,
    ScrollView,
    Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import CommentTopSectionBoth from '../../assets/svgs/CommentTopSectionBoth'
import { addUserMood, getMoodList } from '../services/commonServices'
import AsyncStorageService from '../utils/AsyncStorage'
import { moderateScale } from 'react-native-size-matters'
import { useAppDispatch } from '../store/hooks'
import { isModalShow } from '../store/actions/commonActions'
import localization from '../utils/localization'
import CustomText from './basedComponents/customText'

type EmojiItem = {
    id?: number
    name?: string | undefined
    iconS?: (width: number, height: number) => JSX.Element
    contentHeading?: string
    contentDescription?: string
    route?: { routeName: string; route: string }[]
}

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const ModalEmoji = () => {
    const [modalVisible2, setModalVisible2] = useState(false)
    const [modalVisible, setModalVisible] = useState(true)
    const [selectedEmoji, setSelectedEmoji] = useState<any>(null)
    const [moodData, setMoodData] = useState([])
    const [useName, setUserName] = useState('')
    const [country, setCountry] = useState('')
    const [userId, setUserId] = useState('')

    const EmojiList: EmojiItem[] = [
        {
            name: localization?.Happy,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/happy.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
            contentHeading: localization?.goodnews,
        },
        {
            name: localization?.Excited,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/excited.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
            contentHeading: localization?.goodnews,
        },
        {
            name: localization?.Loved,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/Loved.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
            contentHeading: localization?.goodnews,
        },
        {
            name: localization?.Sad,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/sad.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Angry,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/angry.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Depressed,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/depressed.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Stressed,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/stressed.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Guilty,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/guilty.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Lonely,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/lonely.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Resilient,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/Resilient.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
        {
            name: localization?.Hurt,
            iconS: (width, height) => (
                <FastImage
                    source={require('../../assets/image/emojis/hurt.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width, height }}
                />
            ),
        },
    ]

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const dispatch = useAppDispatch()

    const getKeyByValue = (locale: string, value: string | undefined) => {
        const languageData = localization?._props[locale]
        if (!languageData) return null

        const key = Object.keys(languageData).find(
            (key) => languageData[key] === value
        )
        return key
    }

    const handleIconPress = (data: EmojiItem) => {
        const keyForDistrito = getKeyByValue(
            localization?._language,
            data?.name
        )

        if (data && keyForDistrito) {
            const matchingEmoji = updatedMoods.find(
                (emoji: any) => emoji.mood === keyForDistrito
            )
            setModalVisible(false)
            if (matchingEmoji) {
                setModalVisible2(true)
                setSelectedEmoji(matchingEmoji)
                addEmoji(matchingEmoji)
            }
        }
    }

    const updatedMoods = moodData?.map((mood: any) => {
        const matchingEmoji = EmojiList.find((emoji) => {
            const keyForDistrito = getKeyByValue(
                localization?._language,
                emoji?.name
            )

            return keyForDistrito === mood.mood
        })

        return {
            ...mood,
            iconMood: matchingEmoji?.iconS,
            route: mood.assigned_modules
                .split(',')
                .map((module: string, index: number) => ({
                    routeName:
                        localization._language == 'en'
                            ? module.trim()
                            : mood?.[
                                  `assigned_modules_${localization._language}`
                              ]?.split(',')?.[index],
                    route: module.replace(/\s+/g, ''),
                })),
        }
    })

    const fetchMoodData = async () => {
        try {
            const userDetails: any = await AsyncStorageService.getItem(
                'user_details'
            )
            setUserName(userDetails?.name)
            const response: any = await getMoodList()
            if (response?.data) {
                setMoodData(response.data)
            }
        } catch (error) {
            console.error('Error fetching mood data:', error)
        }
    }

    useEffect(() => {
        fetchMoodData()
    }, [])

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

    const fetchUserData = async () => {
        try {
            const userDetails: any = await AsyncStorageService.getItem(
                'user_details'
            )
            setUserId(userDetails?.id || '')
            setCountry(userDetails?.country_name || '')
        } catch (error) {
            console.error('Error fetching user data:', error)
        }
    }
    const handleRouteNavigation = (route: string) => {
        if (route == 'CallUs' || route == 'Call Us') {
            callNo(country)
            setModalVisible2(false)
        } else if (route == 'Counselling') {
            navigation.navigate('RequestForCounselling')
            setModalVisible2(false)
        } else {
            navigation.navigate(route)
            setModalVisible2(false)
        }
        dispatch(isModalShow(false))
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const [parentWidth, setParentWidth] = useState(0)

    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout
        setParentWidth(width)
    }

    const addEmoji = async (matchingEmoji: any) => {
        try {
            const payload: any = {
                description: matchingEmoji?.description,
                name: matchingEmoji?.mood,
                uid: userId,
            }
            await addUserMood(payload)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {modalVisible ? (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* Full Background Image */}
                            <Image
                                source={require('../../assets/image/BeforeWeBegin.png')}
                                style={StyleSheet.absoluteFillObject}
                                resizeMode="cover"
                            />

                            {/* Modal Header */}
                            <View style={styles.modalHeader}>
                                <TouchableOpacity
                                    style={styles.headerClose}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Icon name="close" size={28} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBody}>
                                <ScrollView bounces={false}>
                                    <View style={[styles.topEmojisSection]}>
                                        <CommentTopSectionBoth
                                            commonCommentTitle={`${localization?.hello} ${useName}! ${localization?.howYouFeel}`}
                                        />
                                    </View>
                                </ScrollView>
                                <View
                                    style={styles.bottomEmojisSection}
                                    onLayout={handleLayout}
                                >
                                    <FlatList
                                        style={{
                                            flex: 1,
                                        }}
                                        contentContainerStyle={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        data={EmojiList}
                                        renderItem={({ item, index }: any) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[
                                                        styles.emojiBox,
                                                        {
                                                            width:
                                                                parentWidth /
                                                                    3 -
                                                                10,
                                                        },
                                                        (index + 1) % 3 === 0 ||
                                                        index ===
                                                            EmojiList.length - 1
                                                            ? {
                                                                  marginRight: 0,
                                                              }
                                                            : {
                                                                  marginRight: 15,
                                                              },
                                                    ]}
                                                    onPress={() =>
                                                        handleIconPress(item)
                                                    }
                                                >
                                                    {item.iconS(
                                                        deviceWidth *
                                                            0.26 *
                                                            0.4,
                                                        deviceWidth * 0.26 * 0.4
                                                    )}
                                                    <CustomText
                                                        style={styles.emojiText}
                                                    >
                                                        {item.name}
                                                    </CustomText>
                                                </TouchableOpacity>
                                            )
                                        }}
                                        keyExtractor={(item, id) =>
                                            id.toString()
                                        }
                                        numColumns={3}
                                        showsVerticalScrollIndicator={false}
                                        removeClippedSubviews={false}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            ) : (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => setModalVisible2(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, { height: 600 }]}>
                            <View style={styles.CustomBGBeforeBox}>
                                <View style={styles.CustomBGBefore}></View>
                            </View>
                            <View style={styles.modalHeader}>
                                <TouchableOpacity
                                    style={styles.headerClose}
                                    onPress={() => {
                                        setModalVisible2(!modalVisible2)
                                        dispatch(isModalShow(false))
                                    }}
                                >
                                    <Icon name="close" size={28} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBody}>
                                <View
                                    style={[
                                        styles.topEmojisSection,
                                        styles.topEmojisSectionCustom,
                                    ]}
                                >
                                    {selectedEmoji?.iconMood(200, 200)}
                                    <CustomText style={styles.topEmojisText}>
                                        {localization?.feeling}{' '}
                                        {localization?.[selectedEmoji?.mood]}
                                    </CustomText>
                                </View>
                                <View
                                    style={[
                                        styles.bottomEmojisSection,
                                        styles.bottomEmojisSectionCustom,
                                    ]}
                                >
                                    {selectedEmoji?.contentHeading && (
                                        <CustomText
                                            style={styles.bottomEmojisTitle}
                                        >
                                            {selectedEmoji?.contentHeading}
                                        </CustomText>
                                    )}
                                    <CustomText
                                        style={styles.bottomEmojisDescription}
                                    >
                                        {localization?._language === 'en'
                                            ? selectedEmoji?.description
                                            : selectedEmoji?.[
                                                  `description_${localization?._language}`
                                              ] || 'No description available'}
                                    </CustomText>
                                    <View style={styles.buttonsContainer}>
                                        {selectedEmoji?.route?.map(
                                            (item: any, index: number) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={styles.button}
                                                    onPress={() =>
                                                        handleRouteNavigation(
                                                            item.route
                                                        )
                                                    }
                                                >
                                                    <CustomText
                                                        style={
                                                            styles.buttonText
                                                        }
                                                    >
                                                        {item?.routeName}
                                                    </CustomText>
                                                </TouchableOpacity>
                                            )
                                        )}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    )
}

export default ModalEmoji

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
    modalView: {
        width: deviceWidth * 0.95,
        maxHeight: deviceHeight * 0.95,
        backgroundColor: '#f6efdf',
        borderRadius: 20,
        padding: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    headerClose: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBody: {
        padding: 15,
        paddingTop: 0,
    },
    topEmojisSection: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    bottomEmojisSection: {
        alignItems: 'center',
        justifyContent: 'center',
        height: deviceHeight * 0.45,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    emojiBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth * 0.25,
        height: deviceWidth * 0.22,
        backgroundColor: '#ffffff',
        ...Platform.select({
            ios: {
                shadowColor: '#eeee',
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: { elevation: 2 },
        }),
        borderRadius: 21,
        marginBottom: 15,
    },
    emojiText: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        marginTop: 5,
        textAlign: 'center',
    },

    CustomBGBeforeBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    CustomBGBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: '55%',
        left: '50%',
        width: 517,
        height: 462,
        zIndex: -1,
        borderRadius: '50%',
        backgroundColor: '#FFD200',
        transform: [{ translateX: '-50%' }],
    },
    topEmojisSectionCustom: {
        marginBottom: 60,
    },
    topEmojisText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(24),
        lineHeight: moderateScale(30),
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    bottomEmojisSectionCustom: {
        width: deviceWidth * 0.75,
        margin: 'auto',
        marginTop: 30,
    },
    bottomEmojisTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    bottomEmojisDescription: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        marginBottom: 0,
        textAlign: 'center',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        paddingVertical: 7.5,
        minWidth: deviceWidth * 0.35,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginTop: 0,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        textAlign: 'center',
        color: '#222222',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingVertical: 25,
    },
})
