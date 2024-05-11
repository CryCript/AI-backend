import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WeddingInvitationResolverBase } from "./base/weddingInvitation.resolver.base";
import { WeddingInvitation } from "./base/WeddingInvitation";
import { WeddingInvitationService } from "./weddingInvitation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeddingInvitation)
export class WeddingInvitationResolver extends WeddingInvitationResolverBase {
  constructor(
    protected readonly service: WeddingInvitationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
