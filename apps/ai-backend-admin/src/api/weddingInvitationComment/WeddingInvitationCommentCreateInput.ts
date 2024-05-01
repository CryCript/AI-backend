import { InputJsonValue } from "../../types";
import { WeddingInvitationWhereUniqueInput } from "../weddingInvitation/WeddingInvitationWhereUniqueInput";

export type WeddingInvitationCommentCreateInput = {
  address?: string | null;
  comment?: string | null;
  email?: string | null;
  institution?: string | null;
  link?: string | null;
  moment?: InputJsonValue;
  name?: string | null;
  phone?: string | null;
  present?: string | null;
  weddingId?: WeddingInvitationWhereUniqueInput | null;
};
