import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    SplashScreen,
    IntroductionSlider,
    Arcade,
    ChatLine,
    MyChillSpot,
    MyDiary,
    RegisterUser,
    RequestForCounselling,
    Settings,
    HelpingHand,
    Accessibility,
    Policies,
    Resources,
    Notifications,
    MyRights,
    SelectAvatar,
    VideosPlayer,
    GetUsFeedback,
    UpdateYourProfile,
    UnlockPage,
    Puzzle,
    Bouncify,
} from '../screens'
import { tictac, tictocai } from '../screens/games'
import BottomTabNavigator from './BottomTabNavigator'
import CustomWebView from '../pages/WebView'
import { useAppDispatch } from '../store/hooks'
import AsyncStorageService from '../utils/AsyncStorage'
import Tictacoptions from '../screens/Arcade/Tictacoptions'
import {
    hideLoading,
    setLanguage,
    showLoading,
} from '../store/actions/commonActions'
import localization from '../utils/localization'
import About from '../screens/About/About'
import LeafletMap from '../screens/Test/Test'

export default function Navigation() {
    const navigationRef = React.useRef<any>()
    const dispatch = useAppDispatch()
    const initializeLanguage: any = async () => {
        try {
            dispatch(showLoading())
            const storedLanguage = await AsyncStorageService.getItem<string>(
                'language'
            )
            const languageToSet = storedLanguage || 'en'
            dispatch(setLanguage(languageToSet))
            localization.setLanguage(languageToSet)
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
            console.error('Failed to initialize language:', error)
        }
    }

    useEffect(() => {
        initializeLanguage()
    }, [dispatch])

    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigation />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<any>()

function RootNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="TestScreen" component={LeafletMap} />
            <Stack.Screen name="AboutUs" component={About} />
            <Stack.Screen name="Accessibility" component={Accessibility} />
            <Stack.Screen name="SelectAvatar" component={SelectAvatar} />
            <Stack.Screen name="Arcade" component={Arcade} />
            <Stack.Screen name="ChatLine" component={ChatLine} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="BeforeWeBegin" component={RegisterUser} />
            <Stack.Screen
                name="IntoductionSlider"
                component={IntroductionSlider}
            />
            <Stack.Screen name="WebView" component={CustomWebView} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyChillSpot" component={MyChillSpot} />
            <Stack.Screen name="MyDiary" component={MyDiary} />
            <Stack.Screen name="Policies" component={Policies} />
            <Stack.Screen name="HelpingHand" component={HelpingHand} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="MyRights" component={MyRights} />
            <Stack.Screen name="Resources" component={Resources} />
            <Stack.Screen name="GetUsFeedback" component={GetUsFeedback} />
            <Stack.Screen
                name="UpdateYourProfile"
                component={UpdateYourProfile}
            />
            <Stack.Screen
                name="RequestForCounselling"
                component={RequestForCounselling}
            />
            <Stack.Screen name="UnlockPage" component={UnlockPage} />
            <Stack.Screen name="VideosPlayer" component={VideosPlayer} />
            <Stack.Screen name="Puzzle" component={Puzzle} />
            <Stack.Screen name="Bouncify" component={Bouncify} />
            <Stack.Screen name="Tictacoptions" component={Tictacoptions} />
            <Stack.Screen name="tictoc" component={tictac} />
            <Stack.Screen name="tictactoai" component={tictocai} />
        </Stack.Navigator>
    )
}
