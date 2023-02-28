import {
  Logger,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TodoDTO as Todo } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Promise<Todo> {
    return this.todoService.findTodoById(id).catch((error) => {
      this.logger.error(error);
      throw new NotFoundException('Todo not found');
    });
  }

  @Post()
  create(@Body('title') title: string): Promise<Todo> {
    return this.todoService.create(new Todo(title));
  }

  @Put(':id')
  toggleTodo(@Param('id') id: number): Promise<Todo> {
    return this.todoService.toggleTodo(id).catch((error) => {
      this.logger.error(error);
      throw new NotFoundException('Todo not found');
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<number> {
    return this.todoService.remove(id).catch((error) => {
      this.logger.error(error);
      throw new NotFoundException('Todo not found');
    });
  }

  constructor(private readonly todoService: TodoService) {}
}
