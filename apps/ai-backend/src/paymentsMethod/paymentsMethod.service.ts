import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentsMethodServiceBase } from "./base/paymentsMethod.service.base";

@Injectable()
export class PaymentsMethodService extends PaymentsMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
