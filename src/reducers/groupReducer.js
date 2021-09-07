export const initialState = {
    name:'',
    image:'',
    description: '',
    code:'',
};

export const addNewGroup = ({ name, image, description, code}) => ({
    type:'ADD-DATA',
    payload: { name, image, description, code }
})

export const groupReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD-DATA': 
            return { ...state, ...action.payload }
        
        default:
            return state;
    }
}

