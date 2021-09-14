import React, { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { db } from '../../firebase/firebase-config'
import { EmptyList } from './EmptyList'
import { ItemListGroup } from './ItemListGroup'
import { COLORS_APP } from '../ui/COLORS_APP'
import * as Progress from 'react-native-progress';
const participants = [
    {
        uid:1,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
        name: 'Ralph Edwards',
        phone: '(480) 555-0103'
    },
    {
        uid:2,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
        name: 'Brooklyn Simmons',
        phone: '(406) 555-0120'
    },
    {
        uid:3,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
        name: 'Savannah Nguyen',
        phone: '(671) 555-0110'
    },
    {
        uid:4,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
        name: 'Jenny Wilson',
        phone: '(505) 555-0125'
    },
]
const imgG = 'https://images.unsplash.com/photo-1628394457621-b60ba83ebfed?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
const groupsExamples = [
    {
        gid:'sdvsafsdgd241erwf',
        image:imgG,
        name:'Group 1',
        createdat:'18.08.2021',
        participants: participants,
        description:'Descripcion del grupo'
    },
    {
        gid:'fdhgsdwfdfwrge1231',
        image:imgG,
        name:'Group 2',
        createdat:'18.08.2021',
        participants: participants,
        description:'Descripcion del grupo'
    },
    {
        gid:'hkyjkfdbfvsryhrtge46456uhrtdg',
        image:imgG,
        name:'Group 3',
        createdat:'18.08.2021',
        participants: participants,
        description:'Descripcion del grupo'
    },
    {
        gid:'dhrgsefdtth456756865ytfesadwertjhrgw434',
        image:imgG,
        name:'Group 4',
        createdat:'18.08.2021',
        participants: participants,
        description:'Descripcion del grupo'
    },
]
const STATE_GROUPS_LOADING = {
    loading:undefined,
    empty: [],
}
export const ListGroup = ({ navigation }) => {
    const [ groups, setGroups ] = useState( STATE_GROUPS_LOADING.loading );
    useEffect(() => {
        db.collection('groups').onSnapshot( querySnapshot => {
            const groups = querySnapshot.docs.map( doc => {
                const data = doc.data();
                const gid = doc.id;
                return { gid, ...data }

            })
            setGroups( groups )
        })
    }, [])
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
                                    return(
                                        <ItemListGroup
                                            key = { gid } 
                                            image = { image } 
                                            name = { name } 
                                            createdat = {createdat} 
                                            participants = { participants }
                                            description = { description}
                                            navigation = { navigation }
                                        />
                                    )
                                
                                })
                            }
                        </ScrollView>
                    :   <EmptyList />
            }
        </>
    )
}
