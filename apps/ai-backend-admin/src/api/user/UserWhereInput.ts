import { InvitationTypeListRelationFilter } from "../invitationType/InvitationTypeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { WeddingInvitationListRelationFilter } from "../weddingInvitation/WeddingInvitationListRelationFilter";

export type UserWhereInput = {
  access?: InvitationTypeListRelationFilter;
  authenticationCode?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
  status?: "Register" | "Active" | "Nonactive";
  username?: StringFilter;
  weddingInvitations?: WeddingInvitationListRelationFilter;
};
