import { InvitationType as TInvitationType } from "../api/invitationType/InvitationType";

export const INVITATIONTYPE_TITLE_FIELD = "invitation";

export const InvitationTypeTitle = (record: TInvitationType): string => {
  return record.invitation?.toString() || String(record.id);
};
