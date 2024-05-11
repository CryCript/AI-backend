import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeddingInvitationCommentModuleBase } from "./base/weddingInvitationComment.module.base";
import { WeddingInvitationCommentService } from "./weddingInvitationComment.service";
import { WeddingInvitationCommentController } from "./weddingInvitationComment.controller";
import { WeddingInvitationCommentResolver } from "./weddingInvitationComment.resolver";

@Module({
  imports: [WeddingInvitationCommentModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeddingInvitationCommentController],
  providers: [
    WeddingInvitationCommentService,
    WeddingInvitationCommentResolver,
  ],
  exports: [WeddingInvitationCommentService],
})
export class WeddingInvitationCommentModule {}
