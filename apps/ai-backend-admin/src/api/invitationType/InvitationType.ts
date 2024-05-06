import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type InvitationType = {
  createdAt: Date;
  id: string;
  invitation: string | null;
  payments?: Array<Payment>;
  status?: "Active" | "NonActive" | null;
  updatedAt: Date;
  user?: Array<User>;
};
