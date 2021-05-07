import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return {
      event: await this.eventsService.update(+id, updateEventDto),
    };
  }
}
