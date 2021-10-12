import moment from "moment-timezone";

const DATE_UNITS =[
    ['years',31536000000],
    ['months', 2628000000 ],
    ['days', 86400],
    ['hours', 3600],
    ['minutes', 60],
    ['seconds', 1],
]
const getTimeDiff = ( time ) => {
    const now = Date.now();
    const elapsed =  ( now - time ) / 1000 ;
    for( const [ unit, secondsUnit ] of DATE_UNITS) {
        if ( Math.abs(elapsed) > secondsUnit || unit === 'second') {
            return { 
                value: Math.round( elapsed / secondsUnit),
                unit,
            }
        } else if (Math.abs(elapsed) < 1) {
            return {
                value: -1,
                unit: 'seconds'
            }
        }
    }
}

export const useTimeAgo = ( time ) => {
    const { unit } = getTimeDiff( time );
    const date = moment( time );
    return `${moment().diff( date, unit )} ago ${ unit }`;
    
}
