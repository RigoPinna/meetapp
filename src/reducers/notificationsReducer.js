
// const initState = [
//     {
//         gid:121212,
//         number:1,
//     },
//     {
//         gid:asda131,
//         number:0,
//     }
// ]
const initState = []

export const addNotification = ( gid, title="title", body="body", msg="message" ) => {
    
    return async (dispatch) => {
       
        dispatch({
            type:"addNotification",
            payload:gid,
        })
    }
}
export const removeBadge = ( gid ) => {
    
    return async (dispatch) => {
        dispatch({
            type:"removeBadge",
            payload:gid,
        })
    }
}

export const notificationsReducer = ( state = initState, action ) => {
    switch( action.type ){
        case 'addNotification':
            
            return actionNumber('add', state, action.payload )
        case 'removeBadge':

            return actionNumber('reset', state, action.payload )
        default:
        return state
    }

}

//props. actionNumber: type = "add" | "reset"
function actionNumber(type="add", state, gid ) {
    const itemChat = state.find( chat => chat.gid === gid )
    if( !!itemChat ) {
        itemChat.number = type === "add" ? itemChat.number + 1 : 0
        return [
            ...state, itemChat
        ]
    } else {
        const item = {
            gid,
            number:type === "add" ? 1 : 0
        }
        return [
            ...state, item
        ]
    }
}