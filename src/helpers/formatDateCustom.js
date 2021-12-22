import moment from 'moment';

export const formatDateCustom = ( eventDate ) => {
    const dt = moment(eventDate, "YYYY-MM-DD");
    const date = new Date( dt)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear();

    const d = ( day < 10) ? `0${day}` : day;
    const m = ( month < 10) ? `0${month}` : month;
    const formatPeople = moment( dt ).format("dddd, MMMM Do YYYY");

    return {
        formatCalendar:`${year}-${m}-${d}`,
        formatPeople
    }
} 