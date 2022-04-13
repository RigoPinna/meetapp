import React, { useEffect } from 'react'
import { useState } from 'react'
import { Image, View, Text } from 'react-native';
import { styleListGroups } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { getDataUser} from '../../helpers/getDataUser' 
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { IconDotsMenu } from '../icons/IconDotsMenu';

export const UserListItem = ( {type, isCreator, uid, colorColorBordersAvatars, modifyPayment, paidStatus = false, needPaid = false} ) => {
    const [ user, setUser ] = useState( null);
    const [ paid, setPaid ] = useState( paidStatus );

    useEffect(() => {
        if(uid != undefined) {
            const data = async () => {
                setUser(await getDataUser(uid));
            }
            data();
        }
    }, [type, isCreator, uid, colorColorBordersAvatars, paidStatus]);

    return (
        <>
            { !!user &&
                <View key={uid} style={{flexDirection:'row'}}>
                    <Image style = {{...styleListGroups.avatarListItemParticipants,...{borderColor:colorColorBordersAvatars}}} source = {{uri: user.image }} />
                    <View>
                        <Textapp text={user.name} styles={{marginTop:12, marginLeft: 10}} size={TEXTS_SIZE.extraMedium}/>
                        { (type == 'members') && <Textapp text={user.phone} styles={{marginLeft: 10, color: '#4F4F4F', fontSize: 14}}/>}
                        { (type == 'participants' && isCreator && paid ) && <View style={{marginLeft: 10, backgroundColor: '#C9E8FF', width: 50, height:20, borderRadius: 10, justifyContent: 'center'}}><Textapp text={'PAID'} styles={{marginLeft: 10, color: '#158BFC', fontSize: 12}} weight={'bold'}/></View>}
                    </View>
                    { (isCreator && needPaid) && 
                        <View style={{position: 'absolute', width: 20, height: 20, right: 15, top: 20}}>
                            <Menu>
                                <MenuTrigger>
                                        <IconDotsMenu/>
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption onSelect={() => {setPaid(!paid), modifyPayment(uid)}} >
                                        { paid ?
                                            <Text style={{color: '#828282'}}>Remove payment</Text>
                                            :
                                            <Text style={{color: '#828282'}}>Add payment</Text>
                                        }
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    }
                </View>
            }
        </>
    )
}
