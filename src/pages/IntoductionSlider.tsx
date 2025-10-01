import React, { useRef, useState } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Animated,
    Text,
    TouchableOpacity,
} from 'react-native'
import OneSlide from '../components/introductionSlider/One'
import TwoSlide from '../components/introductionSlider/Two'
import ThreeSlide from '../components/introductionSlider/Three'
import { moderateScale } from 'react-native-size-matters'
import localization from '../utils/localization'
import { useNavigation } from '@react-navigation/native'
import ArrowRightSvg from '../../assets/svgs/ArrowRight'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

interface Slide {
    id: string
}

const slides: Slide[] = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
]

const IntroductionSlider: React.FC = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const flatListRef = useRef<FlatList<Slide> | null>(null)
    const navigation = useNavigation<any>()
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollX.setValue(event.nativeEvent.contentOffset.x)
    }

    const handleMomentumScrollEnd = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / deviceWidth
        )
        setCurrentIndex(index)
    }
    const { bottom } = useSafeAreaInsets()
    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
                bounces={false}
                onScroll={handleScroll}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                renderItem={({ item, index }) => (
                    <View style={styles.slide}>
                        {index == 0 && <OneSlide />}
                        {index == 1 && <TwoSlide />}
                        {index == 2 && <ThreeSlide />}
                    </View>
                )}
            />

            {/* Pagination */}
            <View style={styles.pagination}>
                {slides.map((_, index) => {
                    const inputRange = [
                        (index - 1) * deviceWidth,
                        index * deviceWidth,
                        (index + 1) * deviceWidth,
                    ]

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [14, 43, 14],
                        extrapolate: 'clamp',
                    })

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.6, 1, 0.6],
                        extrapolate: 'clamp',
                    })
                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#FFF8D7', '#977D04', '#FFF8D7'],
                        extrapolate: 'clamp',
                    })

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.dot,
                                { width: dotWidth, opacity, backgroundColor },
                            ]}
                        />
                    )
                })}
            </View>
            <TouchableOpacity
                onPress={() => navigation.replace('BeforeWeBegin')}
                style={[
                    styles.nextButton,
                    {
                        bottom: 10 + bottom,
                    },
                ]}
            >
                <Text style={styles.nextButtonText}>
                    {currentIndex === slides.length - 1
                        ? localization['doneText']
                        : localization['skipText']}
                </Text>
                {currentIndex !== slides.length - 1 && <ArrowRightSvg />}
            </TouchableOpacity>
        </View>
    )
}

export default IntroductionSlider

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#977D04',
        marginHorizontal: 5,
    },
    Landing: {
        flex: 1,
        backgroundColor: '#FFD200',
        width: deviceWidth,
        height: deviceHeight,
        position: 'relative',
        overflow: 'hidden',
    },
    circle: {
        position: 'absolute',
        top: -50,
        left: 0,
        zIndex: -1,
        width: deviceWidth,
        height: deviceHeight + 50,
    },
    myChildLogo: {
        zIndex: 1,
        width: deviceWidth,
        height: deviceHeight,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15,
    },
    introductionText: {
        paddingTop: moderateScale(20),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        alignItems: 'center',
    },
    title: {
        color: '#111',
        fontSize: moderateScale(30),
        fontWeight: '300',
        lineHeight: moderateScale(38),
        fontFamily: 'OpenSans-Light',
    },
    titleBold: {
        fontSize: moderateScale(30),
        fontWeight: '700',
        lineHeight: moderateScale(38),
        fontFamily: 'OpenSans-Bold',
    },
    paragraph: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(18),
        textAlign: 'center',
        lineHeight: moderateScale(22),
        minHeight: 80,
    },
    messageText: {
        width: '75%',
        height: 375,
    },
    nextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 5,
        position: 'absolute',
        right: 10,
    },
    nextButtonText: { color: '#333333', fontSize: 16 },
    arrow: {
        width: 18,
        height: 30,
        transform: [{ rotate: '180deg' }],
        tintColor: '#333333',
    },
})
