export const initialState = {
    name:'',
    image:'',
    phone:0,
    countryCode:0,
    verificationId:null,
};

export const addPhoneAndVerifyData = ({ phone, countryCode, verificationId, }) => ({
    type:'ADD-DATA',
    payload: { phone, countryCode, verificationId, }
})

// export const addNameAndImg = ({ name, image='' }) => ({
//     type:'ADD-DATA',
//     payload: { phone, countryCode, verificationId, }
// })

export const registerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD-DATA': 
            return { ...state, ...action.payload }
        
        default:
            return state;
    }
}

