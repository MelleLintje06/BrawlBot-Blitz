import { User } from '../../utils/typeorm/entities/User';
import { UpdateUserDetails, UserDetails } from 'common/types/User';

export interface IUserService {
  createUser(details: UserDetails): Promise<User>;
  findUser(discordId: string): Promise<User | undefined>;
  updateUser(user: User, details: UpdateUserDetails): Promise<User>;
}
