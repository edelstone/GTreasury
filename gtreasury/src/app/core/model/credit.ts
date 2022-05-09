export class Credit {
  ACH: number;
  cashLetter: number;
  depositCorrection: number;
  miscellaneous: number;
  ZBA: number;
  get subtotal() {
    return (
      this.ACH +
      this.cashLetter +
      this.depositCorrection +
      this.miscellaneous +
      this.ZBA
    );
  }

  constructor(obj?: Partial<Credit>) {
    Object.assign(this, obj);
  }
}
