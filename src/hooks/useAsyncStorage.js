// static useAsyncStorage(key: string): {  
//     getItem: (    
//         callback?: ?(error: ?Error, result: string | null) => void,  
//     ) => Promise<string | null>,  
//     setItem: (    
//         value: string,    
//         callback?: ?(error: ?Error) => void,  
//     ) => Promise<null>,  
    // mergeItem: (    
    //     value: string,    
    //     callback?: ?(error: ?Error) => void,  
    // ) => Promise<null>, 
    // removeItem: (callback?: ?(error: ?Error) => void) => Promise<null>,
// }

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue !== null ? JSON.parse(jsonValue) : 'null'
    } catch (e) {
      console.log(e)
    }
}

const storeData = async (key,value) => {  
    try {    
      const jsonValue = JSON.stringify(value)    
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) 
    {    
      console.log(e)
    }
}


export const useAsyncStorage = (key, decision, value) => {
  const [state, setstate] = useState('')
  useEffect(() => {
    if(decision === 'get') {
      getData(key).then(resp => {
        // console.log(resp)
        setstate(resp)
      })
        // console.log(resp),
        // setstate(resp))
    } else if (decision === 'set') {
        storeData(key,value)
        // console.log('asadasdasdasd',value)
    }
  }, [])
  // console.log('asdasdasdadasdasd',state)
  return state
}
// export default useAsyncStorage
