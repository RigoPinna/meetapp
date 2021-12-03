import React, { useEffect, useState } from 'react'
import { Image, Text, View, Modal, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { db } from '../../firebase/firebase-config'
import { stylesChat } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ItemInfoCalendar = ( group ) => {

    const [ event, setEvent ] = useState(undefined)
    const [ modalVisible, setModalVisible ] = useState(false)
    console.log(group)

    useEffect( () => {
        // db.collection('groups')
        //         .doc( group.gid )
        //         .collection('event').onSnapshot( (snapshot) => {
        //             const evt = snapshot.docs.map( doc => {
        //                 if( doc.exist) {
        //                     return doc.data()
        //                 }
        //             });
        //             setEvent( evt )
        //         })

    }, [])

    return (
        <>
            {
                ( !!event ) 
                    && <View>
                            <Text>{ group.name }</Text>
                            <Text>{ event.nameEvent }</Text>
                        </View>
            }
            <TouchableOpacity activeOpacity={ 0.75 } onPress = { () =>{ setModalVisible(!modalVisible) }}>
                <View style={{width: '100%', minHeight:50, justifyContent: 'center', padding:5,marginBottom:5, flexDirection:'row' }}>
                    <View style={{position: 'relative'}}>
                        <View style={{ position:"absolute",bottom:0,right:-5,zIndex:2, width:20, height:20,borderRadius:50, backgroundColor:'green',marginTop:'auto', marginBottom:'auto'}}></View>
                        <Image style = {{width:40, height:40, borderRadius:50 }} source = {{uri:group.image}}/>
                    </View>
                    <View style={{flex:1,  paddingLeft:10}}>
                        <Text style={{color:COLORS_APP.black1, fontWeight:'bold'}}>Event name</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:COLORS_APP.black2,fontSize:10, fontWeight:'bold', marginRight:5}}>Group name</Text>
                            <Text style={{color:COLORS_APP.black3, fontWeight:'100', fontSize:10}}>by autor</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <View style={{ flex: 1,justifyContent: "center",alignItems: "center",marginTop: 22 }}>
                    <View style={{width:'80%',position:'relative',margin: 20, backgroundColor: "white", borderRadius: 5,padding: 20,shadowColor: "#000",shadowOffset: {  width: 0,  height: 1
    },shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}>
        <Text>Event name </Text>
        <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>cerrar</Text>
            </Pressable>

                    </View>
                </View>
            </Modal>
        </>
    )
}
