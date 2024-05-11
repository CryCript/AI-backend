import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InvitationTypeResolverBase } from "./base/invitationType.resolver.base";
import { InvitationType } from "./base/InvitationType";
import { InvitationTypeService } from "./invitationType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvitationType)
export class InvitationTypeResolver extends InvitationTypeResolverBase {
  constructor(
    protected readonly service: InvitationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
