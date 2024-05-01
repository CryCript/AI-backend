import { WeddingInvitation as TWeddingInvitation } from "../api/weddingInvitation/WeddingInvitation";

export const WEDDINGINVITATION_TITLE_FIELD = "video";

export const WeddingInvitationTitle = (record: TWeddingInvitation): string => {
  return record.video?.toString() || String(record.id);
};
