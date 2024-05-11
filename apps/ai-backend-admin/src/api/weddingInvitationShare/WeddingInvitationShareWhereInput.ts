import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WeddingInvitationWhereUniqueInput } from "../weddingInvitation/WeddingInvitationWhereUniqueInput";

export type WeddingInvitationShareWhereInput = {
  id?: StringFilter;
  institution?: StringNullableFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
  open?: StringNullableFilter;
  view?: IntNullableFilter;
  weddingId?: WeddingInvitationWhereUniqueInput;
};
