import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export default class JwtStrategy extends PassportStrategy(Strategy) {

  constructor() {
    super({
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.token,
    });
  }

  validate(payload: any) {
    return { ...payload };
  }
}