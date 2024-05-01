import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WEDDINGINVITATION_TITLE_FIELD } from "../weddingInvitation/WeddingInvitationTitle";

export const WeddingInvitationShareShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Link" source="link" />
        <TextField label="Name" source="name" />
        <TextField label="Open" source="open" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="View" source="view" />
        <ReferenceField
          label="Wedding_ID"
          source="weddinginvitation.id"
          reference="WeddingInvitation"
        >
          <TextField source={WEDDINGINVITATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
