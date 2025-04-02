import { Dispatch } from 'redux'
import AsyncStorageService from '../../utils/AsyncStorage'
import {
    AccessibilityActionType,
    AccessibilityState,
    IsModalShowAction,
    LocationAction,
    LocationState,
} from '../types/commonTypes'

// Action Types
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE'
export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE'
export const TEXT_SPACING = 'TEXT_SPACING'
export const LINE_HEIGHT = 'LINE_HEIGHT'
export const DYSLEXIA_FRIENDLY = 'DYSLEXIA_FRIENDLY'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const LOAD_ACCESSIBILITY_SETTINGS = 'LOAD_ACCESSIBILITY_SETTINGS'
export const IS_EMOJI_MODAL_SHOW = 'IS_EMOJI_MODAL_SHOW'
export const LOCATION__ADD = 'LOCATION__ADD'

export const getLocationAction = (data: LocationState): LocationAction => ({
    type: LOCATION__ADD,
    payload: data,
})

export const isModalShow = (isVisible: boolean): IsModalShowAction => ({
    type: IS_EMOJI_MODAL_SHOW,
    payload: isVisible,
})

export const showLoading = () => ({
    type: SHOW_LOADING,
})

export const hideLoading = () => ({
    type: HIDE_LOADING,
})

export const increaseFontSize = (): AccessibilityActionType => ({
    type: INCREASE_FONT_SIZE,
})

export const decreaseFontSize = (): AccessibilityActionType => ({
    type: DECREASE_FONT_SIZE,
})

export const textSpacing = (): AccessibilityActionType => ({
    type: TEXT_SPACING,
})

export const lineHeight = (): AccessibilityActionType => ({
    type: LINE_HEIGHT,
})

export const fontFamilly = (): AccessibilityActionType => ({
    type: DYSLEXIA_FRIENDLY,
})

export const setLanguage = (language: string) => ({
    type: SET_LANGUAGE,
    payload: language,
})

export const loadAccessibilitySettings = () => async (dispatch: Dispatch) => {
    try {
        const fontFamily =
            (await AsyncStorageService.getItem('fontFamily')) || ''
        const fontSize = parseInt(
            (await AsyncStorageService.getItem('fontSize')) || '0',
            10
        )
        const lineHeight = parseInt(
            (await AsyncStorageService.getItem('lineHeight')) || '0',
            10
        )
        const texSpacing = parseFloat(
            (await AsyncStorageService.getItem('texSpacing')) || '0'
        )
        const dyslexiaClickCount = parseInt(
            (await AsyncStorageService.getItem('dyslexiaClickCount')) || '0',
            10
        )
        const fontSizeClickCount = parseInt(
            (await AsyncStorageService.getItem('fontSizeClickCount')) || '0',
            10
        )
        const lineHeightClickCount = parseInt(
            (await AsyncStorageService.getItem('lineHeightClickCount')) || '0',
            10
        )
        const texSpacingClickCount = parseInt(
            (await AsyncStorageService.getItem('texSpacingClickCount')) || '0',
            10
        )

        const settings: AccessibilityState = {
            fontFamily,
            fontSize,
            lineHeight,
            texSpacing,
            clickCount: {
                dyslexiaFriendly: dyslexiaClickCount,
                fontSize: fontSizeClickCount,
                lineHeight: lineHeightClickCount,
                texSpacing: texSpacingClickCount,
            },
        }

        dispatch({ type: LOAD_ACCESSIBILITY_SETTINGS, payload: settings })
    } catch (error) {
        console.error('Error loading accessibility settings:', error)
    }
}
