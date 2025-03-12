import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
    decreaseFontSize,
    fontFamilly,
    increaseFontSize,
    lineHeight,
    textSpacing,
} from '../../store/actions/commonActions'
import { useAppDispatch } from '../../store/hooks'
import localization from '../../utils/localization'

const Accessibility = () => {
    const dispatch = useAppDispatch()

    const handleIncreaseFontSize = () => {
        dispatch(increaseFontSize())
    }

    const handleDecreaseFontSize = () => {
        dispatch(decreaseFontSize())
    }

    const handleTextSpacing = () => {
        dispatch(textSpacing())
    }

    const handleLineHeight = () => {
        dispatch(lineHeight())
    }

    const handleFontFamilly = () => {
        dispatch(fontFamilly())
    }

    return (
        <View>
            <TouchableOpacity onPress={handleFontFamilly}>
                <Text>{localization['fontfamily']}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleIncreaseFontSize}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTextSpacing}>
                <Text>{localization['text']}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLineHeight}>
                <Text>{localization['lineheight']}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDecreaseFontSize}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Accessibility
