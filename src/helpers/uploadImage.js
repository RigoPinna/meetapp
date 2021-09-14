import { firebase } from "../firebase/firebase-config";


export const uploadImage = async ( uri, folder='', nameImg='img' ) => {
    const blob = await new Promise(  (resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve( xhr.response );
        xhr.onerror = () => reject( new TypeError('request failed'));
        xhr.responseType = 'blob';
        xhr.open( 'GET',uri, true, true );
        xhr.send( null );
    })
    const imgRef = firebase.storage().ref( folder ).child(nameImg);
    await imgRef.put( blob );
    const imgURL =  await imgRef.getDownloadURL();
    return imgURL;

    
}
