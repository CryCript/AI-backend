import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvitationTypeServiceBase } from "./base/invitationType.service.base";

@Injectable()
export class InvitationTypeService extends InvitationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
