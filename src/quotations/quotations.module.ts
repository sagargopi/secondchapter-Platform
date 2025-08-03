import { Module } from "@nestjs/common"
import { QuotationsController } from "./quotations.controller"
import { QuotationsService } from "./quotations.service"

@Module({
  controllers: [QuotationsController],
  providers: [QuotationsService],
})
export class QuotationsModule {}
