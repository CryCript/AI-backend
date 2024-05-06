import { PaymentUpdateManyWithoutPaymentsMethodsInput } from "./PaymentUpdateManyWithoutPaymentsMethodsInput";

export type PaymentsMethodUpdateInput = {
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
  logo?: string | null;
  nameRef?: string | null;
  noRef?: string | null;
  payments?: PaymentUpdateManyWithoutPaymentsMethodsInput;
  paymentType?: "BankTransfer" | "Ewallet" | null;
  status?: "Active" | "NonActive" | null;
};
