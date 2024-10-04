import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
        .forRoutes('users ')
      .apply(AuthMiddleware)
        .forRoutes("users")
  }
}
