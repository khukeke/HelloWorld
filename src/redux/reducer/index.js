
import {addTodo, SET_VISIBILITY_FILTER} from '../action';

const initialState = {
    page: 0
}

export default function todoApp(state=initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log('action')
            console.log(action)
            return {
                ...state,
                page: action.page
            }

        default: return state
    }
}