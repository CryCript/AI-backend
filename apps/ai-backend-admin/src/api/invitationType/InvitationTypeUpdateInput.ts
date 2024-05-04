import { PaymentUpdateManyWithoutInvitationTypesInput } from "./PaymentUpdateManyWithoutInvitationTypesInput";
import { UserUpdateManyWithoutInvitationTypesInput } from "./UserUpdateManyWithoutInvitationTypesInput";

export type InvitationTypeUpdateInput = {
  invitation?: string | null;
  payments?: PaymentUpdateManyWithoutInvitationTypesInput;
  status?: "Active" | "NonActive" | null;
  user?: UserUpdateManyWithoutInvitationTypesInput;
};
