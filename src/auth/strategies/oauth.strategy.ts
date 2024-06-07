import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-oauth2';

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, 'oauth') {
  constructor(private configService: ConfigService) {
    super({
      authorizationURL: 'https://github.com/login/oauth/authorize',
      tokenURL: 'https://github.com/login/oauth/access_token',
      clientID: configService.get<string>('githubClientId'),
      clientSecret: configService.get<string>('githubClientSecret'),
      callbackURL: 'http://localhost:3000/auth/github/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const user = {
      accessToken,
      refreshToken,
      profile,
    };
    done(null, user);
  }
}
