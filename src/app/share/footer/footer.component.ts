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
    {text: 'arrow_back', cols: 1, rows: 1, color: 'lightgreen',  link: '/'},
    {text: 'home', cols: 1, rows: 1, color: 'lightblue', link: '/home'}
  ];

  ngOnInit() {
  }

}
