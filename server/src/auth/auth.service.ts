import { Injectable, UnauthorizedException, BadRequestException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async signup(username: string, email: string, pass: string) {
        this.logger.log(`Attempting signup for username: ${username}, email: ${email}`);
        const existingUser = await this.usersService.findOneByUsername(username);
        if (existingUser) {
            throw new BadRequestException('Username already exists');
        }

        const existingEmail = await this.usersService.findOneByEmail(email);
        if (existingEmail) {
            throw new BadRequestException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(pass, 10);
        this.logger.log(`Password hashed for ${username}`);
        const user = await this.usersService.create({
            username,
            email,
            password: hashedPassword,
        });

        this.logger.log(`User created with ID: ${user.id}`);

        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            message: 'User registered successfully',
        };
    }

    async login(username: string, pass: string) {
        this.logger.log(`Attempting login for username: ${username}`);
        const user = await this.usersService.findOneByUsername(username);
        if (!user) {
            this.logger.warn(`Login failed: user not found - ${username}`);
            throw new UnauthorizedException('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            this.logger.warn(`Login failed: password mismatch - ${username}`);
            throw new UnauthorizedException('Invalid credentials');
        }

        this.logger.log(`Login successful for ${username}`);

        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            message: 'Logged in successfully',
        };
    }
}
