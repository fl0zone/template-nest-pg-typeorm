export class TodoDTO {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
