import { User } from "../user/User";

export type Payment = {
  accessTo: string | null;
  createdAt: Date;
  evidence: string | null;
  id: string;
  noRef: string | null;
  status?: "Success" | "Pending" | "Failed" | null;
  updatedAt: Date;
  userId?: User | null;
};
