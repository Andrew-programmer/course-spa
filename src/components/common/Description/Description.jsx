import React from 'react';

export const Description = ({labelText, placeholdetText, ...props}) => {

    return (
        <label>
            {labelText}
            <br/>
            <textarea name="#"
                      cols="30"
                      rows="10"
                      placeholder={placeholdetText}
                      {...props}
            >
                </textarea>
        </label>
    );
};