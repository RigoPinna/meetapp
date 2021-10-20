import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getDataUser } from '../../helpers/getDataUser'
import { stylesChat } from '../../theme/appTheme'

export const ItemMessage = React.memo(({ uid, message:text }) => {
    const [ message, setMessage] = useState( null )
    const user = useSelector( state => state.authRed )
    useEffect(() => {
        ( async()=>{
            console.log(user.uid === uid )
            if ( user.uid === uid ) {
                console.log( 'entra ')
                setMessage({
                    creator: {
                        uid: uid,
                        name: user.name,
                        image: user.image
                    },
                    isMyMessage: true,
                    text,
                })
            } else {
                console.log( uid )
                const oltherUser = await getDataUser( uid );
                console.log( oltherUser )
                if( !!oltherUser ) {
                    setMessage({
                        creator: {
                            uid: uid,
                            name: oltherUser.name,
                            image:oltherUser.image
                        },
                        isMyMessage: false,
                        text,
                    })
                }
            }

        })();
    }, [])
    return (
       <>
       {
           !!message 
            &&  <View style={( message.isMyMessage ) ? stylesChat.wrapperItemMessageSended : stylesChat.wrapperItemMessage }>
            { ( !message.isMyMessage ) 
                && <Image style = { stylesChat.avatar } source = {{ uri:message.creator.image }} /> }
            <View style={{ height:'100%'}}>
                <View style = {( message.isMyMessage ) ? stylesChat.wrapperTextSended : stylesChat.wrapperTextRecibed}>
                    <LinearGradient 
                        colors = { ( message.isMyMessage ) ? stylesChat.bgMessageSended : stylesChat.bgMessageRecived } 
                        style = { stylesChat.bgMessage }
                    /> 
                    <Text style = {{ padding:10, color:(message.isMyMessage) ? 'white': 'black'}}>
                            { message.text }
                    </Text>
                </View>
            </View>  
        </View>
       }
       </>
    )
})
