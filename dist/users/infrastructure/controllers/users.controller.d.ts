import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { FilterUsersDto } from '../../application/dtos/filter-users.dto';
import { UserResponseDto } from '../../application/dtos/user-response.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<ApiResponseDto<UserResponseDto>>;
    findAll(filter: FilterUsersDto): Promise<ApiResponseDto<UserResponseDto[]>>;
    findById(id: string): Promise<ApiResponseDto<UserResponseDto>>;
    update(id: string, dto: UpdateUserDto): Promise<ApiResponseDto<UserResponseDto>>;
    desactivar(id: string): Promise<ApiResponseDto<UserResponseDto>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
