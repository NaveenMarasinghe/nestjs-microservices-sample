import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  hangleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATION', data);
  }
}
