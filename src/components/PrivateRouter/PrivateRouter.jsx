import React from 'react';
import {useSelector} from "react-redux";
import {getUser} from "../functions";
import {useNavigate} from "react-router";

export const PrivateRouter = ({children}) => {
    const user = useSelector(state => getUser(state));
    const navigate = useNavigate();

    if (user.role !== 'admin') {
        return;
    } else{
        return (
            children
        );
    }
};
