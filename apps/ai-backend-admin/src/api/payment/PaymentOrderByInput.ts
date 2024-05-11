import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  accessToId?: SortOrder;
  createdAt?: SortOrder;
  evidence?: SortOrder;
  id?: SortOrder;
  paymentMethodId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
