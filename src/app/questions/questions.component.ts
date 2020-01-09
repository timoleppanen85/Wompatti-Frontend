/* tslint:disable:no-trailing-whitespace */
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';
import * as data from '../../data.json';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionSetHeaders: {subject1: string}[] = data;

  constructor(public dialog: MatDialog) {
  }

  openHint(): void {
    const dialogRef = this.dialog.open(HintDialogComponent, {
      position: {top: '50px', right: '100px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  nextQuestion() {

  }

  ngOnInit() {
    console.log(data);
  }
}

