import React from 'react';

import {CourseCardDescription} from "../CourseCardDescription/CourseCardDescription";
import {CourseCardInfo} from "../CourseCardInfo/CourseCardInfo";
import {Button} from "../../../common/Button/Button";

import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {PrivateRouter} from "../../../PrivateRouter/PrivateRouter";
import {fetchDeleteCourse} from "../../../../store/courses/thunk";
import {Link} from "react-router-dom";


export const CourseCard = ({titles, infos, description, title, courseId, ...props}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();


    return (
        <article className='course-card-block'>
            <CourseCardDescription title={title} description={description}/>
            <div className='course-card-info-container'>
                <CourseCardInfo titles={titles} infos={infos} separator={', '} {...props}/>
                <div className={'course-operations-block'}>
                    <Link to={`/courses/${courseId}`}>
                        <Button innerText={'Show course'}
                                secondClass={'show-course-button'}/>
                    </Link>
                    <PrivateRouter>
                        <Link to={`/courses/update/${courseId}`}>
                            <Button secondClass={'edit-button course-operation'}
                                    innerText={<img src={require('../../../../assets/pencil-fill.svg').default}
                                                    alt="Edit"/>}/>
                        </Link>
                        <Button onClick={() => dispatch(fetchDeleteCourse(courseId))} secondClass={'delete-button course-operation'}
                                innerText={<img src={require('../../../../assets/delete-bin-6-line.svg').default}
                                                alt="Delete"/>}/>
                    </PrivateRouter>
                </div>
            </div>
        </article>
    )

};