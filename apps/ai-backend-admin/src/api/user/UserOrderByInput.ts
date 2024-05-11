import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  authenticationCode?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
