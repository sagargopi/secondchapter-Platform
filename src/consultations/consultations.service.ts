import { Injectable } from "@nestjs/common"
import type { PrismaService } from "../prisma/prisma.service"
import type { CreateConsultationDto } from "./dto/create-consultation.dto"
import type { CreateMessageDto } from "./dto/create-message.dto"

@Injectable()
export class ConsultationsService {
  constructor(private prisma: PrismaService) {}

  async getConsultationsByUserId(userId: string) {
    return this.prisma.consultation.findMany({
      where: { userId },
      include: {
        messages: {
          orderBy: { timestamp: "desc" },
          take: 1,
        },
      },
      orderBy: { updatedAt: "desc" },
    })
  }

  async getConsultationById(consultationId: string) {
    return this.prisma.consultation.findUnique({
      where: { id: consultationId },
      include: {
        messages: {
          orderBy: { timestamp: "asc" },
        },
      },
    })
  }

  async createConsultation(userId: string, createConsultationDto: CreateConsultationDto) {
    return this.prisma.consultation.create({
      data: {
        ...createConsultationDto,
        userId,
      },
    })
  }

  async addMessage(consultationId: string, createMessageDto: CreateMessageDto) {
    const message = await this.prisma.message.create({
      data: {
        ...createMessageDto,
        consultationId,
      },
    })

    // Update consultation's last message and message count
    await this.prisma.consultation.update({
      where: { id: consultationId },
      data: {
        lastMessage: createMessageDto.text,
        messageCount: { increment: 1 },
        updatedAt: new Date(),
      },
    })

    return message
  }
}
