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
import { PAYMENTSMETHOD_TITLE_FIELD } from "./PaymentsMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentsMethodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="Name Ref" source="nameRef" />
        <TextField label="No Ref" source="noRef" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="paymentMethodId"
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
      </SimpleShowLayout>
    </Show>
  );
};
