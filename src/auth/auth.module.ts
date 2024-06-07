import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OAuthStrategy } from './strategies/oauth.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, OAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
