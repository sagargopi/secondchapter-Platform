import { Controller, Get, Post, Put, Body, Param, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import type { QuotationsService } from "./quotations.service"
import type { CreateQuotationDto } from "./dto/create-quotation.dto"
import { ApiTags, ApiBearerAuth, ApiOperation } from "@nestjs/swagger"
import { GetUser } from "../auth/get-user.decorator"

@ApiTags("Quotations")
@Controller("quotations")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class QuotationsController {
  constructor(private quotationsService: QuotationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get user quotations' })
  async getQuotations(@GetUser() user: any) {
    return this.quotationsService.getQuotationsByUserId(user.id);
  }

  @Post()
  @ApiOperation({ summary: "Create new quotation" })
  async createQuotation(@Body() createQuotationDto: CreateQuotationDto, @GetUser() user: any) {
    return this.quotationsService.createQuotation(user.id, createQuotationDto)
  }

  @Put(":id/status")
  @ApiOperation({ summary: "Update quotation status" })
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.quotationsService.updateQuotationStatus(id, status)
  }
}
