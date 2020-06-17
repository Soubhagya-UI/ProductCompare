import {
    CHECK_BOX_CLICKED
} from './selectTypes'

const initialState = {
    isChecked:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_BOX_CLICKED:
            return {
                ...state,
                isChecked : !state.isChecked
            }

        default: return state
    }
}

export default reducer
