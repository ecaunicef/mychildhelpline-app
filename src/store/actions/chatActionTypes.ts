export const SET_CHAT_LIST = 'SET_CHAT_LIST'
export const ADD_CHAT = 'ADD_CHAT'
export const RESET_CHAT = 'RESET_CHAT'

export interface SetChatListAction {
    type: typeof SET_CHAT_LIST
    payload: string[]
}

export interface AddChatAction {
    type: typeof ADD_CHAT
    payload: string
}

export interface ResetChatAction {
    type: typeof RESET_CHAT
}

export interface ChatState {
    chatList: string[]
}

export type ChatActionTypes =
    | SetChatListAction
    | AddChatAction
    | ResetChatAction
