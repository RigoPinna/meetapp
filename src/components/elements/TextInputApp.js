import React from 'react'
import { useRef } from 'react'
import { TextInput, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'

export const TextInputApp = ({onChange, value, placeholder='', type='text', paddingHorizontal=13,IconPerson=undefined,colorIcon='black'}) => {
    const inputRef = useRef(null);
    return (
            <View style = {{
                width: 360, 
                height: 50,
                position: 'relative',
                alignItems: 'center',
                marginTop: 50,
                marginHorizontal: 20,
                flexDirection:'row',
                backgroundColor:'#F0F0F0',
                borderWidth:1,
                borderColor:'#F0F0F0',
                borderRadius: 100
            }}>
                { !!IconPerson && <IconPerson pathColor={colorIcon}/>}
                {
                   type === 'numeric'
                    ?   <TextInput
                            ref = { inputRef }
                            onChangeText = {(text)=> { onChange(text) } }
                            value = { value }
                            placeholder = { placeholder } 
                            style = {styles2.textInput}
                            keyboardType = { type }
                        />
                    :   <TextInput
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
