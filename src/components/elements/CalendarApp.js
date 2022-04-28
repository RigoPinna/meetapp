
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebase-config';
import { WrapperInfoCalendar } from '../Calendar/WrapperInfoCalendar';
import * as Progress from 'react-native-progress';
import { COLORS_APP } from '../ui/COLORS_APP';

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
            !!groups 
              ? <WrapperInfoCalendar groups={ groups } />
              : <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Progress.CircleSnail spinDuration={1000} color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
                </View>
          }

      </View>
  )
}
