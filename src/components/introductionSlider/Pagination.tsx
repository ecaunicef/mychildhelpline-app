import React from 'react'
import { StyleSheet, Animated, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

interface PaginationProps {
    data: any[]
    scrollX: Animated.Value
    index: number
}

const Pagination: React.FC<PaginationProps> = ({ data, scrollX }) => {
    return (
        <View style={styles.container}>
            {data.map((_, idx) => {
                const inputRange = [
                    (idx - 1) * width,
                    idx * width,
                    (idx + 1) * width,
                ]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [14, 45, 14],
                    extrapolate: 'clamp',
                })

                const dotHeight = scrollX.interpolate({
                    inputRange,
                    outputRange: [7, 7, 7],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1],
                    extrapolate: 'clamp',
                })

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#FFF8D7', '#977D04', '#FFF8D7'],
                    extrapolate: 'clamp',
                })

                return (
                    <Animated.View
                        key={idx.toString()}
                        style={[
                            styles.dot,
                            {
                                width: dotWidth,
                                height: dotHeight,
                                backgroundColor,
                                opacity,
                            },
                        ]}
                    />
                )
            })}
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: height * 0.045,
        flexDirection: 'row',
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        borderRadius: 11,
        marginHorizontal: 3,
    },
})
