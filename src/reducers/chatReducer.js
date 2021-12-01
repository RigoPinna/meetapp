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
        const userLoged = getState().authRed 
        const { uid, message } = messages[messages.length-1]
        const { name } = await getDataUser( uid )
        if(userLoged.uid !== uid) {
            dispatch( addNotification( gid ) )
            await sendNotification( tokenNotification, groupName, `${name}: ${message}` )
        }
        dispatch({ type: 'add-msg', payload: { gid, messages: [...messages]} })
    }
}
export const chatReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'add-msg':
            console.log('adding messages')
            return [ ...state, action.payload ]
    
        default:
            return state
    }

}