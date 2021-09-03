export const initialState = {
    name:'',
    image:'',
    phone:'',
    countryCode:'',
    verificationId:null,
};

export const addNameAndImg = ({ name, image }) => ({
    type:'ADD-DATA',
    payload: { name, image}
})

export const registerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD-DATA': 
            return { ...state, ...action.payload }
        
        default:
            return state;
    }
}

