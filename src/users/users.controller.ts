import { Controller, Get, Put, Body, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import type { UsersService } from "./users.service"
import type { UpdateUserDto } from "./dto/update-user.dto"
import { ApiTags, ApiBearerAuth, ApiOperation } from "@nestjs/swagger"

@ApiTags("Users")
@Controller("users")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("profile")
  @ApiOperation({ summary: "Get user profile" })
  async getProfile(user: any) {
    return this.usersService.getProfile(user.id)
  }

  @Put("profile")
  @ApiOperation({ summary: "Update user profile" })
  async updateProfile(user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(user.id, updateUserDto)
  }
}
