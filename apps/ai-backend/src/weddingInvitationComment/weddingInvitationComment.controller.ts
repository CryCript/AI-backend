import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeddingInvitationCommentService } from "./weddingInvitationComment.service";
import { WeddingInvitationCommentControllerBase } from "./base/weddingInvitationComment.controller.base";

@swagger.ApiTags("weddingInvitationComments")
@common.Controller("weddingInvitationComments")
export class WeddingInvitationCommentController extends WeddingInvitationCommentControllerBase {
  constructor(
    protected readonly service: WeddingInvitationCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
