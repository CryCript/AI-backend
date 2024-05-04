import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvitationTypeModuleBase } from "./base/invitationType.module.base";
import { InvitationTypeService } from "./invitationType.service";
import { InvitationTypeController } from "./invitationType.controller";
import { InvitationTypeResolver } from "./invitationType.resolver";

@Module({
  imports: [InvitationTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvitationTypeController],
  providers: [InvitationTypeService, InvitationTypeResolver],
  exports: [InvitationTypeService],
})
export class InvitationTypeModule {}
