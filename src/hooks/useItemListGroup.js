import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { db } from '../firebase/firebase-config';
import { addMessages } from '../reducers/chatReducer';


export const useItemListGroup = ({navigation, id, image, name, participants, description, tokenNotification }) => {

    const dispatch = useDispatch()
    const { authRed: userLoged } = useSelector( state => state )

    useEffect(() => {
        const [ actualRoute ] = navigation.getState().routes
        
        db.collection('groups')
        .doc( id )
        .collection('Chat').orderBy('createdat').onSnapshot( async (snapshot) => {
            const messages = snapshot.docs.map( doc => {
                const data = doc.data();
                return {
                    mid: doc.id,
                    ...data
                }
            });
            await dispatch( addMessages({ gid:id, messages, tokenNotification, groupName:name }) )
            
        })
    }, [])

    const hanldeNavigatorEliminateGroup = () => navigation.navigate('ModalEliminateGroup', { id, name });

    const onLongPressButton = async () => {
        if( userLoged.uid !== null ) {
            const groupRef = db.collection( 'groups' ).doc( id );
            const doc = await groupRef.get();
            if(doc.exists){
                const data = doc.data();
                const participants = JSON.parse( data.participants );
                const { uid } = participants[0];

                if(userLoged.uid === uid) {
                    hanldeNavigatorEliminateGroup()
                }
            }
        } 
    }
    const hanldeNavigatorChat = () => {
        navigation.navigate(
            'ScreenChatGroup',
            { 
                id, 
                image, 
                name, 
                participants, 
                description, 
                tokenNotification,
                messages:[] 
            }
        )
    }

    return {
        hanldeNavigatorChat,
        onLongPressButton
    }
    
}
