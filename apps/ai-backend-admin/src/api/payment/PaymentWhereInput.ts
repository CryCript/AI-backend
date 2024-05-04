import { InvitationTypeWhereUniqueInput } from "../invitationType/InvitationTypeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentsMethodWhereUniqueInput } from "../paymentsMethod/PaymentsMethodWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  accessTo?: InvitationTypeWhereUniqueInput;
  evidence?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: PaymentsMethodWhereUniqueInput;
  status?: "Success" | "Pending" | "Failed";
  userId?: UserWhereUniqueInput;
};
