import moment from 'moment';

export class PdfPage {

  private getDocumentDefinition() {
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
        // {
        //   columns: [
        //     [{
        //       text: '',
        //       style: ''
        //     },
        //     ]]
        // }
      ]

    }

      ;
  }
}
