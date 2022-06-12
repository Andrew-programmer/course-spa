import React, {useMemo, useState} from 'react';


import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import {getAuthors, getCourses, getFilterCourses, handlePress} from "../../../functions";
import {useSelector} from "react-redux";

export const SearchBar = ({sortState}) => {
    const [value, setCurrentValue] = useState('');
    const {sortCourses} = sortState;
    const courses = useSelector(state => getCourses(state));
    const authors = useSelector(state => getAuthors(state));

    const filteredPosts = useMemo(() => {
        return getFilterCourses(value, authors, courses);
    }, [value, courses]);

    const handleFilter = async () => {
        sortCourses(filteredPosts);
    };

    const onEnterDown = (e) => {
        handlePress(e.keyCode, handleFilter);
    };

    return (
        <div className={'search-bar-block'}>
            <Input onKeyPress={onEnterDown} className={'search-bar'}
                   onChange={event => setCurrentValue(event.target.value.toLowerCase())}
                   placeholdetText={'Enter course name...'}/>
            <Button secondClass={'search-button course-button'} innerText={'Search'} onClick={handleFilter} onKey/>
        </div>
    );
};
