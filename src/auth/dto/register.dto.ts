import { IsEmail, IsString, IsEnum, IsOptional, MinLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class RegisterDto {
  @ApiProperty({ example: "customer@email.com" })
  @IsEmail()
  email: string

  @ApiProperty({ example: "password123" })
  @IsString()
  @MinLength(6)
  password: string

  @ApiProperty({ example: "김고객" })
  @IsString()
  name: string

  @ApiProperty({ example: "010-1234-5678", required: false })
  @IsOptional()
  @IsString()
  phone?: string

  @ApiProperty({ enum: ["CUSTOMER", "BUSINESS"], example: "CUSTOMER" })
  @IsEnum(["CUSTOMER", "BUSINESS"])
  userType: "CUSTOMER" | "BUSINESS"
}
