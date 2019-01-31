export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function addTodo(text) {
    return {
        type: SET_VISIBILITY_FILTER,
        page: text
    }
}