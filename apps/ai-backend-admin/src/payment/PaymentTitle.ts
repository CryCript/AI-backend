import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "evidence";

export const PaymentTitle = (record: TPayment): string => {
  return record.evidence?.toString() || String(record.id);
};
