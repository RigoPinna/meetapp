import React from 'react'
import { useRef } from 'react'
import { TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'

export const TextInputApp = ({onChange, value, placeholder='', width = '100%', type='text', paddingHorizontal=13}) => {
    const inputRef = useRef(null);
    return (
            <View style = {{width, height: 50, position: 'relative', paddingHorizontal}}>
               {
                   type === 'numeric'
                    ?  <TextInput
                            ref = { inputRef }
                            onChangeText = {(text)=> { onChange(text) } }
                            value = { value }
                            placeholder = { placeholder } 
                            style = {styles2.textInput}
                            keyboardType = { type }
                        />
                    : <TextInput
                            ref = { inputRef }
                            onChangeText = {(text)=> {onChange(text)} }
                            value = { value }
                            placeholder = { placeholder } 
                            style = {styles2.textInput}
                        
                        />

               }
            </View>
    )
}
