import React, { useState } from 'react'
import { Button, Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { ModalApp } from '../elements/ModalApp'
import { Textapp } from '../elements/Textapp'

export const ModalScreenCreateEvent = ({navigation}) => {
    const [visible, setVisible] = useState(true);
  return (
    <View>
        <ModalApp visible={visible} navigation={navigation}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {setVisible(false), navigation.goBack()}}>
                        <Image
                            source={require('../../assets/x.png')}
                            style={{height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
            Congratulations registration was successful
            </Text>
        </ModalApp>
      </View>

  );
}
