import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { styleCalendar, styles } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ButtonGradient } from '../elements/ButtonGradient'
import { useNavigation } from '@react-navigation/native'
import { IconArrowRightBlue } from '../icons/IconArrowRightBlue'

export const ItemModalEvent = ( evt ) => {
    const navigation = useNavigation();
    const {modalMarker, setmodalMarker} = evt;

    const goToEventInfo = () => {
        if(evt !== undefined) {
            setmodalMarker({...modalMarker, modalVisible: false})
            navigation.navigate('ScreenEventInfo', {event: evt, gid: evt.gid, navigation, origin: 'calendar'})
        }
    }
    
    return (
        <View style={{ position: 'relative', backgroundColor: (( evt.i % 2  ) !== 0 ? "#E7E5E8" : "transparent"), paddingHorizontal:20, paddingTop:5 }}>
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
            <View style={{ alignItems: 'flex-end', marginTop: 10}}>
                <ButtonGradient
                    gradient={['#fff','#fff']}
                    sizeGradient = {{width:120, height:20}}
                    textButton={`More info`}
                    styleText={{color:'#04BEFE', fontWeight:'bold', fontSize:15}}
                    styleButton={{width:120, height:20}}
                    IconRight = { IconArrowRightBlue }
                    hanldeOnPress = { () => {goToEventInfo()} }
                />
            </View>
        </View>
    )
}
