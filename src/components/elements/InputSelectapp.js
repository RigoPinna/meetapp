import React from 'react'
import { View } from 'react-native'

import RNPickerSelect from 'react-native-picker-select';
import { IconLocation } from '../icons/IconLocation'
import { styles2 } from '../../theme/appTheme';

const placeholder = {
    label: 'Select your country...',
    value: null,
    color: '#9EA0A4',
  };
export const InputSelectapp = ({ itemsData, setState }) => {
    return (
        <View style = {{width: '100%', height: 60, position: 'relative', paddingHorizontal:13, paddingBottom: 10}}>
            <View style = {{...styles2.textSelect, paddingTop: 0}} >
                <IconLocation styles = {{position: 'absolute',left: 12, top:15}}/>
                <RNPickerSelect
                    placeholder = { placeholder }
                    onValueChange={(value) => { setState(value)  } }
                    items = { itemsData }
                    style = {{inputIOS:{fontWeight:'bold', backgroundColor: 'red'}}}
                />
            </View>
        </View>
    )
}
