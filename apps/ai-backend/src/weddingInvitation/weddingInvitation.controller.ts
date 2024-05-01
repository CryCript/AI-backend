import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeddingInvitationService } from "./weddingInvitation.service";
import { WeddingInvitationControllerBase } from "./base/weddingInvitation.controller.base";

@swagger.ApiTags("weddingInvitations")
@common.Controller("weddingInvitations")
export class WeddingInvitationController extends WeddingInvitationControllerBase {
  constructor(
    protected readonly service: WeddingInvitationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
