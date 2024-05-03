import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
