import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../../src/components/basedComponents/customText'
import { moderateScale } from 'react-native-size-matters'

function CommentTopSectionText(props: any) {
    const { width: deviceWidth, height: deviceHeight } =
        Dimensions.get('window')

    const [parentWidth, setParentWidth] = useState(0)
    const [parentHeight, setParentHeight] = useState(0)

    const handleParentLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout
        setParentWidth(width)
        setParentHeight(height)
    }

    return (
        <>
            <View
                style={{
                    width: '100%',
                    position: 'relative',
                    marginBottom: 25,
                    // backgroundColor: 'red',
                }}
                onLayout={handleParentLayout}
            >
                <LinearGradient
                    colors={['#56CCF2', '#1B4987']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.commonCommentBackgroundGradient}
                >
                    <View style={styles.commonCommentBackground}>
                        <View style={[styles.commonCommentBox]}>
                            <CustomText style={styles.commonCommentTitle}>
                                {props.commonCommentTitle}
                            </CustomText>
                            {props.commonCommentDescription && (
                                <CustomText
                                    style={styles.commonCommentDescription}
                                >
                                    {props.commonCommentDescription}
                                </CustomText>
                            )}
                        </View>
                    </View>
                </LinearGradient>
                <LinearGradient
                    colors={['#56CCF2', '#1B4987']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                        styles.commonCommentBackgroundGradientFirst,
                        {
                            top: parentHeight + 2.5,
                            left: parentWidth * 0.25,
                        },
                    ]}
                ></LinearGradient>
                <LinearGradient
                    colors={['#56CCF2', '#1B4987']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                        styles.commonCommentBackgroundGradientSecond,
                        {
                            top: parentHeight + 26,
                            left: parentWidth * 0.25 + 10,
                        },
                    ]}
                ></LinearGradient>
                <LinearGradient
                    colors={['#56CCF2', '#1B4987']}
                    start={{ x: -0.4, y: -0.4 }}
                    end={{ x: 0.8, y: 0.8 }}
                    style={[
                        styles.commonCommentBackgroundGradientThird,
                        {
                            top: parentHeight + 42.5,
                            left: parentWidth * 0.25 + 25,
                        },
                    ]}
                ></LinearGradient>
            </View>
        </>
    )
}

export default CommentTopSectionText

const styles = StyleSheet.create({
    commonCommentBackgroundGradient: {
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(30),
        // minHeight: 130,
        borderWidth: 1,
        borderColor: '#ffffff',
        // paddingHorizontal: moderateScale(20),
        // paddingVertical: moderateScale(15),
    },
    commonCommentBackgroundGradientFirst: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    commonCommentBackgroundGradientSecond: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: moderateScale(7.5),
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    commonCommentBackgroundGradientThird: {
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: moderateScale(7.5),
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    commonCommentBackground: {
        width: '100%',
        height: 'auto',
        // backgroundColor: 'green',
        padding: moderateScale(20),
    },
    commonCommentBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        // backgroundColor: 'red',
    },
    commonCommentTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: moderateScale(18),
        lineHeight: moderateScale(22.5),
        color: '#ffffff',
        width: '100%',
    },
    commonCommentDescription: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        color: '#ffffff',
        marginTop: 5,
        width: '100%',
    },
})
