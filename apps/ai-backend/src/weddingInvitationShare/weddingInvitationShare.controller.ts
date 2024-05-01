import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeddingInvitationShareService } from "./weddingInvitationShare.service";
import { WeddingInvitationShareControllerBase } from "./base/weddingInvitationShare.controller.base";

@swagger.ApiTags("weddingInvitationShares")
@common.Controller("weddingInvitationShares")
export class WeddingInvitationShareController extends WeddingInvitationShareControllerBase {
  constructor(
    protected readonly service: WeddingInvitationShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
