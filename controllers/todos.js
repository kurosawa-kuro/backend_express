const Todo = require('../models/todo');

class TodosController {
    // Todoリストの初期化
    static todos = [
        new Todo(1, 'todo1', false),
        new Todo(2, 'todo2', true),
        new Todo(3, 'todo3', false),
    ];

    // Todoリストの取得
    static getAll(req, res, next) {
        try {
            res.json(TodosController.todos);
        } catch (err) {
            next(err);
        }
    }

    // 新しいTodoの作成
    static create(req, res, next) {
        try {
            const todo = Todo.fromRequestBody(req.body);
            TodosController.todos.push(todo);
            res.status(201).json(todo);
        } catch (err) {
            next(err);
        }
    }

    // 特定のTodoの取得
    static getById(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const todo = TodosController.todos.find((todo) => todo.id === id);
            if (!todo) {
                res.status(404).json({ error: 'Todo not found' });
            } else {
                res.json(todo);
            }
        } catch (err) {
            next(err);
        }
    }

    // 特定のTodoの更新
    static update(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const todo = TodosController.todos.find((todo) => todo.id === id);
            if (!todo) {
                res.status(404).json({ error: 'Todo not found' });
            } else {
                const { title, completed } = req.body;
                todo.title = title || todo.title;
                todo.completed = completed || todo.completed;
                res.json(todo);
            }
        } catch (err) {
            next(err);
        }
    }

    // 特定のTodoの削除
    static delete(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const todoIndex = TodosController.todos.findIndex(
                (todo) => todo.id === id
            );
            if (todoIndex === -1) {
                res.status(404).json({ error: 'Todo not found' });
            } else {
                TodosController.todos.splice(todoIndex, 1);
                res.sendStatus(204);
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TodosController;
