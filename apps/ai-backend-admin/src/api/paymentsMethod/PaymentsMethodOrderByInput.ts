import { SortOrder } from "../../util/SortOrder";

export type PaymentsMethodOrderByInput = {
  account?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  nameRef?: SortOrder;
  noRef?: SortOrder;
  paymentType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
