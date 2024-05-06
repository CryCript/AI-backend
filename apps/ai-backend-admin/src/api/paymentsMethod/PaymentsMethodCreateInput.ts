import { PaymentCreateNestedManyWithoutPaymentsMethodsInput } from "./PaymentCreateNestedManyWithoutPaymentsMethodsInput";

export type PaymentsMethodCreateInput = {
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
  payments?: PaymentCreateNestedManyWithoutPaymentsMethodsInput;
  paymentType?: "BankTransfer" | "Ewallet" | null;
  status?: "Active" | "NonActive" | null;
};
