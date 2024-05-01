/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WeddingInvitationService } from "../weddingInvitation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WeddingInvitationCreateInput } from "./WeddingInvitationCreateInput";
import { WeddingInvitation } from "./WeddingInvitation";
import { WeddingInvitationFindManyArgs } from "./WeddingInvitationFindManyArgs";
import { WeddingInvitationWhereUniqueInput } from "./WeddingInvitationWhereUniqueInput";
import { WeddingInvitationUpdateInput } from "./WeddingInvitationUpdateInput";
import { WeddingInvitationCommentFindManyArgs } from "../../weddingInvitationComment/base/WeddingInvitationCommentFindManyArgs";
import { WeddingInvitationComment } from "../../weddingInvitationComment/base/WeddingInvitationComment";
import { WeddingInvitationCommentWhereUniqueInput } from "../../weddingInvitationComment/base/WeddingInvitationCommentWhereUniqueInput";
import { WeddingInvitationShareFindManyArgs } from "../../weddingInvitationShare/base/WeddingInvitationShareFindManyArgs";
import { WeddingInvitationShare } from "../../weddingInvitationShare/base/WeddingInvitationShare";
import { WeddingInvitationShareWhereUniqueInput } from "../../weddingInvitationShare/base/WeddingInvitationShareWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WeddingInvitationControllerBase {
  constructor(
    protected readonly service: WeddingInvitationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WeddingInvitation })
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWeddingInvitation(
    @common.Body() data: WeddingInvitationCreateInput
  ): Promise<WeddingInvitation> {
    return await this.service.createWeddingInvitation({
      data: {
        ...data,

        userId: {
          connect: data.userId,
        },
      },
      select: {
        bride: true,
        createdAt: true,
        events: true,
        galleries: true,
        gifts: true,
        groom: true,
        id: true,
        invites: true,
        moments: true,
        quotes: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WeddingInvitation] })
  @ApiNestedQuery(WeddingInvitationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async weddingInvitations(
    @common.Req() request: Request
  ): Promise<WeddingInvitation[]> {
    const args = plainToClass(WeddingInvitationFindManyArgs, request.query);
    return this.service.weddingInvitations({
      ...args,
      select: {
        bride: true,
        createdAt: true,
        events: true,
        galleries: true,
        gifts: true,
        groom: true,
        id: true,
        invites: true,
        moments: true,
        quotes: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WeddingInvitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async weddingInvitation(
    @common.Param() params: WeddingInvitationWhereUniqueInput
  ): Promise<WeddingInvitation | null> {
    const result = await this.service.weddingInvitation({
      where: params,
      select: {
        bride: true,
        createdAt: true,
        events: true,
        galleries: true,
        gifts: true,
        groom: true,
        id: true,
        invites: true,
        moments: true,
        quotes: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        video: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WeddingInvitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWeddingInvitation(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() data: WeddingInvitationUpdateInput
  ): Promise<WeddingInvitation | null> {
    try {
      return await this.service.updateWeddingInvitation({
        where: params,
        data: {
          ...data,

          userId: {
            connect: data.userId,
          },
        },
        select: {
          bride: true,
          createdAt: true,
          events: true,
          galleries: true,
          gifts: true,
          groom: true,
          id: true,
          invites: true,
          moments: true,
          quotes: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },

          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WeddingInvitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWeddingInvitation(
    @common.Param() params: WeddingInvitationWhereUniqueInput
  ): Promise<WeddingInvitation | null> {
    try {
      return await this.service.deleteWeddingInvitation({
        where: params,
        select: {
          bride: true,
          createdAt: true,
          events: true,
          galleries: true,
          gifts: true,
          groom: true,
          id: true,
          invites: true,
          moments: true,
          quotes: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },

          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/weddingInvitationComments")
  @ApiNestedQuery(WeddingInvitationCommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitationComment",
    action: "read",
    possession: "any",
  })
  async findWeddingInvitationComments(
    @common.Req() request: Request,
    @common.Param() params: WeddingInvitationWhereUniqueInput
  ): Promise<WeddingInvitationComment[]> {
    const query = plainToClass(
      WeddingInvitationCommentFindManyArgs,
      request.query
    );
    const results = await this.service.findWeddingInvitationComments(
      params.id,
      {
        ...query,
        select: {
          address: true,
          comment: true,
          createdAt: true,
          email: true,
          id: true,
          institution: true,
          link: true,
          moment: true,
          name: true,
          phone: true,
          present: true,
          updatedAt: true,

          weddingId: {
            select: {
              id: true,
            },
          },
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/weddingInvitationComments")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async connectWeddingInvitationComments(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationComments: {
        connect: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weddingInvitationComments")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async updateWeddingInvitationComments(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationComments: {
        set: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weddingInvitationComments")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async disconnectWeddingInvitationComments(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationComments: {
        disconnect: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/weddingInvitationShares")
  @ApiNestedQuery(WeddingInvitationShareFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitationShare",
    action: "read",
    possession: "any",
  })
  async findWeddingInvitationShares(
    @common.Req() request: Request,
    @common.Param() params: WeddingInvitationWhereUniqueInput
  ): Promise<WeddingInvitationShare[]> {
    const query = plainToClass(
      WeddingInvitationShareFindManyArgs,
      request.query
    );
    const results = await this.service.findWeddingInvitationShares(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        institution: true,
        link: true,
        name: true,
        open: true,
        updatedAt: true,
        view: true,

        weddingId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/weddingInvitationShares")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async connectWeddingInvitationShares(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationShares: {
        connect: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weddingInvitationShares")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async updateWeddingInvitationShares(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationShares: {
        set: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weddingInvitationShares")
  @nestAccessControl.UseRoles({
    resource: "WeddingInvitation",
    action: "update",
    possession: "any",
  })
  async disconnectWeddingInvitationShares(
    @common.Param() params: WeddingInvitationWhereUniqueInput,
    @common.Body() body: WeddingInvitationShareWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weddingInvitationShares: {
        disconnect: body,
      },
    };
    await this.service.updateWeddingInvitation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
