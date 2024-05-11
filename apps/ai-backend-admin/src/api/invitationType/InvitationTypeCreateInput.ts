import { PaymentCreateNestedManyWithoutInvitationTypesInput } from "./PaymentCreateNestedManyWithoutInvitationTypesInput";
import { UserCreateNestedManyWithoutInvitationTypesInput } from "./UserCreateNestedManyWithoutInvitationTypesInput";

export type InvitationTypeCreateInput = {
  invitation?: string | null;
  payments?: PaymentCreateNestedManyWithoutInvitationTypesInput;
  status?: "Active" | "NonActive" | null;
  user?: UserCreateNestedManyWithoutInvitationTypesInput;
};
