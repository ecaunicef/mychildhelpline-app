import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Keyboard,
    Dimensions,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from '../../basedComponents/customText'
import {
    moderateVerticalScale,
    scale,
    verticalScale,
} from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { statusBarHeight } from '../../../utils/constants'
import localization from '../../../utils/localization'

const Layout = ({
    children,
    ScreenName,
    ScreenSubName,
    BackButton,
    RightIcon,
    deleteButton,
    style,
    onDeleteNotifications,
    onPress,
}: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true)
        })

        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false)
        })

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                ...style,
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={keyboardVisible ? 30 : 0}
        >
            <ImageBackground
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS == 'ios'
                            ? statusBarHeight + verticalScale(20)
                            : 0,
                }}
                resizeMode="stretch"
                source={require('../../../../assets/image/BeforeWeBegin.png')}
            >
                <View
                    style={{
                        ...styles?.header,
                        marginTop: Platform.OS == 'ios' ? verticalScale(0) : 0,
                    }}
                >
                    <TouchableOpacity
                        style={styles.headerContainer}
                        onPress={
                            onPress
                                ? onPress
                                : () => {
                                      navigation.goBack()
                                  }
                        }
                    >
                        {BackButton ? (
                            <AntDesign name="left" size={24} />
                        ) : null}
                        <View>
                            <CustomText style={styles.headerTitle}>
                                {ScreenName}
                            </CustomText>
                            {ScreenName == localization['givefeedback'] ? (
                                <CustomText style={styles.headerSubTitle}>
                                    {ScreenSubName}
                                </CustomText>
                            ) : null}
                        </View>
                    </TouchableOpacity>
                    {deleteButton && (
                        <TouchableOpacity onPress={onDeleteNotifications}>
                            <Icon name="delete-outline" size={24} />
                        </TouchableOpacity>
                    )}
                </View>
                {children}
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Layout

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: {
        flexDirection: 'row',
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
    },
    modalHeaderTitle: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerSubTitle: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '600',
        color: '#666666',
    },
})
