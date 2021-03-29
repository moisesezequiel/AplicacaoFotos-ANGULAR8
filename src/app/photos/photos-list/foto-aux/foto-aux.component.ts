import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'app-foto-aux',
  templateUrl: './foto-aux.component.html',
  styleUrls: ['./foto-aux.component.css']
})
export class FotoAuxComponent implements OnChanges {

  @Input() fotos: Photo[] = [];
  linhas = []
  constructor() {

  }




  ngOnChanges(changes: SimpleChanges) {
    if (changes.fotos) {
      this.linhas = this.groupColumns(this.fotos);

    }
  }


  groupColumns(fotos: Photo[]) {
    const novasLinhas = [];
    for (let i = 0; i < fotos.length; i += 3) {

      //slice corta do array da posiçao 0 até a que foi declarada no segundo parametro
      novasLinhas.push(fotos.slice(i, i + 3))
    }
    return novasLinhas;
  }

}
