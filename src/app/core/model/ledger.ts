import { Credit } from './credit';

export class Ledger {
  dataType: 'Actual' | 'Estimate';
  openingLedger: number;
  credit: Credit;
  debit: any;
  closingLedger: number;

  get subtotal() {
    return this.openingLedger + this.credit.subtotal;
  }

  constructor(obj?: Partial<Ledger>) {
    Object.assign(this, obj);
  }
}
