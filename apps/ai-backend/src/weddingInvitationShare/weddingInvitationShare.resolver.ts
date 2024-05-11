import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WeddingInvitationShareResolverBase } from "./base/weddingInvitationShare.resolver.base";
import { WeddingInvitationShare } from "./base/WeddingInvitationShare";
import { WeddingInvitationShareService } from "./weddingInvitationShare.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeddingInvitationShare)
export class WeddingInvitationShareResolver extends WeddingInvitationShareResolverBase {
  constructor(
    protected readonly service: WeddingInvitationShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
