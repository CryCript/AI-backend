import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeddingInvitationShareModuleBase } from "./base/weddingInvitationShare.module.base";
import { WeddingInvitationShareService } from "./weddingInvitationShare.service";
import { WeddingInvitationShareController } from "./weddingInvitationShare.controller";
import { WeddingInvitationShareResolver } from "./weddingInvitationShare.resolver";

@Module({
  imports: [WeddingInvitationShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeddingInvitationShareController],
  providers: [WeddingInvitationShareService, WeddingInvitationShareResolver],
  exports: [WeddingInvitationShareService],
})
export class WeddingInvitationShareModule {}
