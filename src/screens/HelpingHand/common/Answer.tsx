import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/basedComponents/customText'
import DefaultProPicSVG from './images/DefaultProPic'
import { moderateScale } from 'react-native-size-matters'
import { deviceWidth } from '../../../utils/constants'

const Answer = (props: any) => {
    return (
        <View style={styles.answerBox}>
            <View style={styles.answerIcon}>
                <DefaultProPicSVG />
            </View>
            <CustomText style={[styles.answerText]}>{props.text}</CustomText>
        </View>
    )
}

export default Answer

const styles = StyleSheet.create({
    answerBox: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
        position: 'relative',
        marginBottom: 20,
        // backgroundColor: 'red',
    },
    answerIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 50,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
    },
    answerText: {
        backgroundColor: '#ffffff',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 30,
        borderTopLeftRadius: 0,
        maxWidth: deviceWidth * 0.8 - 30,
    },
})
