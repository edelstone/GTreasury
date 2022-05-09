import { Ledger } from "./ledger";

export class Statement
{
    date: Date;
    actual: Ledger;
    estimate: Ledger;
}