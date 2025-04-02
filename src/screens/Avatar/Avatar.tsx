import React from 'react'
import { Alert, View } from 'react-native'
import { Avataars } from 'rn-customize-avatar/avataaars'
import Layout from '../../components/common/Layout/Layout'
import AsyncStorageService from '../../utils/AsyncStorage'
import { useNavigation } from '@react-navigation/native'
import localization from '../../utils/localization'

function SelectAvatar({ route }: any) {
    const { setuserAvatar } = route?.params
    const navigation = useNavigation<any>()
    return (
        <View style={{ flex: 1 }}>
            <Layout
                ScreenName={localization['broadcastmsg']}
                BackButton={false}
            >
                <Avataars
                    chipStyle={{ backgroundColor: '#FFD200' }}
                    listBgColor="#FFD200"
                    backgroundColor="#FFD200"
                    onDone={async (base64Image: any) => {
                        await AsyncStorageService.setItem(
                            'UserProfilePic',
                            base64Image
                        )
                        setuserAvatar(base64Image)
                        Alert.alert('Profile Image set', '', [
                            {
                                text: localization['cancel'], // Pass the string directly
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: localization['ok'], // Pass the string directly
                                onPress: () => {
                                    navigation.goBack()
                                },
                            },
                        ])
                    }}
                />
            </Layout>
        </View>
    )
}
export default SelectAvatar
