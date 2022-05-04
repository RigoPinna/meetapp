import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { CellPiece } from '../elements/CellPiece'
import { TableApp } from '../elements/TableApp'
import { Textapp } from '../elements/Textapp'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const RecurrenceInfo = ({recurrence}) => {
    const [recu, setRecu] = useState(recurrence)
    const [data, setData] = useState({repeat: recu.repeat, startTime: recu.startTime})
    useEffect(() => {
      getType(recu.type)
    }, [])
    
    const getType = (type) => {
        switch (type) {
            case 0:
                setData({...data,...{type: 'No repeat'}})
            case 1:
                setData({...data,...{type: 'Day'}})
            case 2:
                setData({...data,...{type: 'Week'}})
            case 3:
                setData({...data,...{type: 'Month'}})
            case 4:
                setData({...data,...{type: 'Year'}})    
            default:
                break;
        }
    }
    const getTypeDuration = (type) => {
        switch (type) {
            case 0:
                setData({...data,...{typeDuration: 'Always'}})
            case 1:
                setData({...data,...{duration: `Until ${getFormatDate(recu.duration)}`}})
        }
    }
  return (
    //   <TableApp data ={data}/>
    <></>
  )
}
