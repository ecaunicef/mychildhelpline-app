import React, { useRef, useState } from 'react'
import {
    Animated,
    FlatList,
    StyleSheet,
    View,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native'
import SlidesData from './data/data'
import SlideItem from './SlideItem'
import Pagination from './Pagination'

const Slider: React.FC = () => {
    const [index, setIndex] = useState<number>(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(event)
    }

    const handleOnViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: { index: number | null }[] }) => {
            if (viewableItems.length > 0 && viewableItems[0].index !== null) {
                setIndex(viewableItems[0].index)
            }
        }
    ).current

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current

    return (
        <View>
            <FlatList
                data={SlidesData}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={(item, index) => index.toString()}
            />
            <Pagination data={SlidesData} scrollX={scrollX} index={index} />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({})
