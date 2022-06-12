import {applyMiddleware, createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
const {combineReducers} = require("redux");
const {UserReducer} = require("./user/reducer");
const {CourseReducer} = require("./courses/reducer");
const {AuthorReducer} = require("./authors/reducer");

export const rootReducer = combineReducers({
    user: UserReducer,
    courses: CourseReducer,
    authors: AuthorReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));