import React, { useState,useRef,useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import * as Progress from 'react-native-progress';

import {  View, Image, Animated, Clipboard } from 'react-native'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCopy } from '../icons/IconCopy'
import { Toastapp } from '../elements/ToastApp'

import { styles, styles2 } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const StepCreated = () => {
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)
    const[ loading, setLoading ] = useState( true );
    const {  groupCreated } = useSelector( state => state.groupReducer )
    const handlecopyToClipboard = () => {
        Clipboard.setString( groupCreated.code)
        setVisible(true)
        setMessages([...messages, 'Code copied!' + Math.random()])
    }

    const opacity = useRef(new Animated.Value(0) ).current;
    useEffect(() => {
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:500,
                useNativeDriver:true,
            }
        ).start();
        !!groupCreated && setLoading( false )
    }, [ groupCreated ])

    return (
        <Animated.View style = {{...styles2.wrapperPresentation, width: '100%', opacity:opacity, backgroundColor:'transparent'}}>
            {
                loading 
                ? <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Progress.CircleSnail spinDuration={1000} color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
                    </View>
                :<>
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Textapp
                            text={'The group has been successfully created!'}
                            color={COLORS_APP.green}
                            styles={{margin: 10}}
                            size={TEXTS_SIZE.small}
                        />
                        <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                            <Image
                                    style={styles.tinyLogo}
                                    source = {
                                            groupCreated.image === '' 
                                                ? require('../../assets/genericGroup.png')
                                                : {uri:groupCreated.image}
                                            }
                                    
                                />
                        </View>
                        <View style={{marginTop: 10}}>
                            <Textapp 
                                size={TEXTS_SIZE.medium}
                                text={groupCreated.name}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                                styles={{textAlign: 'center'}}
                            />
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Use this code to let your friends join your group'}
                                color={COLORS_APP.black2}
                            />
                        </View>

                        <View style={{width: '100%', alignItems: 'center'}}>
                            <TextInputApp 
                                placeholder={groupCreated.code}
                                height={150}
                                size={TEXTS_SIZE.long}
                                weight={'bold'}
                                color={COLORS_APP.green}
                                styleT={{ 
                                    width: '100%',
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    backgroundColor: '#F9F9F9'
                                }}
                                editable={false}
                            />
                        </View>

                            <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35}}>
                                <ButtonGradient
                                    IconLeft={IconCopy}
                                    gradient={['#F3F7FE','#F3F7FE']}
                                    sizeGradient = {{width:350, height:50}}
                                    textButton={`Copy code`}
                                    styleText={{color:'black', marginLeft: 10}}
                                    styleButton={{width:350, height:50,justifyContent:'center'}}
                                    hanldeOnPress = { handlecopyToClipboard }
                                />
                            </View>
                            {
                                visible && messages.map((message) => (
                                                <Toastapp
                                                    key={message}
                                                    message={'Code copied!'}
                                                    onHide={() => {
                                                    setMessages((messages) =>
                                                        messages.filter(
                                                            (currentMessage) =>
                                                            currentMessage !== message
                                                    ));
                                                }}
                                                />
                                            ))
                            }
                    </View>
                </>
                }
        </Animated.View >
    )
}
