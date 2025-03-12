import {
    PermissionsAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import LocationRequestMap from '../../../assets/svgs/LocationRequestMap'
import CustomText from '../basedComponents/customText'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const LocationAccess = ({ setLocation }: any) => {
    return (
        <View style={styles.container}>
            <LocationRequestMap />
            <CustomText
                style={{
                    fontSize: moderateScale(16),
                    fontFamily: 'OpenSans-Bold',
                    marginBottom: verticalScale(5),
                }}
            >
                Location permission is off
            </CustomText>
            <CustomText
                style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'OpenSans-Regular',
                    alignSelf: 'center',
                    marginBottom: verticalScale(0),
                }}
            >
                {`Please enable location permission for a better`}{' '}
            </CustomText>
            <CustomText
                style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'OpenSans-Regular',
                    alignSelf: 'center',
                    marginBottom: verticalScale(25),
                }}
            >
                {`experience`}{' '}
            </CustomText>
            <TouchableOpacity
                onPress={async () => {
                    let granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                    setLocation(granted)
                }}
                activeOpacity={0.8}
                style={{
                    width: '85%',
                    padding: verticalScale(8),
                    backgroundColor: '#FFD200',
                    borderRadius: moderateScale(25),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CustomText
                    style={{
                        fontSize: moderateScale(14),
                        fontFamily: 'OpenSans-Medium',
                        alignSelf: 'center',
                        marginBottom: verticalScale(5),
                    }}
                >
                    {`Continue`}{' '}
                </CustomText>
            </TouchableOpacity>
        </View>
    )
}

export default LocationAccess

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        width: '100%',
        height: '45%',
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        alignItems: 'center',
    },
})
