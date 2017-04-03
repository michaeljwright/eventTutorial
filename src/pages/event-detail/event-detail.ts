import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';

/*
  Generated class for the EventDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  currentEvent: any;
  guestName: string = '';
  guestPicture: any = null;

  constructor(public nav: NavController, public navParams: NavParams,
    public eventData: EventData) {}

    ionViewDidEnter(){
      this.eventData.getEventDetail(this.navParams.get('eventId'))
      .on('value', snapshot => {
        this.currentEvent = snapshot.val();
      });
    }

}
