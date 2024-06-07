import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('github')
  @UseGuards(AuthGuard('oauth'))
  async githubLogin() {
    // Initiates the OAuth login flow
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('oauth'))
  async githubCallback(@Req() req) {
    // Handles the OAuth callback and returns a token or redirects
    const jwt = await this.authService.validateOAuthLogin(req.user);
    return { jwt };
  }
}
