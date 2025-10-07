import { NotificationPayload } from './NotificationTypes'

export const config = {
    NOTIFICATION_PROVIDER: 'FCM', // Change to 'OneSignal' on any other provider
} as const

export const mapToNotificationPayload = (
    notification: any
): NotificationPayload => {
    return {
        id: notification.notificationId || Date.now().toString(),
        title: notification.title || notification?.notification?.title || '',
        body: notification.body || notification?.notification?.body || '',
        data: notification.additionalData,
    }
}
