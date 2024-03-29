import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ToursModule } from './tours/tours.module';
import { CreatorsModule } from './creators/creators.module';
import { SubscriptionPlansModule } from './subscription-plans/subscription-plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ToursModule,
    CreatorsModule,
    SubscriptionPlansModule,
    SubscriptionsModule,
    TagsModule,
  ],
})
export class AppModule {}
