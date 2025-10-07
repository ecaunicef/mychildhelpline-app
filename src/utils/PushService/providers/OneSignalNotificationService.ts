import { OneSignal } from 'react-native-onesignal'
import { INotificationService } from '../NotificationTypes'
import AsyncStorageService from '../../AsyncStorage'

export class OneSignalNotificationService implements INotificationService {
    private readonly APP_ID = 'YOUR_ONESIGNAL_APP_ID' // Replace with your App ID

    async initialize(): Promise<void> {
        OneSignal.initialize(this.APP_ID)
        OneSignal.Notifications.requestPermission(true)
    }

    async getDeviceToken(): Promise<void> {
        OneSignal.User.pushSubscription
            .getTokenAsync()
            .then(async (token) => {
                await AsyncStorageService.setItem('@fcmToken', token)
            })
            .catch((e) => console.error('Error in fetching token', e))
    }

    onNotification(callback: (data: any) => void): void {
        OneSignal.Notifications.addEventListener(
            'foregroundWillDisplay',
            (notification) => {
                callback(notification)
            }
        )
    }
}
