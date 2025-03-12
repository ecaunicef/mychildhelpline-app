import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
export const statusBarHeight = getStatusBarHeight()
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
