import React from 'react'
import { useRef } from 'react'
import { TextInput, View } from 'react-native'
import { styles, styles2 } from '../../theme/appTheme'

export const TextInputApp = ({height=50,onChange, value, placeholder='', type='text', paddingHorizontal=13,IconPerson=undefined,colorIcon='black',styleT, paddingLeftT=20, marginTopT=10, multiline}) => {
    const inputRef = useRef(null);
    return (
            <View style = {{
                marginTop: marginTopT,
                paddingLeft: paddingLeftT,
                alignItems: 'center',
                backgroundColor:'#F0F0F0',
                borderWidth:1,
                borderColor:'#F0F0F0',
                ...styleT
                }}
            >
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
                            style = {{...styles2.textInput, height: height}}
                            multiline={multiline}
                        />
                }
            </View>
    )
}
