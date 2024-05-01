import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeddingInvitationModuleBase } from "./base/weddingInvitation.module.base";
import { WeddingInvitationService } from "./weddingInvitation.service";
import { WeddingInvitationController } from "./weddingInvitation.controller";
import { WeddingInvitationResolver } from "./weddingInvitation.resolver";

@Module({
  imports: [WeddingInvitationModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeddingInvitationController],
  providers: [WeddingInvitationService, WeddingInvitationResolver],
  exports: [WeddingInvitationService],
})
export class WeddingInvitationModule {}
