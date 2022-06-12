import {formattedTime, formattedDate} from "./helpers/pipeDuration";

export const getAuthor = (authorsId, authors) => {
    let name;

    for (let author of authors) {
        if (author.id === authorsId) {
            name = author.name;
            return name;
        }
    }
};

export const getFilterCourses = (value, targetAuthors, target) => {
    if (value !== '') {
        return target.filter((course) => {
            let searchPlaces = [course.title, course.description, formattedDate(course.creationDate), formattedTime(course.duration).toString()];
            debugger
            for (let authorID of course.authors) {
                searchPlaces.push(getAuthor(authorID, targetAuthors));
            }
            searchPlaces = searchPlaces.map(place => place.toLowerCase());

            return searchPlaces.some(prop => prop.includes(value));
        });
    } else {
        return target;
    }
};

export const deleteAuthor = (authors, authorID) => {
    return authors.filter(author => author !== authorID);
};

export const makeArrayOfINames = (authors, IDs) => {
    let NamesArr = [];
    for (let author of authors) {
        if (IDs.includes(author.id)) {
            NamesArr.push(author.name);
        }
    }
    return NamesArr;
};

export const getIDArr = (obj, author) => {
    if (obj.includes(author)) {
        return deleteAuthor(obj, author);
    } else {
        return [...obj, author];
    }
};


export const checkFields = (obj, checkObj) => {
    debugger
    for (let key in obj) {
        if (obj[key] === checkObj[key] && key !== 'id') return false;
    }
    return true;
};

export const tail = (arr) => {
    return arr[arr.length - 1]
};

export const handlePress = (keyCode, fn) => {
    if (keyCode === 13) {
        fn();
    }
};

export const getAuthorsList = (course, authors) => {
    let authorsArray = [];
    for (let authorID of course.authors) {
        authorsArray.push(getAuthor(authorID, authors));
    }
    return authorsArray;
};

export const getCurrentCourse = (courses, courseId) => {
    for (let course of courses) {
        if (course.id === courseId) {
            return course;
        }
    }
};

export const getCourses = state => state.courses;

export const getUser = state => state.user;

export const getAuthors = state => state.authors;

export const checkParamsFields = (params, check) => {
    return params.some(param => param === check);
}