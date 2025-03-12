import React, { useEffect } from 'react'
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native'
import { WebView } from 'react-native-webview'
import CustomText from '../components/basedComponents/customText'
import Layout from '../components/common/Layout/Layout'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { hideLoading, showLoading } from '../store/actions/commonActions'
import { moderateScale } from 'react-native-size-matters'

const CustomWebView = ({ route }: any) => {
    const { url, title } = route.params
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((state) => state.loader.isLoading)

    useEffect(() => {
        dispatch(showLoading())
        return () => {
            dispatch(hideLoading())
        }
    }, [dispatch])

    return (
        <Layout ScreenName={title} BackButton={true}>
            {!url ? (
                <View style={styles.errorContainer}>
                    <CustomText style={styles.errorText}>
                        External Link Not Found
                    </CustomText>
                </View>
            ) : (
                <WebView
                    source={{ uri: url }}
                    style={styles.webView}
                    javaScriptEnabled
                    domStorageEnabled
                    allowFileAccessFromFileURLs
                    allowUniversalAccessFromFileURLs
                    startInLoadingState
                    mixedContentMode="compatibility"
                    ignoreSslError
                    onLoadStart={() => {
                        dispatch(showLoading()) // Show loader on start
                    }}
                    onLoadEnd={() => {
                        dispatch(hideLoading()) // Hide loader once WebView finishes loading
                    }}
                    onHttpError={(e) => {
                        dispatch(hideLoading)
                    }}
                />
            )}
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    webView: {
        flex: 1,
        zIndex: 9999,
    } as ViewStyle,
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    errorText: {
        color: 'black',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
    } as TextStyle,
    backButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
        margin: 10,
        borderRadius: 5,
    } as ViewStyle,
    backButtonText: {
        color: '#007BFF',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontWeight: 'bold',
    } as TextStyle,

    activ: {
        position: 'absolute',
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
})

export default CustomWebView
