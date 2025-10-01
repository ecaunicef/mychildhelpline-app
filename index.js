/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Platform } from 'react-native'

AppRegistry.registerComponent(
    Platform.OS == 'ios' ? appName : 'My Child Helpline',
    () => App
)
