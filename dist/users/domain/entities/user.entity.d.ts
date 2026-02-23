import { UserRole } from '../../../common/constants/constants';
export declare class User {
    id: string;
    email: string;
    password: string;
    codigo: number;
    rol: UserRole;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
