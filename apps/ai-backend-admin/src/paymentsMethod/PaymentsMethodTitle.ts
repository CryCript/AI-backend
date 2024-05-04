import { PaymentsMethod as TPaymentsMethod } from "../api/paymentsMethod/PaymentsMethod";

export const PAYMENTSMETHOD_TITLE_FIELD = "nameRef";

export const PaymentsMethodTitle = (record: TPaymentsMethod): string => {
  return record.nameRef?.toString() || String(record.id);
};
