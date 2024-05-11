import { InvitationTypeWhereInput } from "./InvitationTypeWhereInput";
import { InvitationTypeOrderByInput } from "./InvitationTypeOrderByInput";

export type InvitationTypeFindManyArgs = {
  where?: InvitationTypeWhereInput;
  orderBy?: Array<InvitationTypeOrderByInput>;
  skip?: number;
  take?: number;
};
