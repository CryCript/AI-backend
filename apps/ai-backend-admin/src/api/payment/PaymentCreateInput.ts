import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  accessTo?: string | null;
  evidence?: string | null;
  noRef?: string | null;
  status?: "Success" | "Pending" | "Failed" | null;
  userId?: UserWhereUniqueInput | null;
};
