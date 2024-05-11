import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { WEDDINGINVITATION_TITLE_FIELD } from "../weddingInvitation/WeddingInvitationTitle";

export const WeddingInvitationCommentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Link" source="link" />
        <TextField label="Moment" source="moment" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Present" source="present" />
        <DateField source="updatedAt" label="Updated At" />
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
