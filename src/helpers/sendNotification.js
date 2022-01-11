

export const sendNotification = async (TOKEN_NOTIFICATION, title="TITLE",body="BODY", msg="MESSAGE") => {
  try {
    const message = {
      to: TOKEN_NOTIFICATION,
      sound: 'default',
      title,
      body,
      data: { someData: msg },
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

  }catch(e){
    console.log("ERROR-notification", e)

  }
   
}
