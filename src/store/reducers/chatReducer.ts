import {
    ADD_CHAT,
    ChatActionTypes,
    ChatState,
    RESET_CHAT,
    SET_CHAT_LIST,
} from '../actions/chatActionTypes'

const initialState: ChatState = {
    chatList: [],
}

const chatReducer = (
    state = initialState,
    action: ChatActionTypes
): ChatState => {
    switch (action.type) {
        case SET_CHAT_LIST:
            return {
                ...state,
                chatList: action.payload,
            }
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, action.payload],
            }
        case RESET_CHAT:
            return {
                ...state,
                chatList: [],
            }
        default:
            return state
    }
}

export default chatReducer
