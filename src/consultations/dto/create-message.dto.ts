import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateMessageDto {
  @ApiProperty({ example: "Hello, I need help with my service request" })
  @IsString()
  text: string

  @ApiProperty({ example: "user" })
  @IsString()
  sender: string
}
