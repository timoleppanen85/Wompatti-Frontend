import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() { }

  item = window.sessionStorage.getItem('questionAnswers');
  test = JSON.parse(this.item)

  ngOnInit() {

  document.getElementById('resultBox').innerHTML = this.test;

  }

  generatePdf() {

    console.log(sessionStorage);
  }

  tulokset() {

  }
}
