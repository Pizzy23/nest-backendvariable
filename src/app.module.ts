import { Module } from '@nestjs/common';
import { ContextModule } from './context/context.module';
import { ConfigModule } from './config';
import { EntityModule } from './context/entity/entity.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [ConfigModule, ContextModule, EntityModule],
  providers: [],
})
export class AppModule {}
