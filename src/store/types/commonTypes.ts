import {
    DECREASE_FONT_SIZE,
    DYSLEXIA_FRIENDLY,
    HIDE_LOADING,
    INCREASE_FONT_SIZE,
    IS_EMOJI_MODAL_SHOW,
    LINE_HEIGHT,
    LOAD_ACCESSIBILITY_SETTINGS,
    LOCATION__ADD,
    SHOW_LOADING,
    TEXT_SPACING,
} from '../actions/commonActions'

export interface LocationState {
    latitude: string | number
    longitude: string | number
    countryData: {
        country_code: string
        country_name: string
        district_code: string
        district_name: string
    }
}
export interface LocationAction {
    type: typeof LOCATION__ADD
    payload: LocationState
}

export interface IsModalShowState {
    isEmojiModal: boolean
}
export interface IsModalShowAction {
    type: typeof IS_EMOJI_MODAL_SHOW
    payload: boolean
}
export interface LoadingState {
    isLoading: boolean
}
export interface ShowLoadingAction {
    type: typeof SHOW_LOADING
}

export interface HideLoadingAction {
    type: typeof HIDE_LOADING
}

export type LanguageState = {
    language: string
}

export type LoadingActionTypes = ShowLoadingAction | HideLoadingAction

// commonTypes.ts
export type AccessibilityState = {
    fontFamily: string | any
    fontSize: number
    lineHeight: number
    texSpacing: number
    clickCount: {
        fontSize: number
        lineHeight: number
        texSpacing: number
        dyslexiaFriendly: number
    }
}

interface LoadAccessibilitySettingsAction {
    type: typeof LOAD_ACCESSIBILITY_SETTINGS
    payload: AccessibilityState
}

export type AccessibilityActionType =
    | { type: typeof DYSLEXIA_FRIENDLY }
    | { type: typeof INCREASE_FONT_SIZE }
    | { type: typeof DECREASE_FONT_SIZE }
    | { type: typeof LINE_HEIGHT }
    | { type: typeof TEXT_SPACING }
    | LoadAccessibilitySettingsAction
