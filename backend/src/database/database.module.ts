
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/features/contacts/entities/contacts.entity';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Contact],
  synchronize: false,
}

@Module({ 
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
           
            return {...dataSourceOptions,}
        }
    })],
})

export class DatabaseModule {}
