import React from 'react';

export const CourseCardInfoListLi = ({title, info}) => {
    let secondClass = title === 'Authors' ? 'author-punkt': '';

    return (
    <li className={'course-card-info-punkt ' + secondClass}>
        <span className='punkt-title'>{title}: </span>
        <span className={'punkt-info ' + secondClass}>{info}</span>
    </li>
    )
};