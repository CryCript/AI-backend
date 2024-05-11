import { WeddingInvitationShare as TWeddingInvitationShare } from "../api/weddingInvitationShare/WeddingInvitationShare";

export const WEDDINGINVITATIONSHARE_TITLE_FIELD = "name";

export const WeddingInvitationShareTitle = (
  record: TWeddingInvitationShare
): string => {
  return record.name?.toString() || String(record.id);
};
