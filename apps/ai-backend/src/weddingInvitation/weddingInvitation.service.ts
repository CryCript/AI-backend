import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeddingInvitationServiceBase } from "./base/weddingInvitation.service.base";

@Injectable()
export class WeddingInvitationService extends WeddingInvitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
