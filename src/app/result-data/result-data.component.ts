import {Component, OnInit} from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {PdfPage} from '../../assets/files/pdfPage';
import moment from 'moment';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }

  showQuestion() {
    // lisää tähän haku kysymykselle
  }


  private getDocumentDefinition() {
    // const documentDefinition = {content: 'Wompatin tuloksia'};
    // // avaa pdfn/tulostuksen uuteen ikkunaan
    // pdfMake.createPdf(documentDefinition).open();
    // // tallentaa koneelle
    // pdfMake.createPdf(documentDefinition).download();

    return {
      content: [
        {
          text: 'Päivämäärä: ' + moment().format('L'),
          fontSize: 10,
        },
        {
          text: 'WOMPATTI',
          bold: true,
          fontSize: 20,
        },
        {
          text: 'VOIMAVARANI',
          bold: true,
          fontSize: 10,

        },
        {
          columns: [
            [{
              text: '',
              style: ''
            },
            ]]
        }
      ]

    }

      ;

  }
}

