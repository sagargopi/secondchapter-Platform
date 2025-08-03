import { IsEmail, IsString, IsEnum } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class LoginDto {
  @ApiProperty({ example: "customer@email.com" })
  @IsEmail()
  email: string

  @ApiProperty({ example: "password123" })
  @IsString()
  password: string

  @ApiProperty({ enum: ["CUSTOMER", "BUSINESS"], example: "CUSTOMER" })
  @IsEnum(["CUSTOMER", "BUSINESS"])
  userType: "CUSTOMER" | "BUSINESS"
}
