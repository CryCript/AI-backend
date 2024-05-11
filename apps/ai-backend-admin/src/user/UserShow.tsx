import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INVITATIONTYPE_TITLE_FIELD } from "../invitationType/InvitationTypeTitle";
import { PAYMENTSMETHOD_TITLE_FIELD } from "../paymentsMethod/PaymentsMethodTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Authentication Code" source="authenticationCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Payment"
          target="userIdId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Access To"
              source="invitationtype.id"
              reference="InvitationType"
            >
              <TextField source={INVITATIONTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Evidence" source="evidence" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Payment Method"
              source="paymentsmethod.id"
              reference="PaymentsMethod"
            >
              <TextField source={PAYMENTSMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User_ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WeddingInvitation"
          target="userIdId"
          label="Wedding Invitations"
        >
          <Datagrid rowClick="show">
            <TextField label="Bride" source="bride" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Design" source="design" />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
