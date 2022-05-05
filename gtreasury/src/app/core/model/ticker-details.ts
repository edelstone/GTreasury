export class TickerDetails {
  value: number;
  percentage: number;
  isIncrease: boolean;

  constructor(obj: Partial<TickerDetails>) {
    Object.assign(this, obj);
  }
}
