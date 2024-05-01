import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeddingInvitationShareServiceBase } from "./base/weddingInvitationShare.service.base";

@Injectable()
export class WeddingInvitationShareService extends WeddingInvitationShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
