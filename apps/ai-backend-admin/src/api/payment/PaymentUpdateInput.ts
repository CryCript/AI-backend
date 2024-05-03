import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  accessTo?: string | null;
  evidence?: string | null;
  noRef?: string | null;
  status?: "Success" | "Pending" | "Failed" | null;
  userId?: UserWhereUniqueInput | null;
};
