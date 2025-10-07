import { config } from './config'
import { FCMNotificationService } from './providers/FCMNotificationService'
import { INotificationService } from './NotificationTypes'
import { OneSignalNotificationService } from './providers/OneSignalNotificationService'

type ServiceConstructor = new () => INotificationService

export class NotificationServiceRegistry {
    private static services = new Map<string, ServiceConstructor>()

    // instance
    private static instance: INotificationService | null = null

    /**
     * Register a notification service provider
     */
    static register(
        providerName: string,
        serviceClass: ServiceConstructor
    ): void {
        this.services.set(providerName?.toLowerCase(), serviceClass)
    }

    /**
     * Returns singleton instance based on config
     */
    static getService(): INotificationService {
        if (!this.instance) {
            this.instance = this.createService()
        }
        return this.instance
    }

    private static createService(): INotificationService {
        const providerName = config.NOTIFICATION_PROVIDER?.toLowerCase()
        const ServiceClass = this.services.get(providerName)

        if (!ServiceClass) {
            const availableProviders = this.getRegisteredProviders().join(', ')
            throw new Error(
                `Unknown notification provider` +
                    `Available providers: ${
                        availableProviders || 'none registered'
                    }`
            )
        }

        return new ServiceClass()
    }

    // For testing - reset singleton
    static resetInstance(): void {
        this.instance = null
    }

    // For debugging - see all registered providers
    static getRegisteredProviders(): string[] {
        return Array.from(this.services.keys())
    }
}

// Register all the Services
NotificationServiceRegistry.register('FCM', FCMNotificationService)
NotificationServiceRegistry.register('OneSignal', OneSignalNotificationService)
