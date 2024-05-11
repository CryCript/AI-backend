import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
  SelectInput,
} from "react-admin";

import { InvitationTypeTitle } from "../invitationType/InvitationTypeTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { WeddingInvitationTitle } from "../weddingInvitation/WeddingInvitationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="access"
          reference="InvitationType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvitationTypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Authentication Code" source="authenticationCode" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Full Name" source="fullName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Register", value: "Register" },
            { label: "Active", value: "Active" },
            { label: "Nonactive", value: "Nonactive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="weddingInvitations"
          reference="WeddingInvitation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WeddingInvitationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
