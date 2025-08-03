import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  phone?: string;

  @IsString()
  address?: string;

  @IsString()
  userType?: 'CUSTOMER' | 'BUSINESS' = 'CUSTOMER';
}
