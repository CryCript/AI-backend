import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { WeddingInvitationListRelationFilter } from "../weddingInvitation/WeddingInvitationListRelationFilter";

export type UserWhereInput = {
  accessWeddingInvitation?: "Yes" | "No";
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
  status?: "Register" | "Active" | "Nonactive";
  username?: StringFilter;
  weddingInvitations?: WeddingInvitationListRelationFilter;
};
