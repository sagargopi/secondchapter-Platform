import { Injectable } from "@nestjs/common"
import type { PrismaService } from "../prisma/prisma.service"
import type { CreateQuotationDto } from "./dto/create-quotation.dto"

@Injectable()
export class QuotationsService {
  constructor(private prisma: PrismaService) {}

  async getQuotationsByUserId(userId: string) {
    return this.prisma.quotation.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    })
  }

  async createQuotation(userId: string, createQuotationDto: CreateQuotationDto) {
    return this.prisma.quotation.create({
      data: {
        ...createQuotationDto,
        userId,
      },
    })
  }

  async updateQuotationStatus(quotationId: string, status: string) {
    return this.prisma.quotation.update({
      where: { id: quotationId },
      data: { status: status as any },
    })
  }
}
