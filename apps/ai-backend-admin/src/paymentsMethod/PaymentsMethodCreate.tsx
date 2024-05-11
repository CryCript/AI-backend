import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";

export const PaymentsMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="account"
          label="Account"
          choices={[
            { label: "BRI", value: "Bri" },
            { label: "MANDIRI", value: "Mandiri" },
            { label: "BNI", value: "Bni" },
            { label: "HSBC", value: "Hsbc" },
            { label: "Shopee Pay", value: "ShopeePay" },
            { label: "Ovo", value: "Ovo" },
            { label: "Gopay", value: "Gopay" },
            { label: "Dana", value: "Dana" },
            { label: "QRIS", value: "Qris" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Name Ref" source="nameRef" />
        <TextInput label="No Ref" source="noRef" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="paymentType"
          label="Payment Type"
          choices={[
            { label: "Bank Transfer", value: "BankTransfer" },
            { label: "Ewallet", value: "Ewallet" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Non Active", value: "NonActive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
