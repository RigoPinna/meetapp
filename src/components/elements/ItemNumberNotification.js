import React, { useEffect, useRef, useState } from 'react'
import { useSelector} from 'react-redux'
import { Text, View } from 'react-native'
export const ItemNumberNotification = ({ id }) => {
   
    const isMounted = useRef(null)
    const [number, setNumber] = useState(0)
    const { notificationsReducer } = useSelector( state => state)
    useEffect(() => {
      
        if ( isMounted.current ) {        
            const group = notificationsReducer.find( group => group.gid === id )
            if( !!group ) {
                setNumber( group.number )
            }
        }
    }, [ notificationsReducer ])
    return (
        <>
            {
                <View
                    ref={ isMounted } 
                    style = {{width:number>0 ? 35 : 0 , height:25,backgroundColor:'#FF3838', borderRadius:20, justifyContent: 'center', alignItems:'center', position:'absolute', right:10, top:10}}>
                                <Text style = {{color:'white'}}>{number}</Text>
                </View>
            }
        </>
       
    )
}
