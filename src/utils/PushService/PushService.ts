// PushService.ts
import notifee from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import AsyncStorageService from '../AsyncStorage'

export abstract class CloudPushNotificationService {
    abstract initialize(): Promise<void>
    abstract getDeviceToken(): Promise<void>
    abstract onNotification(callback: (data: any) => void): void
}

export class PushNotificationService extends CloudPushNotificationService {
    async initialize(): Promise<void> {
        try {
            const authStatus = await messaging().requestPermission()
            await notifee.requestPermission()

            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL

            if (enabled) {
                console.log('notification permission:  granted', enabled)
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error)
        }
    }

    async getDeviceToken(): Promise<void> {
        try {
            const token = await messaging().getToken()
            if (token) {
                await AsyncStorageService.setItem('@fcmToken', token)
            }
        } catch (error) {
            console.error('Failed to get device token:', error)
        }
    }

    onNotification(callback: (data: any) => void): void {
        messaging().onMessage(async (remoteMessage) => {
            console.log(remoteMessage, 'remoteMessage')
            const channelId = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
            })

            // Display a notification

            await notifee.displayNotification({
                title: remoteMessage?.notification?.title,
                body: remoteMessage?.notification?.body,
                android: {
                    channelId,
                    // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                    // pressAction is needed if you want the notification to open the app when pressed
                    pressAction: {
                        id: 'default',
                    },
                },
            })
            callback(remoteMessage)
        })
    }
}
