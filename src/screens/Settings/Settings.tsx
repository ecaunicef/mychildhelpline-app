import React, { useState } from 'react'
import {
    View,
    Switch,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomText from '../../components/basedComponents/customText'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import SettingsListIconFirst from '../../../assets/svgs/SettingsListIconFirst'
import SettingsListIconSecond from '../../../assets/svgs/SettingsListIconSecond'
import SettingsListIconThird from '../../../assets/svgs/SettingsListIconThird'
import SettingsListIconFourth from '../../../assets/svgs/SettingsListIconFourth'
import SettingsListIconFifth from '../../../assets/svgs/SettingsListIconFifth'
import SettingsListIconSixth from '../../../assets/svgs/SettingsListIconSixth'
import SettingsListIconSeventh from '../../../assets/svgs/SettingsListIconSeventh'
import Layout from '../../components/common/Layout/Layout'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { moderateScale } from 'react-native-size-matters'
import AsyncStorageService from '../../utils/AsyncStorage'
import { deleteUser } from '../../services/auth'
import ReactNativeBiometrics from 'react-native-biometrics'
import localization from '../../utils/localization'

const biometrics = new ReactNativeBiometrics()
const Settings = () => {
    const [homeLock, setHomeLock] = React.useState<any>(false)
    const [diaryLock, setDiaryLock] = React.useState<any>(false)
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [biometricType, setbiometricType] = useState<any>('')
    React.useEffect(() => {
        checkLock()
    }, [])

    const checkLock = async () => {
        const { available, biometryType } = await biometrics.isSensorAvailable()
        setbiometricType(biometryType)

        let isHomeLockEnabled = await AsyncStorageService.getItem('AppLock')
        let isDiaryLockEnabled = await AsyncStorageService.getItem('DiaryLock')
        setHomeLock(isHomeLockEnabled)
        setDiaryLock(isDiaryLockEnabled)
    }
    async function handleAppLockChange() {
        setHomeLock(!homeLock)
        await AsyncStorageService.setItem('AppLock', !homeLock)
    }

    async function handleDiaryLockChange() {
        setDiaryLock(!diaryLock)
        await AsyncStorageService.setItem('DiaryLock', !diaryLock)
    }

    const deleteUserAccount = async () => {
        Alert.alert(
            localization['confirmdeletion'],
            localization['confirmdeletionmsg'],
            [
                {
                    text: localization['cancel'],
                    onPress: () => console.log('Account deletion canceled'),
                    style: 'cancel',
                },
                {
                    text: localization['delete'],
                    onPress: async () => {
                        let userdata: any = await AsyncStorageService.getItem(
                            'user_details'
                        )
                        let response = await deleteUser({
                            id: `${userdata.id}`,
                        })
                        await AsyncStorage.clear()
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'SplashScreen' }],
                        })
                    },
                    style: 'destructive',
                },
            ]
        )
    }

    return (
        <Layout ScreenName={localization['settings']} BackButton={true}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('UpdateYourProfile')
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconFirst style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {localization['updateprofile']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
                {biometricType !== undefined ? (
                    <TouchableOpacity style={styles.item} activeOpacity={1}>
                        <View style={styles.itemLeft}>
                            <View style={styles.itemLeftIcon}>
                                <SettingsListIconSecond style={styles.icon} />
                            </View>
                            <CustomText style={styles.text}>
                                {localization['diarylock']}
                            </CustomText>
                        </View>
                        <View style={styles.itemRight}>
                            <View
                                style={[
                                    styles.customTrack,
                                    {
                                        backgroundColor: diaryLock
                                            ? '#FFFFFF'
                                            : '#C0C0C0',
                                    },
                                ]}
                            >
                                <Switch
                                    value={diaryLock}
                                    onValueChange={() => {
                                        handleDiaryLockChange()
                                    }}
                                    trackColor={{
                                        false: 'transparent',
                                        true: 'transparent',
                                    }}
                                    thumbColor={
                                        diaryLock ? '#205591' : '#EFEFEF'
                                    }
                                    ios_backgroundColor="#C0C0C0"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : null}
                {biometricType !== undefined ? (
                    <TouchableOpacity style={styles.item} activeOpacity={1}>
                        <View style={styles.itemLeft}>
                            <View style={styles.itemLeftIcon}>
                                <SettingsListIconSecond style={styles.icon} />
                            </View>
                            <CustomText style={styles.text}>
                                {localization['applock']}
                            </CustomText>
                        </View>
                        <View style={styles.itemRight}>
                            <View
                                style={[
                                    styles.customTrack,
                                    {
                                        backgroundColor: homeLock
                                            ? '#FFFFFF'
                                            : '#C0C0C0',
                                    },
                                ]}
                            >
                                <Switch
                                    value={homeLock}
                                    onValueChange={() => {
                                        handleAppLockChange()
                                    }}
                                    trackColor={{
                                        false: 'transparent',
                                        true: 'transparent',
                                    }}
                                    thumbColor={
                                        homeLock ? '#205591' : '#EFEFEF'
                                    }
                                    ios_backgroundColor="#C0C0C0"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : null}
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('Policies')
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconThird style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {localization['policies']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('WebView', {
                            url: 'https://www.mychildhelpline.org/faqs.html',
                            title: 'FAQs',
                        })
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconFourth style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {localization['faqs']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('WebView', {
                            url: 'https://www.mychildhelpline.org/how-to-use-app.html',
                            title: ' How to use the app',
                        })
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconFifth style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {localization['howtousetheapp']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('GetUsFeedback')
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconSixth style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {' '}
                            {localization['feedback']}{' '}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => deleteUserAccount()}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconSeventh style={styles.icon} />
                        </View>
                        <CustomText style={[styles.textColor, styles.text]}>
                            {localization['deleteaccount']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} color={'red'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate('AboutUs')
                    }}
                >
                    <View style={styles.itemLeft}>
                        <View style={styles.itemLeftIcon}>
                            <SettingsListIconFourth style={styles.icon} />
                        </View>
                        <CustomText style={styles.text}>
                            {localization['about']}
                        </CustomText>
                    </View>
                    <View style={styles.itemRight}>
                        <AntDesign name="right" size={24} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </Layout>
    )
}

export default Settings

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        width: '80%',
    },
    itemLeftIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '20%',
    },
    icon: {
        color: '#222222',
    },
    text: {
        flex: 1,
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        fontFamily: 'OpenSans-Regular',
    },
    textColor: {
        color: 'red',
    },
    customTrack: {
        width: 46,
        height: 24,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 3,
    },
    switch: {
        alignSelf: 'center',
        width: 18,
        height: 18,
        borderRadius: 7,
    },
})
