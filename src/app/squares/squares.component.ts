import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent implements OnInit {
  
  @Input() row: number;
  @Input() column: number;

  constructor() { }

  ngOnInit() {
  }
  // fonction "_handleSquareClick()" qui gère le square lors du click 
  _handleSquareClick(){
  console.log("Vous avez cliqué sur le row " + this.row + " et la col " + this.column);
  }; 
}
