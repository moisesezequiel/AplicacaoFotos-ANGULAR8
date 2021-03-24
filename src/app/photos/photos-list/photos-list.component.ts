import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photoService';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

 photos: any[] = [];

  constructor(private service: PhotoService,
    private rotaParametrizavel: ActivatedRoute) {

  }
  ngOnInit(): void {
  const userName = this.rotaParametrizavel.snapshot.params.userName
    this.service.listFromUser(userName)
      .subscribe(protosApi => this.photos = protosApi);

  }

}
