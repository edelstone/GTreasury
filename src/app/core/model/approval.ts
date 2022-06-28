export class Approval {
  accountId: string;
  approvalStatus: string;
  sendingAccount: string;
  receivingAccount: string;
  amount: number;
  currency: string;
  approvalsNeeded: number;
  transactionDate: Date;
  valueDate: Date;
  processDate: Date;
}
