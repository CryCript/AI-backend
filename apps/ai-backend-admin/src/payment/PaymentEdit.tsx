import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { InvitationTypeTitle } from "../invitationType/InvitationTypeTitle";
import { PaymentsMethodTitle } from "../paymentsMethod/PaymentsMethodTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accessTo.id"
          reference="InvitationType"
          label="Access To"
        >
          <SelectInput optionText={InvitationTypeTitle} />
        </ReferenceInput>
        <TextInput label="Evidence" source="evidence" />
        <ReferenceInput
          source="paymentMethod.id"
          reference="PaymentsMethod"
          label="Payment Method"
        >
          <SelectInput optionText={PaymentsMethodTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Success", value: "Success" },
            { label: "Pending", value: "Pending" },
            { label: "Failed", value: "Failed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="userId.id" reference="User" label="User_ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
