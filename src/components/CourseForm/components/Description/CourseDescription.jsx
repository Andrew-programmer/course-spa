import React from 'react';
import {Description} from "../../../common/Description/Description";

export const CourseDescription = ({labelText, placeholdetText, className, onAddDescription, course, ...props}) => {

    return (
        <Description
            className={className}
            placeholdetText={placeholdetText}
            labelText={labelText}
            onChange={(event) => onAddDescription({...course, description: event.target.value})}
            {...props}
        />
    );
};