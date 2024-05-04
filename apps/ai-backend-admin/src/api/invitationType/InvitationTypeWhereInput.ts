import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type InvitationTypeWhereInput = {
  id?: StringFilter;
  invitation?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: "Active" | "NonActive";
  user?: UserListRelationFilter;
};
