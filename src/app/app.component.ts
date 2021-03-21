import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
photos :Object[] = [];
constructor(http: HttpClient){
  //requisição para api e atribuindo o resultado em nossa lista de photos
  http.get<Object[]>('http://localhost:3000/flavio/photos').subscribe(photosApi => {
        this.photos = photosApi
    });

}
}
