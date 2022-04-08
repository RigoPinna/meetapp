import React, { useEffect } from 'react'
import { useState } from 'react'
import { Image, View } from 'react-native';
import { styleListGroups } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { getDataUser} from '../../helpers/getDataUser' 

export const UserListItem = ( params ) => {
    const {uid, colorColorBordersAvatars} = params;
    const [ user, setUser ] = useState( null);

    useEffect(() => {
        if(uid != undefined) {
            const data = async () => {
                setUser(await getDataUser(uid));
            }
            data();
        }
    }, [params, uid])

    return (
        <>
            { !!user &&
                <View key={uid} style={{flexDirection:'row'}}>
                    <Image style = {{...styleListGroups.avatarListItemParticipants,...{borderColor:colorColorBordersAvatars}}} source = {{uri: user.image }} />
                    <View>
                        <Textapp text={user.name} styles={{marginTop:10, marginLeft: 10}} weight={'bold'} size={TEXTS_SIZE.medium}/>
                        <Textapp text={user.phone} styles={{marginLeft: 10}}/>
                    </View>
                </View>
            }
        </>
    )
}
