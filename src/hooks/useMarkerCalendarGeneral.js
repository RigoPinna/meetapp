import { useEffect, useState } from 'react'

export const useMarkerCalendarGeneral = ( markerCalendar ) => {
    const [dots, setDots] = useState({})

    const getMarker = (marker, currentDte) =>{
        const year = currentDte.getFullYear() 
        const mont = currentDte.getUTCMonth() + 1
        const day = currentDte.getUTCDate()
        const m = (mont < 10) ? `0${mont}` : mont
        const d = (day < 10) ? `0${day}` : day

        return {
            dots:[{...marker, startDate: `${year}-${m}-${d}`}],
            selected: true, 
            selectedColor: '#F2F2F2',
            date: `${year}-${m}-${d}`
        };
    }
    
    useEffect(() => {
        if( !!markerCalendar ) {
            let markers = [];
            let currentDte = new Date();
            let startDate = new Date();
            let limitDate = new Date();

            limitDate.setDate(limitDate.getDate() + 750);

            markerCalendar.forEach( marker => {
                if(!(!!marker.recurrence)){
                    markers.push({
                        dots:[marker],
                        selected: true, 
                        selectedColor: '#F2F2F2',
                        date: marker.date
                    });
                }
            });

            do{
                markerCalendar.forEach( marker => {
                    if(!!marker.recurrence){
                        const {duration, type, when} = JSON.parse(marker.recurrence)[0];

                        let limitEventDate = new Date(duration);
                        limitEventDate.setDate(limitEventDate.getDate() + 1);
                        startDate = (currentDte >= new Date(marker.date) ? currentDte : new Date(marker.date));

                        if(currentDte >= startDate && currentDte < limitEventDate){
                            switch (type) {
                                case 1:
                                    markers.push(getMarker(marker, currentDte));
                                    break;
                                case 2:
                                    if (when.includes(currentDte.getDay())) {
                                        markers.push(getMarker(marker, currentDte));
                                    }
                                    break;
                                case 3:
                                    if(currentDte.getUTCDate() == when){
                                        markers.push(getMarker(marker, currentDte));
                                    }
                                    break;
                                case 4:
                                    const whenDate = new Date(when);
                                    if((currentDte.getUTCDate() == whenDate.getUTCDate()) && (currentDte.getUTCMonth() == whenDate.getUTCMonth())){
                                        markers.push(getMarker(marker, currentDte));
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
                currentDte.setDate(currentDte.getDate() + 1);
            }while(currentDte < limitDate);

            let obDots = {}
            markers.forEach( marker => {
                const { date } = marker;
                if ( !!obDots[date] ) {
                    const { dots } = obDots[date]
                    const existKey = dots.some( dot => dot.key=== marker.dots[0].key )
                    if( !existKey ) {
                        const newDots = [...dots, ...marker.dots]
                        const updateMarker = {...obDots[date], dots: newDots}
                        obDots[date]= { ...updateMarker}
                    }
                } else {
                    obDots[date] =  { ...obDots[date],...marker} 
                }

            })
            
            setDots(obDots)

        }
    }, [ markerCalendar ])

    return dots
    
}
