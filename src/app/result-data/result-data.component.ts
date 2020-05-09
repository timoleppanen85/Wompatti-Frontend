import { Component, OnInit } from '@angular/core';
import {any} from 'codelyzer/util/function';
import {removeSummaryDuplicates} from '@angular/compiler';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() { }

  savedAnswers;
  savedQuestions;
  savedOther;
  jsonAnswers = [];
  jsonQuestions = [];
  jsonOther = [];
  combined = [];


  ngOnInit() {

    this.savedAnswers = window.sessionStorage.getItem('questionAnswers');
    this.jsonAnswers = JSON.parse(this.savedAnswers);
    this.savedQuestions = window.sessionStorage.getItem('questionQuestions');
    this.jsonQuestions = JSON.parse(this.savedQuestions);
    this.savedOther = window.sessionStorage.getItem('otherAnswers');
    this.jsonOther = JSON.parse(this.savedOther);
    this.combined.push(this.jsonOther, this.jsonAnswers, this.jsonQuestions);

  // this.formatResult();

  }

  generatePdf() {
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById('resultBox').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();

    return true;
  }

}
