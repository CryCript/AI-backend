import { WeddingInvitationComment as TWeddingInvitationComment } from "../api/weddingInvitationComment/WeddingInvitationComment";

export const WEDDINGINVITATIONCOMMENT_TITLE_FIELD = "name";

export const WeddingInvitationCommentTitle = (
  record: TWeddingInvitationComment
): string => {
  return record.name?.toString() || String(record.id);
};
