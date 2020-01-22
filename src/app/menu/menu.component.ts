import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  subjects = [
    {id: 1, name: 'Aistit', img: 'assets/images/aistit.jpg'},
    {id: 2, name: 'Perhe ja läheiset', img: 'assets/images/perhe.png'},
    {id: 3, name: 'Asuminen ja ympäristö', img: 'assets/images/koti.png'},
    {id: 4, name: 'Liikkuminen ja vapaa-aika', img: 'assets/images/vapaa-aika.png'},
    {id: 5, name: 'Raha', img: 'assets/images/raha.png'},
    {id: 6, name: 'Elämäni tärkeät asiat', img: 'assets/images/aika.png'},
    {id: 7, name: 'Huolet ja murheet', img: 'assets/images/huolet ja murheet.png'},
    {id: 8, name: 'Oma terveys', img: 'assets/images/terveys.png'},
    {id: 9, name: 'Arjen askareet', img: 'assets/images/arjen askareet.png'},
    {id: 10, name: 'Työ', img: 'assets/images/valita työ.png'}
  ];
  constructor() { }

  ngOnInit() {

  }
}
