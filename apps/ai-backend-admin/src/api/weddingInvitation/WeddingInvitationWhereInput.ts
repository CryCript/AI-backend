import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WeddingInvitationCommentListRelationFilter } from "../weddingInvitationComment/WeddingInvitationCommentListRelationFilter";
import { WeddingInvitationShareListRelationFilter } from "../weddingInvitationShare/WeddingInvitationShareListRelationFilter";

export type WeddingInvitationWhereInput = {
  bride?: JsonFilter;
  design?: JsonFilter;
  events?: JsonFilter;
  galleries?: JsonFilter;
  gifts?: JsonFilter;
  groom?: JsonFilter;
  id?: StringFilter;
  invites?: JsonFilter;
  moments?: JsonFilter;
  quotes?: JsonFilter;
  userId?: UserWhereUniqueInput;
  video?: StringNullableFilter;
  weddingInvitationComments?: WeddingInvitationCommentListRelationFilter;
  weddingInvitationShares?: WeddingInvitationShareListRelationFilter;
};
