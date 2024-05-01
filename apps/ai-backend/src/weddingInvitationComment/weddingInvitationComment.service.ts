import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeddingInvitationCommentServiceBase } from "./base/weddingInvitationComment.service.base";

@Injectable()
export class WeddingInvitationCommentService extends WeddingInvitationCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
