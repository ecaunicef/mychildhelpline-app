export interface INotificationService {
    initialize(): Promise<void>
    getDeviceToken(): Promise<void>
    onNotification(callback: (data: any) => void): void
}

export interface NotificationPayload {
    id: string
    title: string
    body: string
    data?: Record<string, any>
}
