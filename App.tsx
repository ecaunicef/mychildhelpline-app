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
import {
    StatusBarBandProvider,
    useStatusBarBandColor,
} from './src/components/common/ScreenStatusBar'

/**
 * Android 16 (API 36) forces edge-to-edge rendering with no opt-out, and
 * `edgeToEdgeEnabled=true` in android/gradle.properties opts every older OS
 * version into the same behaviour, so app content draws underneath the status
 * bar on all Android versions. This applies the top inset once at the root
 * instead of per screen — do not gate it on OS version.
 *
 * The inset is an explicit band view rather than bare padding so it can be
 * coloured: `<StatusBar backgroundColor>` is a silent no-op under edge-to-edge,
 * so screens declare their band colour with `ScreenStatusBar` instead.
 *
 * Left/right insets are applied to the content (not the band, which spans the
 * full width like the status bar itself) so that in landscape, or on a device
 * with a side navigation bar or display cutout, content is not clipped by it.
 *
 * The bottom inset is deliberately NOT applied here: the tab bar handles its
 * own via React Navigation, and padding the root would put a blank strip under
 * the full-bleed screens (splash, intro slider). Screens that anchor content to
 * the bottom edge add `useSafeAreaInsets().bottom` themselves.
 *
 * iOS is unaffected — screens already apply their own top padding there.
 */
const EdgeToEdgeInsets = ({ children }: { children: React.ReactNode }) => {
    const insets = useSafeAreaInsets()
    const bandColor = useStatusBarBandColor()

    if (Platform.OS !== 'android') {
        return <>{children}</>
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: insets.top, backgroundColor: bandColor }} />
            <View
                style={{
                    flex: 1,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }}
            >
                {children}
            </View>
        </View>
    )
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
                    <StatusBarBandProvider>
                        <EdgeToEdgeInsets>
                            <Navigation />
                        </EdgeToEdgeInsets>
                    </StatusBarBandProvider>
                </SafeAreaProvider>
                <Loader />
            </Provider>
            <Toast />
        </>
    )
}

export default App

const styles = StyleSheet.create({})
