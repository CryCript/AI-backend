import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  accessTo?: StringNullableFilter;
  evidence?: StringNullableFilter;
  id?: StringFilter;
  noRef?: StringNullableFilter;
  status?: "Success" | "Pending" | "Failed";
  userId?: UserWhereUniqueInput;
};
