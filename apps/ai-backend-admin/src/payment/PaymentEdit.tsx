import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Access To" source="accessTo" />
        <TextInput label="Evidence" source="evidence" />
        <TextInput label="No Ref" source="noRef" />
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
