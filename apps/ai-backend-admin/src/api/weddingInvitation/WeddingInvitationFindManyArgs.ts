import { WeddingInvitationWhereInput } from "./WeddingInvitationWhereInput";
import { WeddingInvitationOrderByInput } from "./WeddingInvitationOrderByInput";

export type WeddingInvitationFindManyArgs = {
  where?: WeddingInvitationWhereInput;
  orderBy?: Array<WeddingInvitationOrderByInput>;
  skip?: number;
  take?: number;
};
