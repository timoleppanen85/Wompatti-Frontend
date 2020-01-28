import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ProjectOverviewComponent} from '../project-overview/project-overview.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  anonymousUser() {
    this.router.navigate(['/menu']);
  }

  openProjectOverview(): void {
    const dialogRef = this.dialog.open(ProjectOverviewComponent, {
      position: {top: '50px', right: '200px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
