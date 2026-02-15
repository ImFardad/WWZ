import { Controller, Post, Body, HttpCode, HttpStatus, Logger, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signup(@Body() signupDto: Record<string, string>) {
        this.logger.log(`Signup request received: ${JSON.stringify(signupDto)}`);
        if (!signupDto.username || !signupDto.email || !signupDto.password) {
            this.logger.warn('Signup data missing fields');
            throw new BadRequestException('Missing required fields');
        }
        return this.authService.signup(signupDto.username, signupDto.email, signupDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginDto: Record<string, string>) {
        this.logger.log(`Login request received for user: ${loginDto.username}`);
        return this.authService.login(loginDto.username, loginDto.password);
    }
}
