import * as React from 'react'
import {
    View,
    Image,
    Dimensions,
    Text,
    StatusBar,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import ReactNativeBiometrics from 'react-native-biometrics'
import { Strings } from '../../../utils/Strings'
import deviceInfoModule from 'react-native-device-info'
import { User } from '../../../store/User'
let uservar = new User()

const deviceHeight = Dimensions.get('window').height
const rnBiometrics = new ReactNativeBiometrics()
export default function MyDairyHome(props) {
    const navigation = useNavigation()
    // const isFocused = useIsFocused()

    let redirectPath = props?.route?.params?.redirect
    React.useEffect(() => {
        if (redirectPath === undefined) {
            redirectPath = 'Root'
        }
        authen()
    }, [])

    const authen = async () => {
        try {
            rnBiometrics
                .isSensorAvailable()
                .then((resultObject) => {
                    const { available, biometryType } = resultObject

                    if (available && biometryType === 'TouchID') {
                        // console.log('TouchID is available')
                    } else if (available && biometryType === 'FaceID') {
                        // console.log('FaceID is available')
                    } else if (available && biometryType === 'Biometrics') {
                        // console.log('Biometrics are available')
                    } else {
                        // console.log('Biometric authentication is not available')
                    }

                    if (Platform.OS == 'android') {
                        if (biometryType === 'Biometrics') {
                            //component to check biometrics
                            rnBiometrics
                                .simplePrompt({
                                    promptMessage: 'Confirm Fingerprint',
                                })
                                .then((resultObject) => {
                                    const { success } = resultObject
                                    if (success) {
                                        redirectPath
                                            ? navigation.replace(redirectPath)
                                            : navigation.navigate('Root')
                                    } else {
                                        navigation.goBack()
                                    }
                                })
                                .catch((error) => {
                                    console.log('biometrics failed', error)
                                })
                        } else {
                        }
                    } else {
                        //faceid
                        if (biometryType === 'FaceID') {
                            rnBiometrics
                                .simplePrompt({
                                    promptMessage: 'Confirm Face Id',
                                })
                                .then((resultObject) => {
                                    const { success } = resultObject

                                    if (success) {
                                        if (
                                            typeof props.route.params !==
                                                'undefined' &&
                                            typeof props.route.params
                                                .redirect !== 'undefined' &&
                                            typeof props.route.params
                                                .redirect !== 'undefined' &&
                                            props.route.params.redirect ==
                                                'MyDiary'
                                        ) {
                                            redirectPath
                                                ? navigation.replace(
                                                      redirectPath
                                                  )
                                                : navigation.navigate('Root')
                                        } else {
                                            redirectPath
                                                ? navigation.replace(
                                                      redirectPath
                                                  )
                                                : navigation.navigate('Root')
                                            if (uservar.getUserLogin() == 1) {
                                                navigation.replace('Root')
                                            } else {
                                                navigation.replace(
                                                    'BeforeWeBegin'
                                                )
                                            }
                                        }
                                    } else {
                                        console.log(
                                            'user cancelled FaceID prompt'
                                        )
                                    }
                                })
                                .catch(() => {
                                    console.log('FaceID failed')
                                })
                        } else if (biometryType === 'TouchID') {
                            //touchid
                            rnBiometrics
                                .simplePrompt({
                                    promptMessage: 'Confirm Touch Id',
                                })
                                .then((resultObject) => {
                                    const { success } = resultObject
                                    if (success) {
                                        redirectPath
                                            ? navigation.replace(redirectPath)
                                            : navigation.navigate('Root')
                                    } else {
                                        navigation.goBack()
                                    }
                                })
                                .catch(() => {
                                    console.log('TouchID failed')
                                })
                        } else {
                            redirectPath
                                ? navigation.replace(redirectPath)
                                : navigation.navigate('Root')
                        }
                    }
                })
                .catch((error) => {
                    console.log(
                        'Error checking biometrics availability: ',
                        error
                    )
                })
        } catch (error) {
            console.log('error in authenticating lock:', error)
        }
        //check and unthenticate fingerprint or face sensor
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FF8AA2" />
            {/* lock view comp */}
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.1 }}
                    end={{ x: 0.9, y: 1.0 }}
                    locations={[0.1, 0.45, 1]}
                    style={{ flex: 1 }}
                    colors={['#FF8AA2', '#FF8AA2', '#ffe7ec']}
                >
                    <View style={{}}>
                        <MaterialIcons
                            onPress={() => navigation.goBack()}
                            name={'arrow-back-ios'}
                            style={styles.back}
                        />

                        <View style={styles.lockImgView}>
                            <Image
                                resizeMode="contain"
                                style={styles.lockImg}
                                source={require('../assets/lock.gif')}
                            />
                        </View>
                        <View>
                            <Text style={styles.bczText}>
                                {Strings.becauseyou}
                            </Text>
                            <TouchableOpacity
                                onPress={() => authen()}
                                style={styles.unlockView}
                            >
                                <MaterialIcons
                                    name={'lock'}
                                    style={styles.lockIcon}
                                />
                                <Text style={styles.unlockText}>
                                    {Strings.unlock}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        color: '#fff',
        padding: 20,
        marginTop:
            Platform.OS == 'android'
                ? 5
                : deviceInfoModule.hasNotch()
                ? 40
                : 10,
        fontSize: 28,
        lineHeight: 35,
    },
    lockImgView: {
        justifyContent: 'center',
        height: deviceHeight / 2.5,
    },
    lockImg: {
        alignSelf: 'center',
        height: 270,
        width: 270,
    },
    bczText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'helveticaneue',
    },
    unlockView: {
        backgroundColor: '#ffd100',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 30,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        flexDirection: 'row',
    },
    lockIcon: {
        color: '#141414',
        fontSize: 24,
        lineHeight: 30,
    },
    unlockText: {
        color: '#141414',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22.5,
        marginLeft: 10,
        fontFamily: 'helveticaneue',
    },
})
