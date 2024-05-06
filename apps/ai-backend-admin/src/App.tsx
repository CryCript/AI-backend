import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WeddingInvitationList } from "./weddingInvitation/WeddingInvitationList";
import { WeddingInvitationCreate } from "./weddingInvitation/WeddingInvitationCreate";
import { WeddingInvitationEdit } from "./weddingInvitation/WeddingInvitationEdit";
import { WeddingInvitationShow } from "./weddingInvitation/WeddingInvitationShow";
import { WeddingInvitationShareList } from "./weddingInvitationShare/WeddingInvitationShareList";
import { WeddingInvitationShareCreate } from "./weddingInvitationShare/WeddingInvitationShareCreate";
import { WeddingInvitationShareEdit } from "./weddingInvitationShare/WeddingInvitationShareEdit";
import { WeddingInvitationShareShow } from "./weddingInvitationShare/WeddingInvitationShareShow";
import { WeddingInvitationCommentList } from "./weddingInvitationComment/WeddingInvitationCommentList";
import { WeddingInvitationCommentCreate } from "./weddingInvitationComment/WeddingInvitationCommentCreate";
import { WeddingInvitationCommentEdit } from "./weddingInvitationComment/WeddingInvitationCommentEdit";
import { WeddingInvitationCommentShow } from "./weddingInvitationComment/WeddingInvitationCommentShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { PaymentsMethodList } from "./paymentsMethod/PaymentsMethodList";
import { PaymentsMethodCreate } from "./paymentsMethod/PaymentsMethodCreate";
import { PaymentsMethodEdit } from "./paymentsMethod/PaymentsMethodEdit";
import { PaymentsMethodShow } from "./paymentsMethod/PaymentsMethodShow";
import { InvitationTypeList } from "./invitationType/InvitationTypeList";
import { InvitationTypeCreate } from "./invitationType/InvitationTypeCreate";
import { InvitationTypeEdit } from "./invitationType/InvitationTypeEdit";
import { InvitationTypeShow } from "./invitationType/InvitationTypeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AI Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="WeddingInvitation"
          list={WeddingInvitationList}
          edit={WeddingInvitationEdit}
          create={WeddingInvitationCreate}
          show={WeddingInvitationShow}
        />
        <Resource
          name="WeddingInvitationShare"
          list={WeddingInvitationShareList}
          edit={WeddingInvitationShareEdit}
          create={WeddingInvitationShareCreate}
          show={WeddingInvitationShareShow}
        />
        <Resource
          name="WeddingInvitationComment"
          list={WeddingInvitationCommentList}
          edit={WeddingInvitationCommentEdit}
          create={WeddingInvitationCommentCreate}
          show={WeddingInvitationCommentShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="PaymentsMethod"
          list={PaymentsMethodList}
          edit={PaymentsMethodEdit}
          create={PaymentsMethodCreate}
          show={PaymentsMethodShow}
        />
        <Resource
          name="InvitationType"
          list={InvitationTypeList}
          edit={InvitationTypeEdit}
          create={InvitationTypeCreate}
          show={InvitationTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
