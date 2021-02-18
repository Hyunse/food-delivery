import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.users.findOne({ email });

      if (exists) {
        return {
          ok: false,
          error: 'There is a user with that email already',
        };
      }

      await this.users.save(this.users.create({ email, password, role }));

      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: "Couldn't create account",
      };
    }
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.users.findOne({ email });

      console.log(this.jwtService.hello());
      if (!user) {
        return {
          ok: false,
          error: 'User Not Exist',
        };
      }

      const check = await user.checkPassword(password);

      if (!check) {
        // Wrong Password
        return {
          ok: false,
          error: 'Wrong Password',
        };
      }

      return {
        ok: true,
        token: 'ok',
      };
    } catch (error) {}
  }
}
