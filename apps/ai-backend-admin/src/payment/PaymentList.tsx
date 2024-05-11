import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVITATIONTYPE_TITLE_FIELD } from "../invitationType/InvitationTypeTitle";
import { PAYMENTSMETHOD_TITLE_FIELD } from "../paymentsMethod/PaymentsMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
