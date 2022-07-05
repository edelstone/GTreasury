import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridComponent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { map, Observable } from 'rxjs';
import { Statement } from 'src/app/core/model/statement';
import { Worksheet } from 'src/app/core/model/worksheet';
import { StatementService } from 'src/app/core/services/statement/statement.service';
import { WorksheetsHelperService } from 'src/app/core/services/worksheets-helper/worksheets-helper.service';

@Component({
  selector: 'gt-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss'],
})
export class WorksheetsComponent implements OnInit {
  @ViewChild('worksheetGrid') portfolioGrid: GridComponent;
  public groups: GroupDescriptor[] = [{ field: 'worksheetGroup.name' }];

  statements: Observable<Statement[]>;
  worksheet: Observable<Worksheet>;
  worksheetData: Worksheet;
  statementData: Statement[];

  constructor(
    private worksheetsService: StatementService,
    private datePipe: DatePipe
  ) {
    this.allData = this.allData.bind(this);
  }

  ngOnInit(): void {
    this.statements = this.worksheetsService.getStatements();
    this.worksheet = this.statements.pipe(
      map((statements) =>
        WorksheetsHelperService.statementsToWorksheet(statements)
      )
    )

    this.statements.subscribe(data => { this.statementData = data });
    this.worksheet.subscribe(data => { this.worksheetData = data });
  }

  public allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(this.worksheetData.rows, {}).data
    };

    return result;
  }

  formatDate(date: Date) {
    return this.datePipe.transform(date, 'EEE d LLL yyyy');
  }
}
