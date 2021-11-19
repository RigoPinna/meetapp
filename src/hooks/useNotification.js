import * as Notifications from 'expo-notifications';
import { useState, useRef, useEffect } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
export const useNotification = () => {
    const [Token, setToken] = useState('');
    useEffect(() => {
        getToken()
            .then( setToken )
            .catch(err=> {
                console.log('error en token',err)
            })
    }, [])

    const getToken = async () => {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('chat', {
          name: 'chat',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      return token;
  
    }
    return {
        Token
    }
    
}
