import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriptionPlansService } from './subscription-plans.service';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';

@Controller('api/subscription-plans')
export class SubscriptionPlansController {
  constructor(
    private readonly subscriptionPlansService: SubscriptionPlansService,
  ) {}

  @Get()
  async fetchAll() {
    return {
      events: await this.subscriptionPlansService.fetchAll(),
    };
  }

  @Post()
  create(@Body() createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.subscriptionPlansService.create(createSubscriptionPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionPlansService.remove(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubscriptionPlanDto: UpdateSubscriptionPlanDto,
  ) {
    return {
      event: await this.subscriptionPlansService.update(
        +id,
        updateSubscriptionPlanDto,
      ),
    };
  }
}
