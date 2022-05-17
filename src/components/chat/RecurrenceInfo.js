import React, { useEffect, useState } from 'react'

export const RecurrenceInfo = ({recurrence}) => {
    const [recu, setRecu] = useState(recurrence)
    const [data, setData] = useState({startTime: recu.startTime})
    useEffect(() => {
      getType(recu.type)
      getTypeDuration(recu.typeDuration)
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

    const getFormatDate = (date) => {
        const dateTemp = new Date(date)
        let format = ('0'+ dateTemp.getDate()).slice(-2) + "/" + ('0'+ (dateTemp.getMonth() + 1)).slice(-2) + "/" + dateTemp.getFullYear()
        return format
    } 
    const getTypeDuration = (type) => {
        switch (type) {
            case 0:
                setData({...data,...{duration: 'Always'}})
            case 1:
                setData({...data,...{duration: `Until ${getFormatDate(recu.duration)}`}})
        }
    }
  return (
    <></>
  )
}
