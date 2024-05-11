import { PaymentsMethodWhereInput } from "./PaymentsMethodWhereInput";
import { PaymentsMethodOrderByInput } from "./PaymentsMethodOrderByInput";

export type PaymentsMethodFindManyArgs = {
  where?: PaymentsMethodWhereInput;
  orderBy?: Array<PaymentsMethodOrderByInput>;
  skip?: number;
  take?: number;
};
