import React from 'react'
import { ScrollView, View } from 'react-native'
import { Modal } from 'react-native'
import { styleCalendar } from '../../theme/appTheme'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconClose } from '../icons/IconClose'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ItemModalEvent } from './ItemModalEvent'

export const ModalViewDetailsEvent = ({ modalMarker, setmodalMarker }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalMarker.modalVisible} onRequestClose={() => { setmodalMarker({...modalMarker, modalVisible: false}) }}>
            <View style={ styleCalendar.backgroundModal }>
                <View style={ styleCalendar.wrapperModal }>
                    <ScrollView>
                        {
                            modalMarker.events.map( ( evt, i ) => <ItemModalEvent key={`modal-${i}`} i={i} {...evt }/>)
                        }
                    
                    </ScrollView>
                    <View style={{position: 'absolute', top:16, right:20}}>
                        <ButtonGradient 
                            gradient={['#F3F7FE','#F3F7FE']}
                            sizeGradient = {{ width:35, height:35 }}
                            styleButton = {{ width:35, height:35, alignItems: 'center',justifyContent: 'center'}}
                            IconLeft = { IconClose }
                            hanldeOnPress = {() =>setmodalMarker({...modalMarker, modalVisible: false}) }
                            colorIcon = {COLORS_APP.black2}    
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
