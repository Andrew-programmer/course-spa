import React from 'react';

import {AddAuthor} from "./components/AddAuthor/AddAuthor";
import {AuthorsList} from "./components/AuthorsList/AuthorsList";
import {Duration} from "./components/Duration/Duration";

export const Info = (props) => {
    return (
        <form action="#" className={'create-course-form'}>
            <AddAuthor {...props}/>
            <AuthorsList course={props.course} addInfo={props.onAddInfo} {...props}/>
            <Duration course={props.course} addInfo={props.onAddInfo}/>
        </form>
    );
};