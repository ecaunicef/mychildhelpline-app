// accessibilityReducer.ts

import AsyncStorageService from '../../utils/AsyncStorage'
import {
    DYSLEXIA_FRIENDLY,
    INCREASE_FONT_SIZE,
    LINE_HEIGHT,
    LOAD_ACCESSIBILITY_SETTINGS,
    TEXT_SPACING,
} from '../actions/commonActions'

import {
    AccessibilityActionType,
    AccessibilityState,
} from '../types/commonTypes'
const initialState: AccessibilityState = {
    fontFamily: '',
    fontSize: 0,
    lineHeight: 0,
    texSpacing: 0,
    clickCount: {
        fontSize: 0,
        lineHeight: 0,
        texSpacing: 0,
        dyslexiaFriendly: 0,
    },
}

const accessibilityReducer = (
    state = initialState,
    action: AccessibilityActionType
): AccessibilityState => {
    switch (action.type) {
        case LOAD_ACCESSIBILITY_SETTINGS:
            return {
                ...state,
                ...action.payload,
            }
        case DYSLEXIA_FRIENDLY:
            const newDyslexiaClickCount =
                (state.clickCount.dyslexiaFriendly + 1) % 3
            let newFontFamily = ''
            if (newDyslexiaClickCount === 1) {
                newFontFamily = 'UserwayDyslexiaFont-Medium'
            } else if (newDyslexiaClickCount === 2) {
                newFontFamily = 'UserwayDyslexiaFont-Bold'
            }

            // Save to localStorage
            AsyncStorageService.setItem('fontFamily', newFontFamily)
            AsyncStorageService.setItem(
                'dyslexiaClickCount',
                newDyslexiaClickCount.toString()
            )

            return {
                ...state,
                fontFamily: newFontFamily,
                clickCount: {
                    ...state.clickCount,
                    dyslexiaFriendly: newDyslexiaClickCount,
                },
            }

        case INCREASE_FONT_SIZE:
            const newClickCount = state.clickCount.fontSize + 1

            if (newClickCount >= 3) {
                AsyncStorageService.setItem('fontSize', '0')
                AsyncStorageService.setItem('fontSizeClickCount', '0')
                return {
                    ...state,
                    fontSize: 0,
                    clickCount: {
                        ...state.clickCount,
                        fontSize: 0,
                    },
                }
            }
            // Save updated font size and click count to localStorage
            AsyncStorageService.setItem(
                'fontSize',
                (state.fontSize + 2).toString()
            )
            AsyncStorageService.setItem(
                'fontSizeClickCount',
                newClickCount.toString()
            )
            return {
                ...state,
                fontSize: state.fontSize + 2,
                clickCount: {
                    ...state.clickCount,
                    fontSize: newClickCount,
                },
            }

        case LINE_HEIGHT:
            let newLineHeight = state.lineHeight
            const newLineHeightClickCount = state.clickCount.lineHeight + 1

            if (newLineHeightClickCount === 1) {
                newLineHeight = 5
            } else if (newLineHeightClickCount === 2) {
                newLineHeight = 10
            } else if (newLineHeightClickCount === 3) {
                newLineHeight = 15
            } else {
                newLineHeight = 1
            }
            if (newLineHeightClickCount >= 4) {
                // Reset line height
                AsyncStorageService.setItem('lineHeight', '0')
                AsyncStorageService.setItem('lineHeightClickCount', '0')
                return {
                    ...state,
                    lineHeight: 0,
                    clickCount: {
                        ...state.clickCount,
                        lineHeight: 0,
                    },
                }
            }

            AsyncStorageService.setItem('lineHeight', newLineHeight.toString())
            AsyncStorageService.setItem(
                'lineHeightClickCount',
                newLineHeightClickCount.toString()
            )

            return {
                ...state,
                lineHeight: newLineHeight,
                clickCount: {
                    ...state.clickCount,
                    lineHeight: newLineHeightClickCount,
                },
            }

        case TEXT_SPACING:
            let newTextSpacing = state.texSpacing
            const newTextSpacingClickCount = state.clickCount.texSpacing + 1
            if (newTextSpacingClickCount === 1) {
                newTextSpacing = 1.5
            } else if (newTextSpacingClickCount === 2) {
                newTextSpacing = 2
            } else if (newTextSpacingClickCount === 3) {
                newTextSpacing = 2.5
            } else {
                newTextSpacing = 0
            }
            if (newTextSpacingClickCount >= 4) {
                AsyncStorageService.setItem('texSpacing', '0')
                AsyncStorageService.setItem('texSpacingClickCount', '0')
                return {
                    ...state,
                    texSpacing: 0,
                    clickCount: {
                        ...state.clickCount,
                        texSpacing: 0,
                    },
                }
            }

            // Save updated text spacing and click count to localStorage
            AsyncStorageService.setItem('texSpacing', newTextSpacing.toString())
            AsyncStorageService.setItem(
                'texSpacingClickCount',
                newTextSpacingClickCount.toString()
            )

            return {
                ...state,
                texSpacing: newTextSpacing,
                clickCount: {
                    ...state.clickCount,
                    texSpacing: newTextSpacingClickCount,
                },
            }

        default:
            return state
    }
}

export default accessibilityReducer
