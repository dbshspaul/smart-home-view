import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', link: '/'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen',  link: '/home'}/*,
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},*/
  ];

  ngOnInit() {
  }

}
