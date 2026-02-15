import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async findOneByUsername(username: string): Promise<User | null> {
        return this.userModel.findOne({ where: { username } });
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ where: { email } });
    }

    async create(userData: Partial<User>): Promise<User> {
        return this.userModel.create(userData as any);
    }
}
