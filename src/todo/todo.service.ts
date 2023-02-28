import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findTodoById(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id: id }).then((todo) => {
      if (!todo) {
        throw new Error('Todo not found');
      }
      return todo;
    });
  }

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  toggleTodo(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id: id }).then((todo) => {
      todo.completed = !todo.completed;
      this.todoRepository.save(todo);
      return todo;
    });
  }

  async remove(id: number): Promise<number> {
    await this.todoRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new Error('Todo not found');
      }
    });
    return id;
  }
}
