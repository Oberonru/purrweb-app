import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColumnService } from './column.service';

@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Get()
  getColumns() {
    return this.columnService.getColumns();
  }

  @Post()
  addColumn(@Body() data) {
    return this.columnService.addColumn(data);
  }
}
