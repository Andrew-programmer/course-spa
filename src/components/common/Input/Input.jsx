import React from 'react';

export const Input = ({labelText, placeholdetText, className, onChange, onKeyPress, ...props}) => {


    return (
        <label>
            {labelText}
            <br/>
            <input onKeyDown={onKeyPress} placeholder={placeholdetText} onChange={onChange} className={className} {...props}/>
        </label>
    )
};