import React, {Fragment} from 'react';
import {Input} from "../../../common/Input/Input";

export const Title = ({onAddTitle, course, ...props}) => {

    return (
        <Fragment>
            <Input className={'enter-title-input search-bar'}
                   labelText={'Title'}
                   onChange={event => onAddTitle({...course, title: event.target.value})}
                   placeholdetText={'Enter title...'}
                   {...props}
            />
        </Fragment>
    );
};