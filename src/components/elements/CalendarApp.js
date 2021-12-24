
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebase-config';
import { WrapperInfoCalendar } from '../Calendar/WrapperInfoCalendar';

export const CalendarApp = () => {

  const userLoged = useSelector(state => state.authRed )
  const [ groups, setGroups ] = useState( undefined )
  
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
  
  return (
      <View style={{flex: 1}}>
          {
            !!groups && <WrapperInfoCalendar groups={ groups }/>
          }

      </View>
  )
}
