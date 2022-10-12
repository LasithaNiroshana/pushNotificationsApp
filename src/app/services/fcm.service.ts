import { Injectable } from '@angular/core';
import {ActionPerformed,PushNotificationSchema,PushNotifications,Token,} from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { FCM } from "@capacitor-community/fcm";

@Injectable({
  providedIn: 'root'
})
export class FcmService {
 
  constructor() { }

  initPush(){
    if(Capacitor.getPlatform()!=='web'){
      this.registerPush();
    }
  }


 registerPush(){
//Request permission to use push notifications
PushNotifications.requestPermissions().then(result => {
  if (result.receive === 'granted') {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();
  } else {
    // Show some error
  }
});

  // Subscribing to a specific topic
FCM.subscribeTo({ topic: "test" }).then(() => console.log('Subscribed to topic'))
.catch((err) => console.log(err));

// Receive notifications on success
PushNotifications.addListener('registration', (token: Token) => {
  alert('Push registration success, token: ' + token.value);
  console.log('Push registration success, token: ' + token.value);
});

// Error messsage to display if it is not working
PushNotifications.addListener('registrationError', (error: any) => {
  alert('Error on registration: ' + JSON.stringify(error));
});

// Show the notification payload if the app is open on our device
PushNotifications.addListener(
  'pushNotificationReceived',
  (notification: PushNotificationSchema) => {
    alert('Push received: ' + JSON.stringify(notification));
  },
);

// When tapping on a notification
PushNotifications.addListener(
  'pushNotificationActionPerformed',
  (notification: ActionPerformed) => {
    alert('Push action performed: ' + JSON.stringify(notification));
  },
);
}

}
