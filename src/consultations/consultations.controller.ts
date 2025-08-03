import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import type { ConsultationsService } from "./consultations.service"
import type { CreateConsultationDto } from "./dto/create-consultation.dto"
import type { CreateMessageDto } from "./dto/create-message.dto"
import { ApiTags, ApiBearerAuth, ApiOperation } from "@nestjs/swagger"

@ApiTags("Consultations")
@Controller("consultations")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ConsultationsController {
  constructor(private consultationsService: ConsultationsService) {}

  @Get()
  @ApiOperation({ summary: "Get user consultations" })
  async getConsultations(user: any) {
    return this.consultationsService.getConsultationsByUserId(user.id)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get consultation by ID' })
  async getConsultation(@Param('id') id: string) {
    return this.consultationsService.getConsultationById(id);
  }

  @Post()
  @ApiOperation({ summary: "Create new consultation" })
  async createConsultation(user: any, @Body() createConsultationDto: CreateConsultationDto) {
    return this.consultationsService.createConsultation(user.id, createConsultationDto)
  }

  @Post(":id/messages")
  @ApiOperation({ summary: "Add message to consultation" })
  async addMessage(@Param('id') id: string, @Body() createMessageDto: CreateMessageDto) {
    return this.consultationsService.addMessage(id, createMessageDto)
  }
}
