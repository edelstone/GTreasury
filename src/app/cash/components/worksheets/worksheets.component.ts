import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
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
  public groups: GroupDescriptor[] = [{ field: 'worksheetGroup.name' }];

  statements: Observable<Statement[]>;
  worksheet: Observable<Worksheet>;

  constructor(
    private worksheetsService: StatementService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.statements = this.worksheetsService.getStatements();
    this.worksheet = this.statements.pipe(
      map((statements) =>
        WorksheetsHelperService.statementsToWorksheet(statements)
      )
    )
  }

  formatDate(date: Date) {
    return this.datePipe.transform(date, 'EEE d LLL yyyy');
  }
}
