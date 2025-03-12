import {
    ADD_CHAT,
    AddChatAction,
    RESET_CHAT,
    ResetChatAction,
    SET_CHAT_LIST,
    SetChatListAction,
} from '../actions/chatActionTypes'

export const setChatList = (chatList: string[]): SetChatListAction => ({
    type: SET_CHAT_LIST,
    payload: chatList,
})

export const addChat = (chat: string): AddChatAction => ({
    type: ADD_CHAT,
    payload: chat,
})

export const resetChat = (): ResetChatAction => ({
    type: RESET_CHAT,
})
