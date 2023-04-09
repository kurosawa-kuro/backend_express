const TodoWithoutDb = require('../models/todo_without_db');

class TodosWithoutDbController {
    // Todoリストの初期化
    static todos = [
        new TodoWithoutDb(1, 'todo1', false),
        new TodoWithoutDb(2, 'todo2', true),
        new TodoWithoutDb(3, 'todo3', false),
    ];

    // Todoリストの取得
    static getAll(req, res, next) {
        try {
            res.json(TodosWithoutDbController.todos);
        } catch (err) {
            next(err);
        }
    }

    // 新しいTodoの作成
    static create(req, res, next) {
        try {
            const todo = TodoWithoutDb.fromRequestBody(req.body);
            TodosWithoutDbController.todos.push(todo);
            res.status(201).json(todo);
        } catch (err) {
            next(err);
        }
    }

    // 特定のTodoの取得
    static getById(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const todo = TodosWithoutDbController.todos.find((todo) => todo.id === id);
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
            const todo = TodosWithoutDbController.todos.find((todo) => todo.id === id);
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
            const todoIndex = TodosWithoutDbController.todos.findIndex(
                (todo) => todo.id === id
            );
            if (todoIndex === -1) {
                res.status(404).json({ error: 'Todo not found' });
            } else {
                TodosWithoutDbController.todos.splice(todoIndex, 1);
                res.sendStatus(204);
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TodosWithoutDbController;
