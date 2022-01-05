import moment from 'moment';

export const formatDateCustom = ( eventDate ) => {
    const dt = moment(eventDate, "YYYY-MM-DD");
    const dateNow = new Date()
    const date = new Date( dt )
    const formatPeople = moment( dt ).format("dddd, MMMM Do YYYY");

    return {
        formatCalendar:formateDate( date ),
        formatPeople,
        dateNowForated:formateDate( dateNow )
    }
}
function formateDate( date ) {

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear();
    const d = ( day < 10) ? `0${day}` : day;
    const m = ( month < 10) ? `0${month}` : month;

    return `${year}-${m}-${d}`

} 
export const isAfterTwoDay = ( date ) => {

    const dateBeforTowDays = moment( date ).add(2, 'days').format();
    const dateNow = moment().format()
    return moment( date ).isBetween( dateNow, dateBeforTowDays)

}