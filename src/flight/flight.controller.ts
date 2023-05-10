import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightMSG } from 'src/common/constants';

@Controller('api/v1/flight')
export class FlightController {
  constructor(
    private readonly flightService: FlightService, // private readonly passengerService: PassengerService,
  ) {}
  @MessagePattern(FlightMSG.CREATE)
  create(@Payload() flightDto: FlightDTO) {
    return this.flightService.create(flightDto);
  }

  @MessagePattern(FlightMSG.FIND_ALL)
  findAll() {
    return this.flightService.findAll();
  }

  @MessagePattern(FlightMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.flightService.findOne(id);
  }

  @MessagePattern(FlightMSG.UPDATE)
  update(@Payload() { id, flightDto }: { id: string; flightDto: FlightDTO }) {
    return this.flightService.update(id, flightDto);
  }

  @MessagePattern(FlightMSG.DELETE)
  delete(@Payload() id: string) {
    return this.flightService.delete(id);
  }

  @MessagePattern(FlightMSG.ADD_PASSENGER)
  addPassenger(
    @Payload() { id, passengerId }: { id: string; passengerId: string },
  ) {
    return this.flightService.addPassenger(id, passengerId);
  }
}
