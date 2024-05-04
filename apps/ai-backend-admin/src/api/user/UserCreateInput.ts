import { InvitationTypeCreateNestedManyWithoutUsersInput } from "./InvitationTypeCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WeddingInvitationCreateNestedManyWithoutUsersInput } from "./WeddingInvitationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  access?: InvitationTypeCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  phone?: string | null;
  roles: InputJsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  username: string;
  weddingInvitations?: WeddingInvitationCreateNestedManyWithoutUsersInput;
};
