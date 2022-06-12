import React, {Fragment, useState} from 'react';

import {Button} from "../../../../../common/Button/Button";
import {CourseAuthors} from "../CourseAuthors/CourseAuthors";
import {getIDArr, makeArrayOfINames} from "../../../../../functions";
import {useSelector} from "react-redux";

export const AuthorsList = ({addInfo, course}) => {
    const authors = useSelector(state => state.authors);
    const [innerText] = useState('Add author');

    return (
        <Fragment>
            <div className={'authors-list-container form-section'}>
                <h3 className={'authors-list-header'}>Authors</h3>
                <ul className={'authors-list'} data-testid={'authors-list'}>
                    {
                        authors.map((author, index)=> {
                            return (
                                <li className={'add-author-li'} key={author.id}>
                                    <span className={'author'}>{author.name}</span>
                                    <Button onClick={() => addInfo({
                                        ...course, authors: getIDArr(course.authors, author.id)
                                    })}
                                            innerText={innerText}
                                            secondClass={'add-author-button form-button'}
                                            key={author.id}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <CourseAuthors authorsList={makeArrayOfINames(authors, course.authors)}/>
        </Fragment>
    )
};