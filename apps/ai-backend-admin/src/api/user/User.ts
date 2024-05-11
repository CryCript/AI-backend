import { InvitationType } from "../invitationType/InvitationType";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";
import { WeddingInvitation } from "../weddingInvitation/WeddingInvitation";

export type User = {
  access?: Array<InvitationType>;
  authenticationCode: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  payments?: Array<Payment>;
  phone: string | null;
  roles: JsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  updatedAt: Date;
  username: string;
  weddingInvitations?: Array<WeddingInvitation>;
};
