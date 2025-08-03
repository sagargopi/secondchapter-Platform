import { IsString, IsNumber, IsEnum } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateQuotationDto {
  @ApiProperty({ example: "Air Conditioner Cleaning" })
  @IsString()
  serviceName: string

  @ApiProperty({ example: "Clean Air Co." })
  @IsString()
  companyName: string

  @ApiProperty({ example: 150000 })
  @IsNumber()
  price: number

  @ApiProperty({ enum: ["PENDING", "ACCEPTED", "REJECTED"], example: "PENDING" })
  @IsEnum(["PENDING", "ACCEPTED", "REJECTED"])
  status?: "PENDING" | "ACCEPTED" | "REJECTED"
}
