import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateConsultationDto {
  @ApiProperty({ example: "Air conditioner cleaning inquiry" })
  @IsString()
  title: string

  @ApiProperty({ example: "waiting" })
  @IsString()
  status?: string
}
