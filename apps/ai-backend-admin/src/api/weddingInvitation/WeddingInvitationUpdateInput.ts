import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput } from "./WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput";
import { WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput } from "./WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput";

export type WeddingInvitationUpdateInput = {
  bride?: InputJsonValue;
  design?: InputJsonValue;
  events?: InputJsonValue;
  galleries?: InputJsonValue;
  gifts?: InputJsonValue;
  groom?: InputJsonValue;
  invites?: InputJsonValue;
  moments?: InputJsonValue;
  quotes?: InputJsonValue;
  userId?: UserWhereUniqueInput;
  video?: string | null;
  weddingInvitationComments?: WeddingInvitationCommentUpdateManyWithoutWeddingInvitationsInput;
  weddingInvitationShares?: WeddingInvitationShareUpdateManyWithoutWeddingInvitationsInput;
};
