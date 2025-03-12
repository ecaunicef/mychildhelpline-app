import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/basedComponents/customText'
import DefaultProPicSVG from './images/DefaultProPic'
import { moderateScale } from 'react-native-size-matters'
import { deviceWidth } from '../../../utils/constants'

const Question = (props: any) => {
    return (
        <View style={styles.questionBox}>
            <CustomText style={styles.questionText}>{props.text}</CustomText>
            <View style={styles.questionIcon}>
                <DefaultProPicSVG />
            </View>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    questionBox: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        position: 'relative',
        marginBottom: 20,
    },
    questionIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 50,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
    },
    questionText: {
        backgroundColor: '#2F80ED',
        color: '#ffffff',
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
        borderTopRightRadius: 0,
        maxWidth: deviceWidth * 0.8 - 30,
    },
})
