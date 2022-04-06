import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requireRole = this.reflector.getAllAndOverride<Role[]>('ROLE_KEY', [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('requireRole', requireRole);

    if (!requireRole) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log('user', user);

    return requireRole.some((role) => user.roles?.includes(role));
  }
}
