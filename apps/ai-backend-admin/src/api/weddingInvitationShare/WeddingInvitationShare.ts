import { WeddingInvitation } from "../weddingInvitation/WeddingInvitation";

export type WeddingInvitationShare = {
  createdAt: Date;
  id: string;
  institution: string | null;
  link: string | null;
  name: string | null;
  open: string | null;
  updatedAt: Date;
  view: number | null;
  weddingId?: WeddingInvitation | null;
};
