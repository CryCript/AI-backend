import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WeddingInvitationCommentResolverBase } from "./base/weddingInvitationComment.resolver.base";
import { WeddingInvitationComment } from "./base/WeddingInvitationComment";
import { WeddingInvitationCommentService } from "./weddingInvitationComment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeddingInvitationComment)
export class WeddingInvitationCommentResolver extends WeddingInvitationCommentResolverBase {
  constructor(
    protected readonly service: WeddingInvitationCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
