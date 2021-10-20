
import { db } from '../firebase/firebase-config'

export const getDataUser = async ( uid ) => {

    const userRef = db.collection('users').doc( uid )
    const doc = await userRef.get()

    if ( doc.exists ) {
        const user = doc.data()
        return user
    }
    return null
    
}
