import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentsMethodService } from "./paymentsMethod.service";
import { PaymentsMethodControllerBase } from "./base/paymentsMethod.controller.base";

@swagger.ApiTags("paymentsMethods")
@common.Controller("paymentsMethods")
export class PaymentsMethodController extends PaymentsMethodControllerBase {
  constructor(
    protected readonly service: PaymentsMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
