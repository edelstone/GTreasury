export class Worksheet {
  rows: WorksheetRow[];

  constructor() {
    this.rows = [];
  }
}

export class WorksheetRow {
  rowName: string;
  worksheetGroup: WorksheetGroup;
  data: number[];

  constructor(obj: Partial<WorksheetRow>) {
    Object.assign(this, obj);
  }
}

export class WorksheetGroup {
  id: WorksheetCategory;
  name: string;

  constructor(obj: Partial<WorksheetGroup>) {
    Object.assign(this, obj);
  }
}

export enum WorksheetCategory {
  Credits = 1,
  Debits = 2,
}
