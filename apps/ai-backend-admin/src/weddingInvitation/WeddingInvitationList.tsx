import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WeddingInvitationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wedding Invitations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bride" source="bride" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Design" source="design" />
        <TextField label="Events" source="events" />
        <TextField label="Galleries" source="galleries" />
        <TextField label="Gifts" source="gifts" />
        <TextField label="Groom" source="groom" />
        <TextField label="ID" source="id" />
        <TextField label="Invites" source="invites" />
        <TextField label="Moments" source="moments" />
        <TextField label="Quotes" source="quotes" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User_ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Video" source="video" />
      </Datagrid>
    </List>
  );
};
