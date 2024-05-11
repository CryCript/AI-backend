import { WeddingInvitationWhereUniqueInput } from "../weddingInvitation/WeddingInvitationWhereUniqueInput";

export type WeddingInvitationShareUpdateInput = {
  institution?: string | null;
  link?: string | null;
  name?: string | null;
  open?: string | null;
  view?: number | null;
  weddingId?: WeddingInvitationWhereUniqueInput | null;
};
