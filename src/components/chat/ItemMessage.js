import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getDataUser } from '../../helpers/getDataUser'
import { stylesChat } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ItemMessage = React.memo(({ uid, message:text }) => {
    const [ message, setMessage] = useState( null )
    const user = useSelector( state => state.authRed )
    useEffect(() => {
        ( async()=>{
            if ( user.uid === uid ) {
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
                const oltherUser = await getDataUser( uid );
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
                &&  
            <View style={( message.isMyMessage ) ? stylesChat.wrapperItemMessageSended : stylesChat.wrapperItemMessage }>
                { ( !message.isMyMessage ) 
                    && <Image 
                            style = { stylesChat.avatar } 
                            source = {{ uri:message.creator.image }} />     
                }
            <View>
                { 
                    ( !message.isMyMessage ) 
                        && <Text style={{fontWeight:'bold', color:COLORS_APP.black3, fontSize:12}}>
                            { 
                                message.creator.name
                            }
                        </Text>
                }
                <View style = {( message.isMyMessage ) ? stylesChat.wrapperTextSended : stylesChat.wrapperTextRecibed}>
                    <Text style = {{ padding:6, fontSize:12.8, color:(message.isMyMessage) ? 'white': 'black'}}>
                            { message.text }
                    </Text>
                </View>
            </View>  
        </View>
       }
       </>
    )
})
