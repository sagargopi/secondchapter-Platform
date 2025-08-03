import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { PrismaModule } from "./prisma/prisma.module"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { QuotationsModule } from "./quotations/quotations.module"
import { ConsultationsModule } from "./consultations/consultations.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || "fallback-secret",
      signOptions: { expiresIn: "24h" },
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    QuotationsModule,
    ConsultationsModule,
  ],
})
export class AppModule {}
