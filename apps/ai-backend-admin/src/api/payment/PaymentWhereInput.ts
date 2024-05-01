import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
