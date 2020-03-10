import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  subjects = [
    {id: 1, name: 'Aistit', img: 'assets/images/aistit.svg'},
    {id: 2, name: 'Perhe ja läheiset', img: 'assets/images/perhe.svg'},
    {id: 3, name: 'Asuminen ja ympäristö', img: 'assets/images/koti.svg'},
    {id: 4, name: 'Liikkuminen ja vapaa-aika', img: 'assets/images/vapaa-aika.svg'},
    {id: 5, name: 'Raha', img: 'assets/images/raha.svg'},
    {id: 6, name: 'Elämäni tärkeät asiat', img: 'assets/images/aika.svg'},
    {id: 7, name: 'Huolet ja murheet', img: 'assets/images/huolet-ja-murheet.svg'},
    {id: 8, name: 'Oma terveys', img: 'assets/images/terveys.svg'},
    {id: 9, name: 'Arjen askareet', img: 'assets/images/arjen-askareet.svg'},
    {id: 10, name: 'Työ', img: 'assets/images/valita-työ.svg'}
  ];
  constructor() { }

  ngOnInit() {

  }
}
