import { IS_EMOJI_MODAL_SHOW } from '../actions/commonActions'
import { IsModalShowAction, IsModalShowState } from '../types/commonTypes'

const initialState: IsModalShowState = {
    isEmojiModal: true,
}

export const emojiReducer = (
    state = initialState,
    action: IsModalShowAction
) => {
    switch (action.type) {
        case IS_EMOJI_MODAL_SHOW:
            return { ...state, isEmojiModal: action.payload }
        default:
            return state
    }
}
