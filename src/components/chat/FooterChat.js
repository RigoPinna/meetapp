import React, { useState } from 'react'
import { View } from 'react-native'

import { stylesChat } from '../../theme/appTheme'

import { ButtonSendMessage } from '../elements/ButtonSendMessage'
import { TextInputApp } from '../elements/TextInputApp'

export const FooterChat = ({ gid }) => {
    
    const [ message, setMessage ] = useState('')

    return (
        <View style={ stylesChat.wrapperFooterSendMessage}>
               
            <TextInputApp 
                placeholder={'Message..'} 
                styleT={ stylesChat.inputMessage } 
                paddingHorizontal={0}
                value = { message }
                onChange = { ( text ) => setMessage( text )} 
            />
            <ButtonSendMessage gid = { gid } message = { message } setMessage={ setMessage }/>
        </View>
    )
}
