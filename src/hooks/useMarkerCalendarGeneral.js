import { useEffect, useState } from 'react'

export const useMarkerCalendarGeneral = ( markerCalendar ) => {
    const [dots, setDots] = useState({})
    useEffect(() => {
        if( !!markerCalendar ) {
            // console.log('markerCalendar', markerCalendar);
            // console.log('\n-----------------------------');
            
            let markers = [];
            
            markerCalendar.forEach( marker => {
                if(!!marker.recursive) {
                    const recursive = marker.recursive;
                    const currentDte = new Date();
                    if(recursive == 1){
                        let startDate = new Date();
                        let limitDate = new Date();
                        limitDate.setDate(currentDte.getDate() + 150);

                        if(currentDte >= marker.date){
                            startDate = currentDte;
                        } else {
                            startDate = new Date(marker.date); 
                        }


                        do{
                            // console.log(startDate);
                            // console.log(startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate()));
                            markers.push({
                                dots:[{...marker, startDate: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())}],
                                selected: true, 
                                selectedColor: '#F2F2F2',
                                date: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())
                            });
                            startDate.setDate(startDate.getDate() + 1);
                        }while(startDate < limitDate);
                    }
                    
                } else {
                    markers.push({
                        dots:[marker],
                        selected: true, 
                        selectedColor: '#F2F2F2',
                        date: marker.date
                    });
                }
            } );

            console.log('markers', markers);
            console.log('\n-----------------------------');

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
            // console.log('obDots', obDots);
            // console.log('\n-----------------------------');
            setDots(obDots)

        }
    }, [ markerCalendar ])

    return dots
    
}
