import { useEffect, useState } from 'react'

export const useMarkerCalendarGeneral = ( markerCalendar ) => {
    const [dots, setDots] = useState({})
    useEffect(() => {
        if( !!markerCalendar ) {
            let markers = [];

            markerCalendar.forEach( marker => {
                if(!!marker.recurrence) {
                    const {duration, type, when} = JSON.parse(marker.recurrence)[0];
                    const currentDte = new Date();

                    if(type == 1 ){
                        let startDate = new Date();
                        let limitDate = new Date();
                        limitDate.setDate( currentDte.getDate() + 724 );

                        startDate = (currentDte > marker.date ) ? currentDte : new Date(marker.date);

                        if (limitDate > new Date(duration) ){
                            limitDate = new Date(duration);
                        }

                        do{
                            markers.push({
                                dots:[{...marker, startDate: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())}],
                                selected: true, 
                                selectedColor: '#F2F2F2',
                                date: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())
                            });
                            startDate.setDate(startDate.getDate() + 1);
                        }while(startDate <= limitDate);
                    } else if(type == 2) {
                        let startDate = new Date();
                        let limitDate = new Date();
                        limitDate.setDate( currentDte.getDate() + 724 );

                        startDate = (currentDte > marker.date ) ? currentDte : new Date(marker.date);

                        if (limitDate > new Date(duration) ){
                            limitDate = new Date(duration);
                        }

                        
                        do{
                            if(type == startDate.getDay()){
                                markers.push({
                                    dots:[{...marker, startDate: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())}],
                                    selected: true, 
                                    selectedColor: '#F2F2F2',
                                    date: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())
                                });
                            }
                            startDate.setDate(startDate.getDate() + 1);
                        }while(startDate <= limitDate);
                    } else if(type == 3) {
                        let startDate = new Date();
                        let limitDate = new Date();
                        limitDate.setDate( currentDte.getDate() + 724 );

                        startDate = (currentDte > marker.date ) ? currentDte : new Date(marker.date);

                        if (limitDate > new Date(duration) ){
                            limitDate = new Date(duration);
                        }

                        do{
                            if(startDate > currentDte){
                                markers.push({
                                    dots:[{...marker, startDate: startDate.getFullYear() + "-" + ((startDate.getMonth() < 10 ) ? "0" + startDate.getMonth() : startDate.getUTCMonth()) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())}],
                                    selected: true, 
                                    selectedColor: '#F2F2F2',
                                    date: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())
                                });
                            }
                            startDate = new Date((startDate.getMonth() != 12) ? startDate.getFullYear() : (startDate.getFullYear() + 1), (startDate.getMonth() != 12) ? (startDate.getMonth() + 1) : 1, startDate.getUTCDate())
                        }while(startDate <= limitDate);

                    } else if(type == 4){
                        let startDate = new Date();
                        let limitDate = new Date();
                        limitDate.setDate( currentDte.getDate() + 724 );

                        startDate = (currentDte > marker.date ) ? currentDte : new Date(marker.date);

                        if (limitDate > new Date(duration) ){
                            limitDate = new Date(duration);
                        }

                        do{
                            if(startDate > currentDte){
                                markers.push({
                                    dots:[{...marker, startDate: startDate.getFullYear() + "-" + ((startDate.getMonth() < 10 ) ? "0" + startDate.getMonth() : startDate.getUTCMonth()) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())}],
                                    selected: true, 
                                    selectedColor: '#F2F2F2',
                                    date: startDate.getFullYear() + "-" + (((startDate.getUTCMonth() + 1) < 10 ) ? "0" + (startDate.getUTCMonth() + 1) : (startDate.getUTCMonth() + 1)) + "-" + ((startDate.getUTCDate() < 10 ) ? "0" + startDate.getUTCDate() : startDate.getUTCDate())
                                });
                            }
                            startDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getUTCDate())
                        }while(startDate <= limitDate);

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
