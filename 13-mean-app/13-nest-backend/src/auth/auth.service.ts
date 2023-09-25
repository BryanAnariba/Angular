import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload';
import { LoginResponse } from './interfaces/login-response';
import { CreateUserDto, LoginUserDto, RegisterUserDto, UpdateUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor (
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...restOfUser } = createUserDto;
      // TODO: encrypt pwd
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...restOfUser
      });
      // TODO: save user
      await newUser.save();
      const { password: _, ...user } = newUser.toJSON();
      // TODO: generate jwt token
      return user;
    } catch ( error ) {
      if ( error.code === 11000 ) {
        throw new BadRequestException(`${ createUserDto.email } already exist`)
      }
      throw new InternalServerErrorException(`Somenthing went wrong ${error.message}`);
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({}, {password: false});
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const user = await this.create(registerUserDto);
    return {
      user: user,
      token: this.getJwt({id: user._id})
    }
  }

  async login (loginUserDto: LoginUserDto): Promise<LoginResponse> {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ email: email });
    if ( !user ) {
      throw new BadRequestException(`Invalid Credentials - Incorrect Email`);
    }
    if ( !bcryptjs.compareSync(password, user.password) ) {
      throw new BadRequestException(`Invalid Credentials - Incorrect Password`);
    }
    const { password: _, ...restOfUser } = user.toJSON()
    return {
      user: restOfUser,
      token: this.getJwt({ id: user.id })
    }
  }

  getJwt ( payload: JwtPayload ) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async findUserById ( id: string ) {
    const user = await this.userModel.findById(id);
    const { password: _, ...restOfUser } = user.toJSON();
    return restOfUser;
  }
}
