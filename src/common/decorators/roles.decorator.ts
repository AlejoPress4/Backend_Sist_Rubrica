import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../constants/constants';
import { Rol } from '../enums';

export const Roles = (...roles: Rol[]) => SetMetadata(ROLES_KEY, roles);
