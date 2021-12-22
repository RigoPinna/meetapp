import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { styleCalendar, styles } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const ItemModalEvent = ( evt ) => {
    return (
        <View style={{ position: 'relative', backgroundColor: (( evt.i % 2  ) !== 0 ? "#E7E5E8" : "transparent"), paddingHorizontal:20, paddingVertical:5 }}>
            <View style={styles.header}>
                <Textapp
                    size={ TEXTS_SIZE.medium }
                    text={ evt.nameEvent }
                    weight={'bold'}
                    styles={{ width:"85%" }}
                />
            </View>
            <Text style={styleCalendar.groupNameText}>{ evt.formatPeople }</Text>
            <View
                style={{
                    borderBottomColor: COLORS_APP.black4,
                    borderBottomWidth: 1,
                    marginTop:5,
                    marginBottom:10
                }}
            />
            <Text>{evt.description}</Text>
        </View>
    )
}
