import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEDDINGINVITATION_TITLE_FIELD } from "../weddingInvitation/WeddingInvitationTitle";

export const WeddingInvitationShareList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wedding Invitation Shares"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Link" source="link" />
        <TextField label="Name" source="name" />
        <TextField label="Open" source="open" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="View" source="view" />
        <ReferenceField
          label="Wedding_ID"
          source="weddinginvitation.id"
          reference="WeddingInvitation"
        >
          <TextField source={WEDDINGINVITATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
