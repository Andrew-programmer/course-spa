const defaultState = [];

export const CourseReducer = (state = defaultState, action) => {
    let copy, newState;
        switch (action.type) {
            case 'LOAD_COURSES':
                return [...state, ...action.payload];
            case 'ADD_COURSE':
                return [...state, action.payload]
            case 'GET_COURSES':
                return state
            case 'DELETE_COURSE':
                newState = state.filter(course => course.id !== action.payload);
                return newState;
            case 'CLEAR_ALL':
                return defaultState
            case 'UPDATE':
                newState = state.filter(course => course.id !== action.payload.id);
                return [...newState, action.payload]

            default:
                return state
        }
};