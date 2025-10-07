import notifee, { AndroidImportance } from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import AsyncStorageService from '../../AsyncStorage'
import { INotificationService, NotificationPayload } from '../NotificationTypes'
import { mapToNotificationPayload } from '../config'

export class FCMNotificationService implements INotificationService {
    async initialize(): Promise<void> {
        try {
            const authStatus = await messaging().requestPermission()
            await notifee.requestPermission()

            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL

            if (enabled) {
                const channelId = await notifee.createChannel({
                    id: 'default',
                    name: 'Default Channel',
                    importance: AndroidImportance.HIGH,
                })
            }
        } catch (error) {
            console.error(
                'Error requesting FCM notification permission:',
                error
            )
        }
    }

    async getDeviceToken(): Promise<void> {
        try {
            const token = await messaging().getToken()
            if (token) {
                await AsyncStorageService.setItem('@fcmToken', token)
            }
        } catch (error) {
            console.error('Failed to get FCM device token:', error)
        }
    }

    onNotification(callback: (data: any) => void): void {
        messaging().onMessage(async (remoteMessage) => {
            const notification: NotificationPayload =
                mapToNotificationPayload(remoteMessage)

            await notifee.displayNotification({
                title: notification?.title,
                body: notification?.body,
                android: {
                    channelId: 'default',
                    pressAction: {
                        id: 'default',
                    },
                },
            })

            callback(notification)
        })
    }
}
