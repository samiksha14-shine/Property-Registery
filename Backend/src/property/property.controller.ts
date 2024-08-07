// import { Controller } from '@nestjs/common';

// @Controller('property')
// export class PropertyController {}

// src/property/property.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post('issue')
  async issue(@Body() body: any) {
    return this.propertyService.issue(body);
  }

  @Post('update')
  async update(@Body() body: any) {
    return this.propertyService.update(body);
  }

  @Get(':propertyId')
  async getProperty(@Param('propertyId') propertyId: string) {
    return this.propertyService.getProperty(propertyId);
  }
}
