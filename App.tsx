import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/store/store'
import Toast from 'react-native-toast-message'
import Loader from './src/components/common/Loader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PushNotificationService } from './src/utils/PushService/PushService'

const App = () => {
    const pushService = new PushNotificationService()
    useEffect(() => {
        setupPush()
    }, [])

    const setupPush = async () => {
        await pushService.initialize()

        await pushService.getDeviceToken()

        pushService.onNotification((data) => {
            console.log('Notification callback hit:', data)
        })
    }

    return (
        <>
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
                <Loader />
            </Provider>
            <Toast />
        </>
    )
}

export default App

const styles = StyleSheet.create({})
