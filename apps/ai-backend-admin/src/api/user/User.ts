import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";
import { WeddingInvitation } from "../weddingInvitation/WeddingInvitation";

export type User = {
  accessWeddingInvitation?: "Yes" | "No" | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  phone: string | null;
  roles: JsonValue;
  status?: "Register" | "Active" | "Nonactive" | null;
  updatedAt: Date;
  username: string;
  weddingInvitations?: Array<WeddingInvitation>;
};
