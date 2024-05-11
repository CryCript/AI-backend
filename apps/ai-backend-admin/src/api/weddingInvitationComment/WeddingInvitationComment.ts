import { JsonValue } from "type-fest";
import { WeddingInvitation } from "../weddingInvitation/WeddingInvitation";

export type WeddingInvitationComment = {
  address: string | null;
  comment: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  institution: string | null;
  link: string | null;
  moment: JsonValue;
  name: string | null;
  phone: string | null;
  present: string | null;
  updatedAt: Date;
  weddingId?: WeddingInvitation | null;
};
