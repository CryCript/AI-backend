import { InvitationTypeCreateNestedManyWithoutUsersInput } from "./InvitationTypeCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WeddingInvitationCreateNestedManyWithoutUsersInput } from "./WeddingInvitationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  access?: InvitationTypeCreateNestedManyWithoutUsersInput;
  authenticationCode?: string | null;
  email?: string | null;
  fullName?: string | null;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  phone?: string | null;
  roles: InputJsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  username: string;
  weddingInvitations?: WeddingInvitationCreateNestedManyWithoutUsersInput;
};
