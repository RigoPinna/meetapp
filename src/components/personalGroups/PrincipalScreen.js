import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { ButtonCreateGroups } from '../elements/ButtonCreateGroups'
import { ButtonMenuGroups } from '../elements/ButtonMenuGroups'
import { ListApp } from '../elements/ListApp'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const PrincipalScreen = () => {
    return (
        <View >
            <View style = { styles.contentHeader }>
                <Textapp
                    text={'Groups'}
                    size={TEXTS_SIZE.long}
                    weight={'bold'}
                    color={COLORS_APP.black1}
                    styles={{marginLeft: 10, marginBottom: 10}}
                />
                <ButtonMenuGroups/>
            </View>
            <ButtonCreateGroups/>
            <ListApp/>
        </View>
    )
}
