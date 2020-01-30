import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';


// @ts-ignore
import data from '../../data.json';

import {ActivatedRoute, Router} from '@angular/router';
import {MenuComponent} from '../menu/menu.component';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public selectedId;
  question: any = data[0].questions[0].question;
  answer: any = data[0].questions[0].options;

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // TODO snapshot / subscribe;
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
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
