import React from 'react'
import { View } from 'react-native'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Textapp } from './Textapp'

export const CellPiece = ({text}) => {
  return (
    <View style={{justifyContent: 'flex-start', width: '50%', borderBottomWidth: 2, borderRightWidth: 2}}>
            <Textapp 
                size = { TEXTS_SIZE.small } 
                text ={text}
                styles={{padding: 10, fontWeight: 'bold'}} 
            />
        </View>
  )
}
