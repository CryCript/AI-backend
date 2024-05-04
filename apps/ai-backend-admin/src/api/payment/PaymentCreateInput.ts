import { InvitationTypeWhereUniqueInput } from "../invitationType/InvitationTypeWhereUniqueInput";
import { PaymentsMethodWhereUniqueInput } from "../paymentsMethod/PaymentsMethodWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  accessTo?: InvitationTypeWhereUniqueInput | null;
  evidence?: string | null;
  paymentMethod?: PaymentsMethodWhereUniqueInput | null;
  status?: "Success" | "Pending" | "Failed" | null;
  userId?: UserWhereUniqueInput | null;
};
