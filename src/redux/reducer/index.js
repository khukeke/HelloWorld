


const initialState = {
    page: 0
}

export default function todoApp(state=initialState, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                page: action.page
            }

        default: return state
    }
}