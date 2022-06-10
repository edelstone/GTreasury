import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credit } from '../../model/credit';
import { Ledger } from '../../model/ledger';
import { Statement } from '../../model/statement';

@Injectable()
export class StatementService {
  private readonly statements: Statement[] = [
    {
      date: new Date(2022, 1, 17),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 11400993.21,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 259990.46,
        }),
        closingLedger: 13827390.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 11483210.22,
        credit: new Credit({
          ACH: 555555,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 300000.0,
        }),
        closingLedger: 14217148.32,
      }),
    },
    {
      date: new Date(2022, 1, 18),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13827390.88,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10388267.95,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 14217148.32,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10432267.95,
      }),
    },
    {
      date: new Date(2022, 1, 17),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 10388267.95,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 259990.46,
        }),
        closingLedger: 13827390.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 11483210.22,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 300000.0,
        }),
        closingLedger: 14217148.32,
      }),
    },
    {
      date: new Date(2022, 1, 18),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13827390.88,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10388267.95,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 14217148.32,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10432267.95,
      }),
    },
    {
      date: new Date(2022, 1, 17),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 11400993.21,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 259990.46,
        }),
        closingLedger: 13827390.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 11483210.22,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 300000.0,
        }),
        closingLedger: 14217148.32,
      }),
    },
    {
      date: new Date(2022, 1, 18),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13827390.88,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10388267.95,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 14217148.32,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10432267.95,
      }),
    },
    {
      date: new Date(2022, 1, 17),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 11400993.21,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 259990.46,
        }),
        closingLedger: 13827390.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 11483210.22,
        credit: new Credit({
          ACH: 554,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 300000.0,
        }),
        closingLedger: 14217148.32,
      }),
    },
    {
      date: new Date(2022, 1, 18),
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13827390.88,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10388267.95,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 14217148.32,
        credit: new Credit({
          ACH: 6577.98,
          cashLetter: 0,
          depositCorrection: 786.99,
          miscellaneous: 441950.0,
          ZBA: 0,
        }),
        closingLedger: 10432267.95,
      }),
    },
  ];

  constructor() {}

  // TODO:
  // Generate worksheets search model
  public getStatements(): Observable<Statement[]> {
    return of(this.statements);
  }
}
