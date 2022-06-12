const defaultValue = {
    isAuth: false,
    name: '',
    email: '',
    token: '',
    role: ''
}


export const UserReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case 'LOGIN':
            return  {...state, ...action.payload}
        case 'LOGOUT':
            return defaultValue
        default:
            return state
    }
};