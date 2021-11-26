import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { AgendaApp } from '../elements/AgendaApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { CalendarApp } from '../elements/CalendarApp'
import { Textapp } from '../elements/Textapp'
import { IconClose } from '../icons/IconClose'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const ScreenAgenda = () => {
    const navigation = useNavigation()
    return (
        <>
        <View style={styles.header}>
                        <Textapp
                            size={ TEXTS_SIZE.medium }
                            text={ 'Agenda' }
                            weight={'bold'}
                        />
                        
                         <ButtonGradient
                                                gradient={['#F3F7FE','#F3F7FE']}
                                                sizeGradient = {{ width:35, height:35 }}
                                                styleButton = {{ width:35, height:35, alignItems: 'center',justifyContent: 'center'}}
                                                IconLeft = { IconClose }
                                                hanldeOnPress = { () => { 
                                                    navigation.goBack(); 
                                                    // (!!handle) && handle()
                                                } }
                                                colorIcon = {COLORS_APP.black2}    
                                            />
                        
                    </View>
                    <View style={{width: '100%',height: '100%'}}>
            <AgendaApp/>
        </View>
        </>

    )
}
