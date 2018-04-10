import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-root',  //index.html says <base href="/"> <body>  <app-root></app-root></body>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onButtonClick(data) { 
    console.log(`Click event is working, data:`, data);
    console.log(`Date:`, data);
    //now.setHours(now.getHours() + 1)
    this.data.setHours(this.data.getHours()+1)
    console.log(`Date:`, this.data);
  }
  data = new Date();
}

// export class AppComponent {
//   _date = new Date();
//   get date():any {
//       return this._date;
//   }
//   set date(theBar:boolean) {
//       this._date = theBar;
//   }
// }
