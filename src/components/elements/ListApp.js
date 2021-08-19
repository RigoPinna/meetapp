import React from 'react'
import { useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Textapp } from './Textapp'

export const ListApp = () => {
    const [groups,setGroups] = useState([
        {key: '1', name: 'Event 1', img: ''},
        {key: '2', name: 'Event 2', img: ''},
        {key: '3', name: 'Event 3', img: ''},
        {key: '4', name: 'Event 4', img: ''},
        {key: '5', name: 'Event 5', img: ''},
        {key: '6', name: 'Event 6', img: ''},
        {key: '7', name: 'Event 7', img: ''},
    ])
    return (
        <ScrollView style={styles.contentGroups}>
            {
                groups.map(item => (
                    <View key={item.key}>
                        <View style={styles.itemList}>
                            <Image style={styles.imageList} source={require('../../assets/avatarDefault.png')}/>
                            <Textapp
                                text={item.name}
                                size={TEXTS_SIZE.small}
                                weight={'bold'}
                                color={COLORS_APP.black1}
                            />
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    )
}
