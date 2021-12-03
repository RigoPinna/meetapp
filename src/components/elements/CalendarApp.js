
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import {Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebase-config';
import { WrapperInfoCalendar } from '../Calendar/WrapperInfoCalendar';



export const CalendarApp = () => {

  const userLoged = useSelector(state => state.authRed )
  const [ groups, setGroups ] = useState( undefined )
  const date = new Date()
  useEffect( () => {
    if( userLoged.uid !== null ) {
        db.collection('groups').orderBy('createdat', 'desc').onSnapshot( querySnapshot => {
            let allGroups = querySnapshot.docs.map( doc => {
                const { image, name, creator, participants } = doc.data();
                const gid = doc.id;
                const prs = JSON.parse( participants );
                const isSuscribed =  prs.some( pr => pr.uid === userLoged.uid )
                return isSuscribed && { gid, image, name, creator }
            })
            setGroups( allGroups )
        })
    }

}, [ userLoged.uid ])
  const RANGE = 24;
  const onDayPress = day => {
    setSelected(day.dateString);
  };
  const vacation = {key: 'vacation', color: 'red'};
  const massage = {key: 'massage', color: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  return (
      <View style={{flex: 1}}>
          <Calendar
            current={date}
            pastScrollRange={RANGE}
            futureScrollRange={RANGE}
            onDayPress={onDayPress}
            markingType={'multi-dot'}
            markedDates={{
              '2021-12-01': {dots: [vacation, massage, workout], selected: true, selectedColor: '#F2F2F2' },
              '2021-12-02': {dots: [massage, workout], selected: true, selectedColor: '#F2F2F2' }
            }}
            theme={{
              selectedDayTextColor: '#A1A1A1'
            }}
          />
          {
            !!groups && <WrapperInfoCalendar groups={ groups }/>
          }

      </View>
  )
}
