import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentsMethodModuleBase } from "./base/paymentsMethod.module.base";
import { PaymentsMethodService } from "./paymentsMethod.service";
import { PaymentsMethodController } from "./paymentsMethod.controller";
import { PaymentsMethodResolver } from "./paymentsMethod.resolver";

@Module({
  imports: [PaymentsMethodModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentsMethodController],
  providers: [PaymentsMethodService, PaymentsMethodResolver],
  exports: [PaymentsMethodService],
})
export class PaymentsMethodModule {}
