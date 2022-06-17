import { Ledger } from './ledger';

export class Statement {
  date: Date;
  dateText: string;
  isWeekend: boolean;
  actual: Ledger;
  estimate: Ledger;
}
