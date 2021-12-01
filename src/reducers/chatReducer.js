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
export const addMessages = ( gid, messages ) => {
    return async( dispatch ) => {
        dispatch({
            type: 'add-msg',
            payload: {
                gid,
                messages: [...messages]
            }
        
        })
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