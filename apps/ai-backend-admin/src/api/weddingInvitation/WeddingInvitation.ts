import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { WeddingInvitationComment } from "../weddingInvitationComment/WeddingInvitationComment";
import { WeddingInvitationShare } from "../weddingInvitationShare/WeddingInvitationShare";

export type WeddingInvitation = {
  bride: JsonValue;
  createdAt: Date;
  design: JsonValue;
  events: JsonValue;
  galleries: JsonValue;
  gifts: JsonValue;
  groom: JsonValue;
  id: string;
  invites: JsonValue;
  moments: JsonValue;
  quotes: JsonValue;
  updatedAt: Date;
  userId?: User;
  video: string | null;
  weddingInvitationComments?: Array<WeddingInvitationComment>;
  weddingInvitationShares?: Array<WeddingInvitationShare>;
};
