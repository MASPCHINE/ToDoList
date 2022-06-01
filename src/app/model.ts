export class Model {
  user;
  items;

  constructor() {
    this.user = 'Tarık';
    this.items = [
      new TodoItem('Breakfast', true),
      new TodoItem('Fitness', false),
      new TodoItem('Bills', false),
      new TodoItem('Cinema', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
