import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WeddingInvitationUpdateManyWithoutUsersInput } from "./WeddingInvitationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accessWeddingInvitation?: "Yes" | "No" | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  phone?: string | null;
  roles?: InputJsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  username?: string;
  weddingInvitations?: WeddingInvitationUpdateManyWithoutUsersInput;
};
