import React, { useEffect, useState } from 'react'
import { ScrollView, View} from 'react-native'
import { Textapp } from '../elements/Textapp'

export const RecurrenceInfo = ({recurrence}) => {

    const getFormatedDate = (date) => {
        let month = ''

        switch ( date.getMonth() ) {
            case 0:
                month = 'Jan'
                break;
            case 1:
                month = 'Feb'
                break;
            case 2:
                month = 'Mar'
                break;
            case 3:
                month = 'Apr'
                break;
            case 4:
                month = 'May'
                break;
            case 5:
                month = 'Jun'
                break;
            case 6:
                month = 'Jul'
                break;
            case 7:
                month = 'Aug'
                break;
            case 8:
                month = 'Sep'
                break;
            case 9:
                month = 'Oct'
                break;
            case 10:
                month = 'Nov'
                break;
            case 11:
                month = 'Dec'
                break;
        }

        return `${month} ${date.getUTCDate()}, ${date.getFullYear()}`
    }

    const oneTimeEvent = () => {
        const startDate = new Date(recurrence.startDate);
        let start = getFormatedDate(startDate)
        let end = ''
        
        if(recurrence.duration != undefined){
            if(recurrence.duration == ''){
                end = '- always'
            } else {
                const endDate = new Date(recurrence.duration);
                end = `- ${getFormatedDate(endDate)}`
            }
        }
        
        return (<View style={{display: 'flex', flexDirection: 'column', height: '93%', width: '100%', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Textapp 
                    size = { 16 } 
                    text ={`${start} ${end}`} 
                    styles={{width:'75%', paddingLeft: 10, fontWeight: 'bold'}} 
                />
                <Textapp 
                    size = { 16 } 
                    text ={`${recurrence.startTime}`} 
                    styles={{width:'25%', fontWeight: 'bold', textAlign: 'right', paddingRight: 10}} 
                />
            </View>
            <View style={{backgroundColor: '#676568', height: '.8%', width: '95%', marginTop: 5}}></View>
            <Textapp 
                    size = { 16 } 
                    text ={recurrence.description} 
                    styles={{paddingLeft: 10, paddingTop: 5, paddingRight: 10, textAlign: 'justify', paddingBottom: 20, width: '100%'}} 
                />
        </View>)
    }

    const recurrentEvent = () => {
        let eventCard = []

        let currentDte = new Date();

        let startDate = new Date(recurrence.startDate);
        startDate = (startDate <= currentDte) ? currentDte : startDate;

        let limitDate = new Date(recurrence.duration);
        limitDate.setDate(limitDate.getDate() + 1);
        if(recurrence.duration == 0){
            limitDate = new Date(2060, 12, 31);
        }

        let add = false
        const type = recurrence.type
        const when = recurrence.when

        do{
            switch (type) {
                case 1:
                    add = true
                    break;
                case 2:
                    if (when.includes(startDate.getDay())) {
                        add = true
                    }
                    break;
                case 3:
                    if(startDate.getUTCDate() == when){
                        add = true
                    }
                    break;
                case 4:
                    const whenDate = new Date(when);
                    if((startDate.getUTCDate() == whenDate.getUTCDate()) && (startDate.getUTCMonth() == whenDate.getUTCMonth())){
                        add = true
                    }
                    break;
                default:
                    add = false
                    break;
            }

            if (add) {
                eventCard.push(
                    <View key={`${eventCard.length}`} style={{alignItems: 'center', width: '100%', marginBottom: 8}}>
                        <View style={{width: 110, backgroundColor: (eventCard.length == 0) ? '#A9F1DF' : '#A2DBFA', borderRadius: 10, borderColor: (eventCard.length == 0) ? '#1FAE98' : '#A2DBFA', borderWidth: (eventCard.length == 0) ? 1 : 0}}>
                            {(eventCard.length == 0) &&  <Textapp 
                                size = { 12 } 
                                text ={'Next meeting'} 
                                styles={{width:'95%', paddingTop: 5, paddingLeft: 10, textAlign: 'justify', color: '#005C4E', fontWeight: 'bold'}} 
                            />}
                            <Textapp 
                                size = { 13 } 
                                text ={`${getFormatedDate(startDate)}`} 
                                styles={{width:'95%', paddingTop: (eventCard.length == 0) ? 1 : 5, paddingLeft: 10, color: (eventCard.length == 0) ? '#005C4E' : '#0062FF'}} 
                            />
                            <Textapp 
                                size = { 13 } 
                                text ={`At ${recurrence.startTime}`} 
                                styles={{width:'95%', paddingTop: 1, paddingLeft: 10, color: (eventCard.length == 0) ? '#005C4E' : '#0062FF', paddingBottom: 5}} 
                            />
                        </View>
                    </View>
                )
                add = false
            }

            startDate.setDate(startDate.getDate() + 1);
        }while((startDate < limitDate) && eventCard.length < 5);
        
        let end = ''

        if(recurrence.duration != undefined){
            if(recurrence.duration == ''){
                end = 'This event has not an end date'
            } else {
                const endDate = new Date(recurrence.duration);
                end = `This event ends ${getFormatedDate(endDate)}`
            }
        }

        return (
            <>
                <View style={{width: '64%', height: '98%'}}>
                    <Textapp 
                        size = { 16 } 
                        text ={recurrence.description} 
                        styles={{height: '90%', width:'95%', paddingLeft: 10, paddingTop: 5, textAlign: 'justify'}} 
                    />
                    <Textapp 
                        size = { 13 } 
                        text ={`${end}`} 
                        styles={{height: '10%', width:'95%', paddingLeft: 10, fontWeight: 'bold'}} 
                    />
                </View>
                <View style={{backgroundColor: '#676568', width: '.5%', height: '90%'}}>
                    
                </View>
                <View style={{width: '35%', alignItems: 'center'}}>
                    <ScrollView style={{flex:1, marginTop:0, paddingTop:10, paddingBottom: 10, width: '95%'}}>
                        {eventCard}
                    </ScrollView>
                </View>
            </>
        )
    }

    return (
        <View style={{backgroundColor: '#E8F0F2', width: '95%', maxHeight: 250, borderRadius: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {(recurrence.type == 0 || recurrence.type == 1) ? oneTimeEvent() : recurrentEvent()}
            </View>
        </View>
    )
}
