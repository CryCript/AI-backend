import { InvitationType } from "../invitationType/InvitationType";
import { PaymentsMethod } from "../paymentsMethod/PaymentsMethod";
import { User } from "../user/User";

export type Payment = {
  accessTo?: InvitationType | null;
  createdAt: Date;
  evidence: string | null;
  id: string;
  paymentMethod?: PaymentsMethod | null;
  status?: "Success" | "Pending" | "Failed" | null;
  updatedAt: Date;
  userId?: User | null;
};
