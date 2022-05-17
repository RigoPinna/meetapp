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
        setstate(resp)
      })
    } else if (decision === 'set') {
        storeData(key,value)
    }
  }, [])
  return state
}
