import React, {useState} from 'react';

import {Input} from "../../../../../common/Input/Input";
import {Button} from "../../../../../common/Button/Button";
import {getAuthor, handlePress, tail} from "../../../../../functions";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddAuthor} from "../../../../../../store/authors/thunk";


export const AddAuthor = () => {
    const authors = useSelector(state => state.authors);
    const dispatch = useDispatch();

    const [author, setCurrentAuthor] = useState({
        name: ''
    });

    const handleClick = () => {
        debugger
        return !getAuthor(author.id, authors) ?
            dispatch(fetchAddAuthor(author)): undefined
    };

    const onEnterDown = (e) => {
        handlePress(e.keyCode, handleClick);
    };


    return (
        <div className={'author-section form-section'}>
            <h3 className={'author-section-header'}>Add author</h3>
            <Input className={'author-input search-bar'}
                   placeholdetText={'Enter author name...'}
                   onKeyPress={onEnterDown}
                   onChange={(event) => setCurrentAuthor({
                       ...author,
                       name: event.target.value
                   })}
                   labelText={'Author name'}
            />
            <Button secondClass={'create-author-button form-button'} onClick={handleClick}
                    innerText={'Create author'}
            />
        </div>
    )
};