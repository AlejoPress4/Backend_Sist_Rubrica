import { UserRole } from '../../../common/constants/constants';
export declare class User {
    id: string;
    email: string;
    password: string;
    rol: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
