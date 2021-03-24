import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'app-foto-aux',
  templateUrl: './foto-aux.component.html',
  styleUrls: ['./foto-aux.component.css']
})
export class FotoAuxComponent implements OnInit {

  @Input()fotos : Photo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
