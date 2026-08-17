import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/store/store'
import Toast from 'react-native-toast-message'
import Loader from './src/components/common/Loader'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { NotificationServiceRegistry } from './src/utils/PushService/NotificationServiceFactory'

/**
 * Android 16 (API 36) forces edge-to-edge rendering with no opt-out, and
 * `edgeToEdgeEnabled=true` in android/gradle.properties opts every older OS
 * version into the same behaviour, so app content draws underneath the status
 * bar on all Android versions. This applies the top inset once at the root
 * instead of per screen — do not gate it on OS version.
 *
 * Only the top inset is applied: the bottom tab bar handles its own bottom
 * inset via React Navigation, and padding here too would double up.
 *
 * iOS is unaffected — screens already apply their own top padding there.
 */
const EdgeToEdgeInsets = ({ children }: { children: React.ReactNode }) => {
    const insets = useSafeAreaInsets()

    if (Platform.OS !== 'android') {
        return <>{children}</>
    }

    return <View style={{ flex: 1, paddingTop: insets.top }}>{children}</View>
}

const App = () => {
    const pushService = NotificationServiceRegistry.getService()

    useEffect(() => {
        setupPush()
    }, [])

    const setupPush = async () => {
        await pushService.initialize()
        await pushService.getDeviceToken()

        pushService.onNotification((data) => {
            console.log('Notification received:', data)
            // Handle notification data
        })
    }

    return (
        <>
            <Provider store={store}>
                <SafeAreaProvider>
                    <EdgeToEdgeInsets>
                        <Navigation />
                    </EdgeToEdgeInsets>
                </SafeAreaProvider>
                <Loader />
            </Provider>
            <Toast />
        </>
    )
}

export default App

const styles = StyleSheet.create({})
