import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from './Models/role.model';
import { UserModel } from './Models/user.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DATABASE_HOST,
      database: process.env.MONGODB_DATABASE,
      port: `${process.env.PORT}` as unknown as number,
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [RoleModel, UserModel],
    }),
  ],
})
export class DatabaseModule {
}
