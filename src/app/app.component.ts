
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  photos: Object[] = [];

  constructor(private service : PhotoService) {

  }
  ngOnInit(): void {
    this.service.listFromUser('flavio')
    .subscribe(protosApi => this.photos = protosApi);

  }
}
