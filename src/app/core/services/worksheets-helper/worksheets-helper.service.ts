import { Injectable } from '@angular/core';
import { Statement } from '../../model/statement';
import {
  Worksheet,
  WorksheetCategory,
  WorksheetGroup,
  WorksheetRow,
} from '../../model/worksheet';

@Injectable()
export class WorksheetsHelperService {
  constructor() {}

  public static statementsToWorksheet(statements: Statement[]): Worksheet {
    const worksheet = new Worksheet();
    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'ACH',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements.map((s) => this.multiSelectCredit('ACH', s)).flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'Cash letter',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements
          .map((s) => this.multiSelectCredit('cashLetter', s))
          .flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'Deposit corrections',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements
          .map((s) => this.multiSelectCredit('depositCorrection', s))
          .flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'Miscellaneous',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements
          .map((s) => this.multiSelectCredit('miscellaneous', s))
          .flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'ZBA',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements.map((s) => this.multiSelectCredit('ZBA', s)).flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'Subtotal',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Credits,
          name: 'Credits',
        }),
        data: statements.map((s) => this.multiSelectCredit('subtotal', s)).flat(),
      })
    );

    worksheet.rows.push(
      new WorksheetRow({
        rowName: 'Example debit',
        worksheetGroup: new WorksheetGroup({
          id: WorksheetCategory.Debits,
          name: 'Debits',
        }),
        data: statements
          .map((s) => this.multiSelectCredit('cashLetter', s))
          .flat(),
      })
    );

    // TODO:
    // Add Debit rows here

    return worksheet;
  }

  private static multiSelectStatement(
    property: string,
    statementDate: Statement
  ) {
    return [
      statementDate.actual[property as keyof typeof statementDate.actual],
      statementDate.estimate[property as keyof typeof statementDate.estimate],
    ];
  }

  private static multiSelectCredit(property: string, statementDate: Statement) {
    return [
      statementDate.actual.credit[
        property as keyof typeof statementDate.actual.credit
      ],
      statementDate.estimate.credit[
        property as keyof typeof statementDate.estimate.credit
      ],
    ];
  }
}
