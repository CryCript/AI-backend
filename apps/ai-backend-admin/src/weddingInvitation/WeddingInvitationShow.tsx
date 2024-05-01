import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WEDDINGINVITATION_TITLE_FIELD } from "./WeddingInvitationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WeddingInvitationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bride" source="bride" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Events" source="events" />
        <TextField label="Galleries" source="galleries" />
        <TextField label="Gifts" source="gifts" />
        <TextField label="Groom" source="groom" />
        <TextField label="ID" source="id" />
        <TextField label="Invites" source="invites" />
        <TextField label="Moments" source="moments" />
        <TextField label="Quotes" source="quotes" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User_ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Video" source="video" />
        <ReferenceManyField
          reference="WeddingInvitationComment"
          target="weddingIdId"
          label="Wedding Invitation Comments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WeddingInvitationShare"
          target="ID"
          label="Wedding Invitation Shares"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
