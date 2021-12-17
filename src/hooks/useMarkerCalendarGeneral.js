import { useEffect, useState } from 'react'

export const useMarkerCalendarGeneral = ( markerCalendar ) => {
    const [dots, setDots] = useState({})
    useEffect(() => {
        if( !!markerCalendar ) {
            const markers = markerCalendar.map( (marker) => {
                return {
                        dots:[marker],
                        selected: true, 
                        selectedColor: '#F2F2F2',
                        date: marker.date
                }
            });
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
