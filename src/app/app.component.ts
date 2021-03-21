
import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Object[] = [];

  constructor(service : PhotoService) {
    service.listFromUser('flavio')
    .subscribe(protosApi => this.photos = protosApi);

  }
}
