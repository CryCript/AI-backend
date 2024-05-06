import { Payment } from "../payment/Payment";

export type PaymentsMethod = {
  account?:
    | "Bri"
    | "Mandiri"
    | "Bni"
    | "Hsbc"
    | "ShopeePay"
    | "Ovo"
    | "Gopay"
    | "Dana"
    | "Qris"
    | null;
  createdAt: Date;
  id: string;
  logo: string | null;
  nameRef: string | null;
  noRef: string | null;
  payments?: Array<Payment>;
  paymentType?: "BankTransfer" | "Ewallet" | null;
  status?: "Active" | "NonActive" | null;
  updatedAt: Date;
};
