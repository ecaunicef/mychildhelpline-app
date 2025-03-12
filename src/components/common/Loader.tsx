import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useAppSelector } from '../../store/hooks'

const Loader: React.FC = () => {
    const isLoading = useAppSelector((state) => state.loader.isLoading)

    if (!isLoading) return null

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
})

export default Loader
