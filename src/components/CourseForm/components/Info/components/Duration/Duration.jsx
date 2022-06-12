import React from 'react';
import {Input} from "../../../../../common/Input/Input";
import {formattedTime} from "../../../../../helpers/pipeDuration";

export const Duration = ({course, addInfo}) => {
    return (
        <div className={'duration-block form-section'}>
            <h3 className={'duration-section-header'}>Duration</h3>
            <Input placeholdetText={'Enter duration in minutes...'}
                   labelText={'Duration'}
                   className={'course-duration search-bar'}
                   onChange={event => {
                       addInfo(isNaN(+event.target.value) ?
                           {...course} :
                           {...course, duration: +event.target.value});
                   }}
                   value={course.duration}
            />
            <span className={'current-duration'}>Duration: <span
                className={'time'}>{formattedTime(isNaN(course.duration) ? 0 : course.duration)}</span></span>
        </div>
    );
};