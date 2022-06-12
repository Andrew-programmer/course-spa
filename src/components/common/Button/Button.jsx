import React from 'react';

export const Button = ({innerText, onClick, secondClass}) => <button type={'button'} onClick={onClick} className={'log-button ' + secondClass}>{innerText}</button>;