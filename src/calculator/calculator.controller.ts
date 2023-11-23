import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CalculatorService } from './calculator.service';
import { CommonCalculatorDto } from './dto/commonCalculator.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('add')
  @UsePipes(new ValidationPipe())
  add(@Body() commonCalculatorDto: CommonCalculatorDto): number {
    return this.calculatorService.add(commonCalculatorDto);
  }

  @Post('subtract')
  @UsePipes(new ValidationPipe())
  subtract(@Body() commonCalculatorDto: CommonCalculatorDto): number {
    return this.calculatorService.subtract(commonCalculatorDto);
  }

  @Post('multiply')
  @UsePipes(new ValidationPipe())
  multiply(@Body() commonCalculatorDto: CommonCalculatorDto): number {
    return this.calculatorService.multiply(commonCalculatorDto);
  }

  @Post('divide')
  @UsePipes(new ValidationPipe())
  divide(@Body() commonCalculatorDto: CommonCalculatorDto): number {
    return this.calculatorService.divide(commonCalculatorDto);
  }
}
