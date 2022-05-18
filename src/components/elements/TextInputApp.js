import React from 'react'
import { useRef } from 'react'
import { TextInput, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const TextInputApp = ({size = (TEXTS_SIZE.extraSmall),weight = 'normal', color = (COLORS_APP.black1), height=50,onChange, value, placeholder='', type='text', paddingHorizontal=13,IconPerson=undefined,colorIcon='black',styleT, paddingLeftT=20, marginTopT=10, multiline, editable}) => {
    const inputRef = useRef(null);
    return (
            <View style = {{
                marginTop: marginTopT,
                paddingLeft: paddingLeftT,
                alignItems: 'center',
                backgroundColor:'#F0F0F0',
                borderWidth:1,
                borderColor:'#F0F0F0',
                overflow:'hidden',
                borderRadius:100,
                height: height,
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
                            style = {{...styles2.textInput, fontSize: size, fontWeight:weight, color: color}}
                            keyboardType = { type }
                        />
                    :   <TextInput
                            ref = { inputRef }
                            onChangeText = {(text)=> {onChange(text)} }
                            value = { value }
                            placeholder = { placeholder } 
                            style = {{...styles2.textInput, fontSize: size, fontWeight:weight, color: color}}
                            multiline={multiline}
                            editable={editable}
                        />
                }
            </View>
    )
}
