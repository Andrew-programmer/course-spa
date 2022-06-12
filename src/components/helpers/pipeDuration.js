export const pipeDuration = (format, separator = null) => (date) => {
    let isTime = typeof date === 'number';
    let time = date;
    if (isTime) {
        let hours = 0;
        let minutes = 0;
        for (; time >= 60; hours++) {
            time -= 60;
        }
        minutes = time;
        return format.replace('hh', () => hours < 10 ? '0' + hours : hours)
            .replace('mm', () => minutes < 10 ? '0' + minutes : minutes) + ' hours';
    } else {
        return time.replaceAll(format, separator);
    }
};

export const formattedTime = pipeDuration('hh:mm');
export const formattedDate = pipeDuration('/', '.');




