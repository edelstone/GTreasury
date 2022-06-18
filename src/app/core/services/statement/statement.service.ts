import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credit } from '../../model/credit';
import { Ledger } from '../../model/ledger';
import { Statement } from '../../model/statement';

@Injectable()
export class StatementService {
  private readonly statements: Statement[] = [
    {
      date: new Date(2022, 5, 6),
      dateText: '',
      isWeekend: false,
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
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 300000.0,
        }),
        closingLedger: 14217148.32,
      }),
    },
    {
      date: new Date(2022, 5, 7),
      dateText: '',
      isWeekend: false,
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
      date: new Date(2022, 5, 8),
      dateText: '',
      isWeekend: false,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 10388267.95,
        credit: new Credit({
          ACH: 289399.76,
          cashLetter: 738.09,
          depositCorrection: 25347.00,
          miscellaneous: 0,
          ZBA: 983920.77,
        }),
        closingLedger: 12456092.22,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 10432267.95,
        credit: new Credit({
          ACH: 350880.00,
          cashLetter: 800.0,
          depositCorrection: 30000.0,
          miscellaneous: 0,
          ZBA: 1090002.88,
        }),
        closingLedger: 14029298.37,
      }),
    },
    {
      date: new Date(2022, 5, 9),
      dateText: '',
      isWeekend: false,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 12456092.22,
        credit: new Credit({
          ACH: 1029839.88,
          cashLetter: 728999.55,
          depositCorrection: 378888.26,
          miscellaneous: 0,
          ZBA: 379029.02,
        }),
        closingLedger: 11294896.27,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 14029298.37,
        credit: new Credit({
          ACH: 1200000.0,
          cashLetter: 800000.0,
          depositCorrection: 350000.0,
          miscellaneous: 0,
          ZBA: 455999.0,
        }),
        closingLedger: 12333573.11,
      }),
    },
    {
      date: new Date(2022, 5, 10),
      dateText: '',
      isWeekend: false,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 11294896.27,
        credit: new Credit({
          ACH: 240.76,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 378888.26,
          ZBA: 0,
        }),
        closingLedger: 13278194.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 12333573.11,
        credit: new Credit({
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 0,
        }),
        closingLedger: 12283928.12,
      }),
    },
    {
      date: new Date(2022, 5, 11),
      dateText: '',
      isWeekend: true,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13278194.88,
        credit: new Credit({
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 0,
        }),
        closingLedger: 13278194.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 12283928.12,
        credit: new Credit({
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 0,
        }),
        closingLedger: 12283928.12,
      }),
    },
    {
      date: new Date(2022, 5, 12),
      dateText: '',
      isWeekend: true,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 13278194.88,
        credit: new Credit({
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 0,
        }),
        closingLedger: 13278194.88,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 12283928.12,
        credit: new Credit({
          ACH: 0,
          cashLetter: 0,
          depositCorrection: 0,
          miscellaneous: 0,
          ZBA: 0,
        }),
        closingLedger: 12283928.12,
      }),
    },
    {
      date: new Date(2022, 5, 12),
      dateText: 'Week ending',
      isWeekend: false,
      actual: new Ledger({
        dataType: 'Actual',
        openingLedger: 12294896.27,
        credit: new Credit({
          ACH: 3029881.39,
          cashLetter: 240938.28,
          depositCorrection: 1237958.64,
          miscellaneous: 398736.99,
          ZBA: 2291938.75,
        }),
        closingLedger: 13267398.44,
      }),
      estimate: new Ledger({
        dataType: 'Estimate',
        openingLedger: 12287398.12,
        credit: new Credit({
          ACH: 3211948.93,
          cashLetter: 280283.99,
          depositCorrection: 1572387.35,
          miscellaneous: 428209.29,
          ZBA: 2312839.48,
        }),
        closingLedger: 13584930.99,
      }),
    },
  ];

  constructor() {}

  // TODO:
  // Generate worksheets search model
  public getStatements(): Observable<Statement[]> {
    // The isWeekend attribute can be calculated from the date on the frontend
    // It is necessary for styling in the worksheet
    return of(this.statements);
  }
}
