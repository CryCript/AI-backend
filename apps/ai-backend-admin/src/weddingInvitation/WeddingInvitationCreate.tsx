import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WeddingInvitationCommentTitle } from "../weddingInvitationComment/WeddingInvitationCommentTitle";
import { WeddingInvitationShareTitle } from "../weddingInvitationShare/WeddingInvitationShareTitle";

export const WeddingInvitationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <ReferenceInput source="userId.id" reference="User" label="User_ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Video" source="video" />
        <ReferenceArrayInput
          source="weddingInvitationComments"
          reference="WeddingInvitationComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WeddingInvitationCommentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="weddingInvitationShares"
          reference="WeddingInvitationShare"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WeddingInvitationShareTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
