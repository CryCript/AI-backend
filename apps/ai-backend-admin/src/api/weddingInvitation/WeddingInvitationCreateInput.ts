import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeddingInvitationCommentCreateNestedManyWithoutWeddingInvitationsInput } from "./WeddingInvitationCommentCreateNestedManyWithoutWeddingInvitationsInput";
import { WeddingInvitationShareCreateNestedManyWithoutWeddingInvitationsInput } from "./WeddingInvitationShareCreateNestedManyWithoutWeddingInvitationsInput";

export type WeddingInvitationCreateInput = {
  bride?: InputJsonValue;
  events?: InputJsonValue;
  galleries?: InputJsonValue;
  gifts?: InputJsonValue;
  groom?: InputJsonValue;
  invites?: InputJsonValue;
  moments?: InputJsonValue;
  quotes?: InputJsonValue;
  userId: UserWhereUniqueInput;
  video?: string | null;
  weddingInvitationComments?: WeddingInvitationCommentCreateNestedManyWithoutWeddingInvitationsInput;
  weddingInvitationShares?: WeddingInvitationShareCreateNestedManyWithoutWeddingInvitationsInput;
};
