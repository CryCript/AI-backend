import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WeddingInvitationTitle } from "../weddingInvitation/WeddingInvitationTitle";

export const WeddingInvitationShareEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Institution" source="institution" />
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
        <TextInput label="Open" source="open" />
        <NumberInput step={1} label="View" source="view" />
        <ReferenceInput
          source="weddingId.id"
          reference="WeddingInvitation"
          label="Wedding_ID"
        >
          <SelectInput optionText={WeddingInvitationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
