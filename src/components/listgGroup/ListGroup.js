import React from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { EmptyList } from './EmptyList'
import { ItemListGroup } from './ItemListGroup'
const participants = [
    {
        uid:1,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
    },
    {
        uid:2,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
    },
    {
        uid:3,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
    },
    {
        uid:4,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
    },
    {
        uid:5,
        image:'https://comunidav.org/php/api/Images/avatar.jpg',
    }
]
const imgG = 'http://www.99naturewallpapers.com/admin/assets/images/wallpapers/1366/nepal--himalayas_1366x768.png'
const groupsExamples = [
    {
        gid:'sdvsafsdgd241erwf',
        image:imgG,
        name:'Group 1',
        createdat:'18.08.2021',
        participants: participants
    },
    {
        gid:'fdhgsdwfdfwrge1231',
        image:imgG,
        name:'Group 2',
        createdat:'18.08.2021',
        participants: participants
    },
    {
        gid:'hkyjkfdbfvsryhrtge46456uhrtdg',
        image:imgG,
        name:'Group 3',
        createdat:'18.08.2021',
        participants: participants
    },
    {
        gid:'dhrgsefdtth456756865ytfesadwertjhrgw434',
        image:imgG,
        name:'Group 4',
        createdat:'18.08.2021',
        participants: participants
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
                                groups.map( ({ gid, name,image,createdat,participants }) =>{
                                    return(
                                        <ItemListGroup
                                            key = { gid } 
                                            imageGroup = { image } 
                                            nameGroup = { name } 
                                            createdat = {createdat} 
                                            participants = { participants }
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
