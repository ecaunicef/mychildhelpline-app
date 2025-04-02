import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/basedComponents/customText'
import { moderateScale } from 'react-native-size-matters'

const Suggestions = (props: any) => {
    return (
        <>
            <View style={styles.suggestionItem}>
                <CustomText style={styles.suggestionsText}>
                    {props.title}
                </CustomText>
            </View>
        </>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    suggestionItem: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginRight: 20,
        marginBottom: 10,
    },
    suggestionsText: {
        backgroundColor: '#ffffff',
        color: '#1B4987',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        paddingVertical: 7.5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#1B4987',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
})
