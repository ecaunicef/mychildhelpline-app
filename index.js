/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Platform } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import notifee, { EventType } from '@notifee/react-native'

notifee.onBackgroundEvent(async ({ type, detail }) => {
    
    switch (type) {
        case EventType.PRESS:
            // Handle notification press
            console.log('Notification pressed!', detail.notification)
            break
        case EventType.DISMISSED:
            // Handle notification dismissal
            console.log('Notification dismissed!', detail.notification)
            break
    }
})

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
   
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    })

    // Display a notification

    await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
            channelId,
            // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
                id: 'default',
            },
        },
    })
})
// }

AppRegistry.registerComponent(
    Platform.OS == 'ios' ? appName : 'My Child Helpline',
    () => App
)
