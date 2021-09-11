import { BottomTabBar } from "@react-navigation/bottom-tabs";
import moment from "moment-timezone";
import { db, userStatic, firebase } from "../firebase/firebase-config";
//OBJETO PARA UN GRUPO
// {
//     gid:'',
//     name:'',
//     image:'',
//     description: '',
//     code:'',
//     createdat: '',
//     participants: ''.
// }

export const initialState = {
    listGroup:[], 
    groupCreated:null
};

export const addNewGroup = ({ name, imageFile, image='', description }) => {
    
    return async ( dispatch ) => {
        // const blob = await new Promise((resolve, reject) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.onload = function() {
        //         resolve(xhr.response)
        //     }
        //     xhr.onerror = function(){
        //         reject(new TypeError('Network request failed'))
        //     }
        //     xhr.responseType = 'blob'
        //     xhr.open('GET', imageFile, true)
        //     xhr.send(null)
        // })
        console.log(imageFile)
        const response = await fetch(imageFile)
        const blob = await response.blob()
        const ref = firebase.storage().ref(image)
        const date = moment().format('DD-MM-YYYY')
        const code = Math.round(Math.random() * (999 - 0)) + ' ' +  Math.round (Math.random() * (999 - 0)) + ' ' + Math.round (Math.random() * (999 - 0));
        const groupRef = db.collection('groups').doc();
        const { id:gid } = groupRef;
        const snapshot = ref.put(blob)
        const urlsite = ''
        // snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        //     snapshot.snapshot.ref.getDownloadURL().then((url)=> {
        //         console.log('download url =>', url)
        //         urlsite = url;
        //         // bob.close()
        //     })
        // }),
        // (error) => {
        //     console.log(error)
        //     bob.close()
        // }
        db.collection('groups').doc(gid).collection('chat').doc().set({},{ merge: true })
        db.collection('groups').doc(gid).collection('participants').doc().set({ userStatic },{ merge: true })
        await groupRef.set({ code, creator: userStatic.uid, description,image: urlsite, name, createdat: date},{ merge: true });
        // await storage.ref(image).putFile(imageFile)
        // console.log('image =>', image)
        // console.log('imageFile =>', imageFile)
  
        dispatch({
            type:'create-group',
            payload:[{ code, creator: userStatic.uid, description, name, imageFile, createdat: date}]
        })
    }


}



export const groupReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'create-group': 
            return { 
                listGroup:[...state.listGroup,...action.payload ], 
                groupCreated:action.payload[0]
            };
        
        default:
            return state;
    }
}

