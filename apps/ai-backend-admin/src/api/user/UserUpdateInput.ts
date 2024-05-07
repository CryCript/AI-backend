import { InvitationTypeUpdateManyWithoutUsersInput } from "./InvitationTypeUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WeddingInvitationUpdateManyWithoutUsersInput } from "./WeddingInvitationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  access?: InvitationTypeUpdateManyWithoutUsersInput;
  authenticationCode?: string | null;
  email?: string | null;
  fullName?: string | null;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  phone?: string | null;
  roles?: InputJsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  username?: string;
  weddingInvitations?: WeddingInvitationUpdateManyWithoutUsersInput;
};
