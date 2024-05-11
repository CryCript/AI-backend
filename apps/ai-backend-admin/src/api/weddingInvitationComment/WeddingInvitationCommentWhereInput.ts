import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WeddingInvitationWhereUniqueInput } from "../weddingInvitation/WeddingInvitationWhereUniqueInput";

export type WeddingInvitationCommentWhereInput = {
  address?: StringNullableFilter;
  comment?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  institution?: StringNullableFilter;
  link?: StringNullableFilter;
  moment?: JsonFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  present?: StringNullableFilter;
  weddingId?: WeddingInvitationWhereUniqueInput;
};
