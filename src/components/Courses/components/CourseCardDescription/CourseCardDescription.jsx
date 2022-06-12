import React from 'react';

export const CourseCardDescription = ({title, description}) => (
    <div className='course-card-description'>
        <h1 className='course-card-title'>{title}</h1>
        <p className='course-card-description-text'>{description}</p>
    </div>
);