import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { INVITATIONTYPE_TITLE_FIELD } from "../invitationType/InvitationTypeTitle";
import { PAYMENTSMETHOD_TITLE_FIELD } from "../paymentsMethod/PaymentsMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
