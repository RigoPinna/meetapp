import React from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { EmptyList } from './EmptyList'
import { ItemListGroup } from './ItemListGroup'
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
const imgG = 'http://www.99naturewallpapers.com/admin/assets/images/wallpapers/1366/nepal--himalayas_1366x768.png'
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
export const ListGroup = ({ navigation }) => {
    const [groups, setGroups] = useState( groupsExamples );
    return (
        <>
            {
                ( groups.length > 0 ) 
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
                    : <EmptyList />
            }
        </>
    )
}
