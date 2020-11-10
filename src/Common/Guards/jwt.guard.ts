import { AuthGuard } from '@nestjs/passport';

/**
 * Guard for Auth with JWS
 * @class JwtGuard
 */
export default class JwtGuard extends AuthGuard('JWT'){}