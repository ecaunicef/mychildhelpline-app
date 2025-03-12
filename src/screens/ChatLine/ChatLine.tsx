import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../components/basedComponents/customText'
import localization from '../../utils/localization'

const ChatLine = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <CustomText>{localization['chatline']}</CustomText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChatLine

const styles = StyleSheet.create({})
