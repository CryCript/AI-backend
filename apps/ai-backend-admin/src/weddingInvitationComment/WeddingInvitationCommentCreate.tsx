import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WeddingInvitationTitle } from "../weddingInvitation/WeddingInvitationTitle";

export const WeddingInvitationCommentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Comment" multiline source="comment" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Link" source="link" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Present" source="present" />
        <ReferenceInput
          source="weddingId.id"
          reference="WeddingInvitation"
          label="Wedding_ID"
        >
          <SelectInput optionText={WeddingInvitationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
