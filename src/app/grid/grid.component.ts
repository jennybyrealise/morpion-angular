import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

/* je crée un tableau avec des valeurs privées */
  private _values: string[] [] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];


  constructor() { }

  ngOnInit() {
  }

}
