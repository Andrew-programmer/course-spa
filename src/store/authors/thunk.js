import {addAuthor, loadAuthors} from "../../services";
import {createAuthorAction} from "./actionCreators";
import {ADD_AUTHOR, LOAD_AUTHORS} from "./actionTypes";

export const fetchAuthors = () => {
    return async dispatch => {
        loadAuthors(dispatch, createAuthorAction, LOAD_AUTHORS);
    };
};

export const fetchAddAuthor = (author) => {
    return async dispatch => {
        const data = await addAuthor(author);
        debugger
        dispatch(createAuthorAction(ADD_AUTHOR, data))
    };
};