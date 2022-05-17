import { sendNotification } from "../helpers/sendNotification"
import { addNotification } from "./notificationsReducer"
import { getDataUser } from '../helpers/getDataUser'

/*
initState = [
    { 
        gid: string
        messages: [ { message }... ]
    },
    ...
]
*/ 
const initState = []
export const addMessages = ({ gid, messages, tokenNotification, groupName }) => {
    return async( dispatch, getState ) => {
        try {
            if( messages.length > 0 ) {
                const userLoged = getState().authRed 
                const { uid, message } = messages[messages.length-1]
                const { name } = await getDataUser( uid )
                if(userLoged.uid !== uid) {
                    await sendNotification( tokenNotification, groupName, `${name}: ${message}` )
                    dispatch( addNotification( gid ) )
                }
                dispatch({ type: 'add-msg', payload: { gid, messages: [...messages]} })
            }

        }catch( e) {
            console.log(e)

        }
    }
}
export const chatReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'add-msg':
            return [ ...state, action.payload ]
    
        default:
            return state
    }

}