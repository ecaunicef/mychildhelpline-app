import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'
import Layout from '../../components/common/Layout/Layout'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const About = () => {
    const navigation = useNavigation<any>()
    const WebVi = (url: string) => {
        navigation.navigate('WebView', {
            url: url,
            title: '',
        })
    }

    return (
        <Layout
            ScreenName={localization['aboutMyChildHelpline']}
            BackButton={true}
        >
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => WebVi('https://www.mychildhelpline.org')}
                        style={styles.splash}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles.splashImage}
                            source={require('../../../assets/image/splashimage.png')}
                        />
                    </TouchableOpacity>
                    <View>
                        <CustomText style={styles.unicefText}>
                            {localization.unicefText}
                        </CustomText>
                    </View>
                    {/* Social Link for UNICEF ECA */}
                    <View style={styles.webstyle}>
                        <Text style={styles.connectText}>Connect with us</Text>
                        <View style={styles.webviewData}>
                            <TouchableOpacity
                                style={styles.touchFace}
                                onPress={() =>
                                    WebVi(
                                        'https://www.facebook.com/UNICEFeasterncaribbean/'
                                    )
                                }
                            >
                                <Image
                                    resizeMode="contain"
                                    style={styles.touchFace}
                                    source={require('../../../assets/image/fb.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.touchFace1}
                                onPress={() =>
                                    WebVi(
                                        'https://www.instagram.com/unicefeca/?hl=en'
                                    )
                                }
                            >
                                <Image
                                    resizeMode="contain"
                                    style={styles.touchInside}
                                    source={require('../../../assets/image/insta.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.touchFace1}
                                onPress={() =>
                                    WebVi(
                                        'https://twitter.com/UNICEFECA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                                    )
                                }
                            >
                                <Image
                                    resizeMode="contain"
                                    style={styles.twImage}
                                    source={require('../../../assets/image/tw.jpg')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.touchFace1}
                                onPress={() =>
                                    WebVi(
                                        'https://www.youtube.com/user/UNICEFeastcaribbean'
                                    )
                                }
                            >
                                <Image
                                    resizeMode="contain"
                                    style={styles.ytImage}
                                    source={require('../../../assets/image/yt.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* UNICEF Logo */}
                        <TouchableOpacity
                            onPress={() => WebVi('https://www.unicef.org')}
                        >
                            <Image
                                resizeMode="contain"
                                style={styles.uniceeImage}
                                source={require('../../../assets/image/unicee.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        paddingBottom: moderateScale(20),
        width: deviceWidth,
        height: deviceHeight - moderateScale(50),
    },
    back: {
        color: '#000',
        padding: 20,
        fontSize: moderateScale(28),
    },
    splash: {
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        alignSelf: 'center',
        height: 150,
        width: 300,
    },
    unicefText: {
        fontWeight: '600',
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        color: '#484848',
        fontFamily: 'helveticaneue',
    },
    webstyle: {
        justifyContent: 'center',
        marginTop: 20,
    },
    connectText: {
        marginTop: 10,
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#484848',
        fontFamily: 'helveticaneue',
    },
    webviewData: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    touchFace: {
        alignSelf: 'center',
        height: 80,
        width: 80,
    },
    touchFace1: {
        justifyContent: 'center',
        height: 80,
        width: 80,
    },
    touchInside: {
        alignSelf: 'center',
        height: 40,
        width: 45,
    },
    twImage: {
        alignSelf: 'center',
        height: 65,
        width: 75,
    },
    ytImage: {
        alignSelf: 'center',
        marginLeft: -10,
        height: 50,
        width: 75,
    },
    uniceeImage: {
        alignSelf: 'center',
        height: 90,
        marginTop: 20,
        width: 300,
    },
    headerTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
    },
})
