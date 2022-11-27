import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { MealsService } from 'src/meals/meals.service';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return { success: true, message: users };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async addUser({ email, role, firstName, lastName }: Partial<User>) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          role,
        },
      });

      return { success: true, message: newUser };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findUser(userId: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      if (!user)
        throw new HttpException('Cannot find user', HttpStatus.NOT_FOUND);
      return { success: true, message: user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
