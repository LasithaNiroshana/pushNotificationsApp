import { Component,OnInit } from '@angular/core';
// import {ActionPerformed,PushNotificationSchema,PushNotifications,Token,} from '@capacitor/push-notifications';
import {FcmService} from '../services/fcm.service';
import {DatabaseService} from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(fcmService:FcmService, private databaseService:DatabaseService) {
    databaseService.getTopicCollection().subscribe(res=>{
      console.log(res);
    })
    fcmService.registerPush();
  }
  ngOnInit() {
    // console.log('Initializing HomePage');

    // // Request permission to use push notifications
    // PushNotifications.requestPermissions().then(result => {
    //   if (result.receive === 'granted') {
    //     // Register with Apple / Google to receive push via APNS/FCM
    //     PushNotifications.register();
    //   } else {
    //     // Show some error
    //   }
    // });

    // // On success, we should be able to receive notifications
    // PushNotifications.addListener('registration', (token: Token) => {
    //   alert('Push registration success, token: ' + token.value);
    // });

    // // Error messsage to display if it is not working
    // PushNotifications.addListener('registrationError', (error: any) => {
    //   alert('Error on registration: ' + JSON.stringify(error));
    // });

    // // Show us the notification payload if the app is open on our device
    // PushNotifications.addListener(
    //   'pushNotificationReceived',
    //   (notification: PushNotificationSchema) => {
    //     alert('Push received: ' + JSON.stringify(notification));
    //   },
    // );

    // // When tapping on a notification
    // PushNotifications.addListener(
    //   'pushNotificationActionPerformed',
    //   (notification: ActionPerformed) => {
    //     alert('Push action performed: ' + JSON.stringify(notification));
    //   },
    // );
  }
  

}
