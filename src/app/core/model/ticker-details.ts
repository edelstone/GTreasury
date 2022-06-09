export class TickerDetails {
  value: string;
  percentage: number;
  isIncrease: boolean;

  constructor(obj: Partial<TickerDetails>) {
    Object.assign(this, obj);
  }
}
