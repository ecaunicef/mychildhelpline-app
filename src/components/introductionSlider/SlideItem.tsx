import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

interface SlideItemProps {
    item: {
        cmp: any
    }
}

const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
    return <View style={styles.container}>{item.cmp}</View>
}

export default SlideItem

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
    },
})
