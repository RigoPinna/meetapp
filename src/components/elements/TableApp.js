import React from 'react'
import { View } from 'react-native'
import { CellPiece } from './CellPiece'

export const TableApp = ({data}) => {
  return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <CellPiece text={'Repeats every'} />
            <CellPiece text={'Repeats every'} />
        </View>
      </View>
  )
}
