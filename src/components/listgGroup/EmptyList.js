import React from 'react'
import { Image, View } from 'react-native'
import { Textapp } from '../elements/Textapp'
import { IllustrationArrowScreen } from '../icons/IllustrationArrowScreen'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const EmptyList = () => {
    return (
        <View style = {{flex:1,alignItems:'center', flexDirection:'column', paddingTop:5}}>
                    <IllustrationArrowScreen />
                    <Textapp
                        weight = {'bold'}
                        size= {TEXTS_SIZE.small}
                        color = { COLORS_APP.black3 }
                        text ={`Looks like you don't have any group chat yet, click on create a group or join a group....`}
                        styles = {{textAlign:'center',}}
                    />
                    <Image source = {require('../../../assets/Illustration-Empty-List-Messages.png')}/>
                </View>
    )
}
