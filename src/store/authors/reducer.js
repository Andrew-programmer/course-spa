const defaultState = [];

export const AuthorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD':
            return [...state, ...action.payload]
        case 'ADD_AUTHOR':
            return [...state, action.payload]
        case 'DELETE_AUTHOR':
            return state.filter(author => author.id !== action.payload.id)
        case 'CLEAR_ALL':
            return defaultState
        default:
            return state
    }
};