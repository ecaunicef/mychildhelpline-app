import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Platform,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomText from '../../components/basedComponents/customText'
import Layout from '../../components/common/Layout/Layout'
import { moderateScale } from 'react-native-size-matters'
import CommentTopSectionBoth from '../../../assets/svgs/CommentTopSectionBoth'
import { Carousel } from 'react-native-basic-carousel'
import Tts from 'react-native-tts'

import {
    MyRightIconOne,
    MyRightIconTwo,
    MyRightIconThree,
    MyRightIconFour,
    MyRightIconFive,
    MyRightIconSix,
    MyRightIconSeven,
    MyRightIconEight,
    MyRightIconNine,
    MyRightIconTen,
    MyRightIconEleven,
    MyRightIconTwelve,
    MyRightIconThirteen,
    MyRightIconFourteen,
    MyRightIconFifteen,
    MyRightIconSixteen,
    MyRightIconSeventeen,
    MyRightIconEighteen,
    MyRightIconNineteen,
    MyRightIconTwenty,
    MyRightIconTwentyone,
    MyRightIconTwentytwo,
    MyRightIconTwentythree,
    MyRightIconTwentyfour,
    MyRightIconTwentyfive,
    MyRightIconTwentysix,
    MyRightIconTwentyseven,
    MyRightIconTwentyeight,
    MyRightIconTwentynine,
    MyRightIconThirty,
    MyRightIconThirtyone,
    MyRightIconThirtytwo,
    MyRightIconThirtythree,
    MyRightIconThirtyfour,
    MyRightIconThirtyfive,
    MyRightIconThirtysix,
    MyRightIconThirtyseven,
    MyRightIconThirtyeight,
    MyRightIconThirtynine,
    MyRightIconFourty,
    MyRightIconFourtyone,
    MyRightIconFourtytwo,
} from '../../../assets/svgs/Index'
import localization from '../../utils/localization'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const MyRights = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [allData, setAllData] = React.useState([
        // {
        //     id: 1,
        //     image: <MyRightIconOne width={175} height={200} />,
        //     description: Strings.right1,
        // },
        {
            id: 2,
            image: <MyRightIconTwo width={175} height={200} />,
            description: localization.right2,
        },
        {
            id: 3,
            image: <MyRightIconThree width={175} height={200} />,
            description: localization.right3,
        },
        {
            id: 4,
            image: <MyRightIconFour width={175} height={200} />,
            description: localization.right4,
        },
        {
            id: 5,
            image: <MyRightIconFive width={175} height={200} />,
            description: localization.right5,
        },
        {
            id: 6,
            image: <MyRightIconSix width={175} height={200} />,
            description: localization.right6,
        },
        {
            id: 7,
            image: <MyRightIconSeven width={175} height={200} />,
            description: localization.right7,
        },
        {
            id: 8,
            image: <MyRightIconEight width={175} height={200} />,
            description: localization.right8,
        },
        {
            id: 9,
            image: <MyRightIconNine width={175} height={200} />,
            description: localization.right9,
        },
        {
            id: 10,
            image: <MyRightIconTen width={175} height={200} />,
            description: localization.right10,
        },
        {
            id: 11,
            image: <MyRightIconEleven width={175} height={200} />,
            description: localization.right11,
        },
        {
            id: 12,
            image: <MyRightIconTwelve width={175} height={200} />,
            description: localization.right12,
        },
        {
            id: 13,
            image: <MyRightIconThirteen width={175} height={200} />,
            description: localization.right13,
        },
        {
            id: 14,
            image: <MyRightIconFourteen width={175} height={200} />,
            description: localization.right14,
        },
        {
            id: 15,
            image: <MyRightIconFifteen width={175} height={200} />,
            description: localization.right15,
        },
        {
            id: 16,
            image: <MyRightIconSixteen width={175} height={200} />,
            description: localization.right16,
        },
        {
            id: 17,
            image: <MyRightIconSeventeen width={175} height={200} />,
            description: localization.right17,
        },
        {
            id: 18,
            image: <MyRightIconEighteen width={175} height={200} />,
            description: localization.right18,
        },
        {
            id: 19,
            image: <MyRightIconNineteen width={175} height={200} />,
            description: localization.right19,
        },
        {
            id: 20,
            image: <MyRightIconTwenty width={175} height={200} />,
            description: localization.right20,
        },
        {
            id: 21,
            image: <MyRightIconTwentyone width={175} height={200} />,
            description: localization.right21,
        },
        {
            id: 22,
            image: <MyRightIconTwentytwo width={175} height={200} />,
            description: localization.right22,
        },
        {
            id: 23,
            image: <MyRightIconTwentythree width={175} height={200} />,
            description: localization.right23,
        },
        {
            id: 24,
            image: <MyRightIconTwentyfour width={175} height={200} />,
            description: localization.right24,
        },
        {
            id: 25,
            image: <MyRightIconTwentyfive width={175} height={200} />,
            description: localization.right25,
        },
        {
            id: 26,
            image: <MyRightIconTwentysix width={175} height={200} />,
            description: localization.right26,
        },
        {
            id: 27,
            image: <MyRightIconTwentyseven width={175} height={200} />,
            description: localization.right27,
        },
        {
            id: 28,
            image: <MyRightIconTwentyeight width={175} height={200} />,
            description: localization.right28,
        },
        {
            id: 29,
            image: <MyRightIconTwentynine width={175} height={200} />,
            description: localization.right29,
        },
        {
            id: 30,
            image: <MyRightIconThirty width={175} height={200} />,
            description: localization.right30,
        },
        {
            id: 31,
            image: <MyRightIconThirtyone width={175} height={200} />,
            description: localization.right31,
        },
        {
            id: 32,
            image: <MyRightIconThirtytwo width={175} height={200} />,
            description: localization.right32,
        },
        {
            id: 33,
            image: <MyRightIconThirtythree width={175} height={200} />,
            description: localization.right33,
        },
        {
            id: 34,
            image: <MyRightIconThirtyfour width={175} height={200} />,
            description: localization.right34,
        },
        {
            id: 35,
            image: <MyRightIconThirtyfive width={175} height={200} />,
            description: localization.right35,
        },
        {
            id: 36,
            image: <MyRightIconThirtysix width={175} height={200} />,
            description: localization.right36,
        },
        {
            id: 37,
            image: <MyRightIconThirtyseven width={175} height={200} />,
            description: localization.right37,
        },
        {
            id: 38,
            image: <MyRightIconThirtyeight width={175} height={200} />,
            description: localization.right38,
        },
        {
            id: 39,
            image: <MyRightIconThirtynine width={175} height={200} />,
            description: localization.right39,
        },
        {
            id: 40,
            image: <MyRightIconFourty width={175} height={200} />,
            description: localization.right40,
        },
        {
            id: 41,
            image: <MyRightIconFourtyone width={175} height={200} />,
            description: localization.right41,
        },
        {
            id: 42,
            image: <MyRightIconFourtytwo width={175} height={200} />,
            description: localization.right42,
        },
    ])
    const [currentIndex, setCurrentIndex] = useState<any>()
    const [play, setPlay] = useState(false)
    const [autoEnable, setAutoEnable] = useState(false)

    const autoplayDelay = 1000

    useEffect(() => {
        const handleTtsFinish = () => {
            Tts.setDefaultVoice('com.apple.speech.synthesis.voice.samantha')
            setPlay(false)
            textStop()
            if (isModalVisible) {
                setAutoEnable(true)
            }
        }
        Tts.addEventListener('tts-finish', handleTtsFinish)

        return () => {
            textStop()
        }
    }, [currentIndex, isModalVisible])

    const textSpeach = (item: any) => {
        let currentLanguage = 'en-US'
        if (localization?._language == 'en') {
            currentLanguage = 'en-US'
        } else if (localization?._language == 'es') {
            currentLanguage = 'es-ES'
        } else if (localization?._language == 'fr') {
            currentLanguage = 'fr-FR'
        } else if (localization?._language == 'nl') {
            currentLanguage = 'nl-NL'
        }
        Tts.getInitStatus().then(() => {
            Tts.setDefaultLanguage(currentLanguage)
                .then(() => {
                    Tts.speak(item)
                    setPlay(true)
                })
                .catch((error) => console.log('Language set error:', error))
        })
    }

    const textStop = () => {
        Tts.getInitStatus()
            .then(() => {
                setPlay(false)
                setAutoEnable(false)
                Platform?.OS == 'ios' ? Tts.stop(true) : Tts.stop()
            })
            .catch((error) => {
                console.log('TTS Stop Error:', error)
            })
    }

    const handleSnapToItem = (index: any) => {
        setCurrentIndex(index?.id)
    }

    const questionText = localization['peekabool']
    const answerText = localization['childrightstext']
    return (
        <Layout ScreenName={localization['myrights']} BackButton={true}>
            <ScrollView>
                {!isModalVisible && (
                    <View style={styles.firstStep}>
                        <View style={styles.mainTextContainer}>
                            <View style={styles.cardContainer}>
                                <CommentTopSectionBoth
                                    commonCommentTitle={
                                        localization['knowrights']
                                    }
                                    commentWidth={320}
                                    commentTop={22}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <CustomText style={styles.questionText}>
                                    {questionText}
                                </CustomText>
                                <CustomText style={styles.answerText}>
                                    {answerText}
                                </CustomText>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    play
                                        ? textStop()
                                        : textSpeach(
                                              `${questionText + answerText}`
                                          )
                                }}
                            >
                                <CustomText style={styles.buttonText}>
                                    {play
                                        ? localization['pause']
                                        : localization['play']}
                                </CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setIsModalVisible(true)}
                            >
                                <CustomText style={styles.buttonText}>
                                    {localization['letsgo']}
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {isModalVisible && (
                    <Carousel
                        style={{
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}
                        data={allData}
                        renderItem={({ item, index }: any) => (
                            <View
                                style={[styles.secondStep, { height: '100%' }]}
                            >
                                <View
                                    style={[
                                        styles.mainTextContainer,
                                        styles.customStyling,
                                    ]}
                                >
                                    <View style={styles.statusBox}>
                                        <CustomText style={styles.statusText}>
                                            {index + 1}
                                        </CustomText>
                                    </View>
                                    <View
                                        style={[
                                            styles.cardContainer,
                                            styles.cardContainerCustom,
                                        ]}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignSelf: 'center',
                                            }}
                                        >
                                            {item.image}
                                        </View>
                                    </View>
                                    <View style={styles?.textContainer}>
                                        <CustomText style={styles.answerText}>
                                            {item.description ||
                                                localization['nodescription']}
                                        </CustomText>
                                    </View>
                                </View>
                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() =>
                                            play
                                                ? textStop()
                                                : textSpeach(item.description)
                                        }
                                    >
                                        <CustomText style={styles.buttonText}>
                                            {play
                                                ? localization['pause']
                                                : localization['play']}
                                        </CustomText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        itemWidth={Dimensions.get('window').width}
                        onSnapToItem={(curItem: any) =>
                            handleSnapToItem(curItem)
                        }
                        getCurrentIndex={(index) => setCurrentIndex(index)}
                        autoplay={autoEnable}
                        autoplayDelay={autoplayDelay}
                        removeClippedSubviews={false}
                    />
                )}
            </ScrollView>
        </Layout>
    )
}

export default MyRights

const styles = StyleSheet.create({
    firstStep: {
        paddingHorizontal: 20,
    },
    secondStep: {
        paddingHorizontal: 20,
    },
    mainTextContainer: {
        minHeight: deviceHeight * 0.6,
    },
    customStyling: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8,
        position: 'relative',
    },
    questionText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontFamily: 'OpenSans-Regular',
        color: '#666666',
        marginBottom: 20,
    },
    answerText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontFamily: 'OpenSans-Regular',
        color: '#222222',
    },
    statusBox: {
        position: 'absolute',
        top: 15,
        right: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#FFD200',
        borderRadius: 50,
    },
    statusText: {
        color: '#FFFFFF',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 30,
    },
    cardContainerCustom: {},
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

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginVertical: 5,
        paddingTop: 10,
    },
    button: {
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 25,
        minWidth: '35%',
        backgroundColor: '#FFD200',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
        color: '#222222',
    },
    textContainer: {},
})
