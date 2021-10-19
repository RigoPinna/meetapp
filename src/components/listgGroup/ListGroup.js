import React, { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { db } from '../../firebase/firebase-config'
import { EmptyList } from './EmptyList'
import { ItemListGroup } from './ItemListGroup'
import { COLORS_APP } from '../ui/COLORS_APP'
import * as Progress from 'react-native-progress';
import {useSelector } from 'react-redux'

const STATE_GROUPS_LOADING = {
    loading:undefined,
    empty: [],
}
export const ListGroup = ({ navigation }) => {
    const [ groups, setGroups ] = useState( STATE_GROUPS_LOADING.loading );
    const userLoged = useSelector(state => state.authRed )
    useEffect(() => {
        if( userLoged.uid !== null ) {
            db.collection('groups').onSnapshot( querySnapshot => {
                let groups = querySnapshot.docs.map( doc => {
                    const data = doc.data();
                    const gid = doc.id;
                    const createdat =  data.createdat.toDate();
                    //Se hace el parse porque en la BD los participantes estan guardados como un **string**
                    const participants = JSON.parse( data.participants );
                    const isSuscribed = participants.some( pr => pr.uid === userLoged.uid )
                    //Si el usuario no esta suscrito, se retornará un false
                    return isSuscribed && { gid, ...data, participants, createdat }
                })
                //Se limpia el array de valores false y se establece como state
                setGroups( groups.filter( group => group !== false ) )
            })
        } 
    }, [ userLoged.uid ])
    return (
        <>
            {
                (groups === STATE_GROUPS_LOADING.loading ) 
                    ? <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Progress.CircleSnail spinDuration={1000} color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
                </View>
                    : ( groups?.length > 0 ) 
                        ? <ScrollView>
                            {
                                groups.map( ({ gid, name,image,createdat,participants, description }) =>{
                                    return ( 
                                        !!gid 
                                            ? <ItemListGroup
                                            key = { gid } 
                                            id={gid}
                                            image = { image } 
                                            name = { name } 
                                            createdat = {createdat} 
                                            participants = { participants }
                                            description = { description}
                                            navigation = { navigation }
                                        /> 
                                        :<></>
                                        )
                                
                                })
                            }
                        </ScrollView>
                    :   <EmptyList />
            }
        </>
    )
}
