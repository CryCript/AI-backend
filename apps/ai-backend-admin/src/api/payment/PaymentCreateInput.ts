import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  userId?: UserWhereUniqueInput | null;
};
