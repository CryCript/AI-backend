import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvitationTypeService } from "./invitationType.service";
import { InvitationTypeControllerBase } from "./base/invitationType.controller.base";

@swagger.ApiTags("invitationTypes")
@common.Controller("invitationTypes")
export class InvitationTypeController extends InvitationTypeControllerBase {
  constructor(
    protected readonly service: InvitationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
