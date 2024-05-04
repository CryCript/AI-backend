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
import { PaymentsMethodService } from "../paymentsMethod.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentsMethodCreateInput } from "./PaymentsMethodCreateInput";
import { PaymentsMethod } from "./PaymentsMethod";
import { PaymentsMethodFindManyArgs } from "./PaymentsMethodFindManyArgs";
import { PaymentsMethodWhereUniqueInput } from "./PaymentsMethodWhereUniqueInput";
import { PaymentsMethodUpdateInput } from "./PaymentsMethodUpdateInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentsMethodControllerBase {
  constructor(
    protected readonly service: PaymentsMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentsMethod })
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaymentsMethod(
    @common.Body() data: PaymentsMethodCreateInput
  ): Promise<PaymentsMethod> {
    return await this.service.createPaymentsMethod({
      data: data,
      select: {
        account: true,
        createdAt: true,
        id: true,
        logo: true,
        nameRef: true,
        noRef: true,
        paymentType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentsMethod] })
  @ApiNestedQuery(PaymentsMethodFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentsMethods(
    @common.Req() request: Request
  ): Promise<PaymentsMethod[]> {
    const args = plainToClass(PaymentsMethodFindManyArgs, request.query);
    return this.service.paymentsMethods({
      ...args,
      select: {
        account: true,
        createdAt: true,
        id: true,
        logo: true,
        nameRef: true,
        noRef: true,
        paymentType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentsMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentsMethod(
    @common.Param() params: PaymentsMethodWhereUniqueInput
  ): Promise<PaymentsMethod | null> {
    const result = await this.service.paymentsMethod({
      where: params,
      select: {
        account: true,
        createdAt: true,
        id: true,
        logo: true,
        nameRef: true,
        noRef: true,
        paymentType: true,
        status: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PaymentsMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaymentsMethod(
    @common.Param() params: PaymentsMethodWhereUniqueInput,
    @common.Body() data: PaymentsMethodUpdateInput
  ): Promise<PaymentsMethod | null> {
    try {
      return await this.service.updatePaymentsMethod({
        where: params,
        data: data,
        select: {
          account: true,
          createdAt: true,
          id: true,
          logo: true,
          nameRef: true,
          noRef: true,
          paymentType: true,
          status: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PaymentsMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentsMethod(
    @common.Param() params: PaymentsMethodWhereUniqueInput
  ): Promise<PaymentsMethod | null> {
    try {
      return await this.service.deletePaymentsMethod({
        where: params,
        select: {
          account: true,
          createdAt: true,
          id: true,
          logo: true,
          nameRef: true,
          noRef: true,
          paymentType: true,
          status: true,
          updatedAt: true,
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
  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: PaymentsMethodWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        accessTo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        evidence: true,
        id: true,

        paymentMethod: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,

        userId: {
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

  @common.Post("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "update",
    possession: "any",
  })
  async connectPayments(
    @common.Param() params: PaymentsMethodWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updatePaymentsMethod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "update",
    possession: "any",
  })
  async updatePayments(
    @common.Param() params: PaymentsMethodWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updatePaymentsMethod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "PaymentsMethod",
    action: "update",
    possession: "any",
  })
  async disconnectPayments(
    @common.Param() params: PaymentsMethodWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updatePaymentsMethod({
      where: params,
      data,
      select: { id: true },
    });
  }
}
