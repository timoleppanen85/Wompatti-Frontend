import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';
import * as data from '../../data.json';
import {Router} from '@angular/router';
import {getLocaleDayNames} from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    console.log(data);
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
    // TODO for statement iterating through questions and saving results.
    this.router.navigate(['/result-data']);
  }
}
