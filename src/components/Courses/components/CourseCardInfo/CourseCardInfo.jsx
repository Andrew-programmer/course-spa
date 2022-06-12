import React from 'react';

import {CourseCardInfoListLi} from "./CourseCardInfoListLi";
import {useSelector} from "react-redux";
import {getAuthors, getAuthorsList} from "../../../functions";

export const CourseCardInfo = ({titles, infos, separator, course}) => {
    const authors = useSelector(state => getAuthors(state));
    const authorsArray = getAuthorsList(course, authors);
    return (<div className='course-card-info'>
        <ul className='course-card-info-list'>
            {
                titles.map((title, index) => (
                    <CourseCardInfoListLi
                        key={index}
                        title={title}
                        info={title === 'Authors' ? authorsArray.join(separator) : infos[index]}
                    />
                ))
            }
        </ul>
    </div>)
};