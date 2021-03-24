import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photoService';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

 photos: any[] = [];

  constructor(private service: PhotoService) {

  }
  ngOnInit(): void {
    this.service.listFromUser('flavio')
      .subscribe(protosApi => this.photos = protosApi);

  }

}
