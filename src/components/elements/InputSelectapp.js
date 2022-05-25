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
        <View style = {{width: '90%', position: 'relative'}}>
            <View style = {{...styles2.textSelect, height: 50, paddingTop: 0}} >
                <IconLocation styles = {{position: 'absolute', left: 8, top:12}}/>
                <RNPickerSelect
                    placeholder = { placeholder }
                    onValueChange={(value) => { setState(value)  } }
                    items = { itemsData }
                    style = {{inputIOS:{fontWeight:'bold'}}}
                />
            </View>
        </View>
    )
}
