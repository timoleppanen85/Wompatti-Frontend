import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import {HintDialogComponent} from '../hint-dialog/hint-dialog.component';
import * as data from '../../data.json';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: any = data[0].question;

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  const id = this.activatedRoute.snapshot.paramMap.get('id');
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
