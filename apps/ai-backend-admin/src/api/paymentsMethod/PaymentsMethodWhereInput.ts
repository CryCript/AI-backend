import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type PaymentsMethodWhereInput = {
  account?:
    | "Bri"
    | "Mandiri"
    | "Bni"
    | "Hsbc"
    | "ShopeePay"
    | "Ovo"
    | "Gopay"
    | "Dana"
    | "Qris";
  id?: StringFilter;
  logo?: StringNullableFilter;
  nameRef?: StringNullableFilter;
  noRef?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  paymentType?: "BankTransfer" | "Ewallet";
  status?: "Active" | "NonActive";
};
