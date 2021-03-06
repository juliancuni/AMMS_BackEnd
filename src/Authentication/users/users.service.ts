import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { RegisterUserDto } from 'src/Authentication/auth/dto/register-user.dto';
import { PaginationDto } from 'src/helpers/shared/pagination.dto';
import { RoleDto } from 'src/Authentication/roles/dto/role.dto';
import { RolesService } from 'src/Authentication/roles/roles.service';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>,
    private readonly roleService: RolesService,
  ) { }

  async findAll(options: IPaginationOptions, relations: string[], where: string): Promise<Pagination<UserDto>> {
    where = JSON.parse(where);
    return await paginate<UserDto>(this.userRepo, options, { relations: (typeof relations === "string") ? [relations] : relations, where });
  }

  async findOne(id: string, findOptions?: FindOneOptions): Promise<UserDto> {
    this._isUUID(id);
    const user = await this.userRepo.findOne(id, findOptions);
    if (!user) throw new NotFoundException(`userId ${id} nuk egziston!`)
    return user;
  }

  async create(userDto: UserDto): Promise<UserDto> {
    let roles = [];
    if (userDto.roles) roles = await Promise.all(userDto.roles.map((role) => this.preloadRole(role)));
    const user = await this.userRepo.findOne({ username: userDto.username });
    if (user) throw new BadRequestException(`Egziston i regjistruar ky username: "${user.username}"`);
    let { password } = userDto;
    password = await this._hashPass(password);
    const newUser = this.userRepo.create({ ...userDto, password, roles });
    return await this.userRepo.save(newUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    this._isUUID(id);
    const roles = updateUserDto.roles && (await Promise.all(updateUserDto.roles.map((role) => this.preloadRole(role))));
    const user = await this.userRepo.preload({ id, ...updateUserDto, roles });
    if (!user) throw new NotFoundException(`userId ${id} nuk egziston`);
    return await this.userRepo.save(user);
  }

  async delete(id: string) {
    this._isUUID(id);
    const user = await this.findOne(id);
    return await this.userRepo.softRemove(user);
  }

  /** Auth module related methods */
  async registerAuthPublic(registerUserDto: RegisterUserDto) {
    const newUser = this.userRepo.create(registerUserDto);
    return await this.userRepo.save(newUser);
  }

  async findUserFromAuthPublic(conditions: any) {
    let { identity, password, phone } = conditions;
    let user: UserDto;
    if (!identity) throw new BadRequestException('Username ose Email jane bosh.');
    if (!password) throw new BadRequestException('Password eshte bosh');
    (this._isEmail(identity)) ? user = await this.userRepo.findOne({ email: identity }) : user = await this.userRepo.findOne({ username: identity });
    return user;
  }

  private async preloadRole(roleDto: RoleDto) {
    const existingRole = await this.roleService.findOneByRoleName(roleDto.role);
    if (existingRole) return existingRole;
    return await this.roleService.create(roleDto);
  }

  private _isUUID(uuid: string) {
    let s: any = "" + uuid;
    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) throw new NotFoundException(`userId ${uuid} nuk egziston!!`);
  }


  private _isEmail(email: string) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  private async _hashPass(plainTextPass: string): Promise<string> {
    return await bcrypt.hash(plainTextPass, 12);
  }

}
