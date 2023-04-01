const prisma = require('../prisma/client');

class Todo {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    static async create(title, completed = false) {
        const todo = await prisma.todo.create({
            data: {
                title,
                completed,
            },
        });
        return new Todo(todo.id, todo.title, todo.completed);
    }

    static async getAll() {
        const todos = await prisma.todo.findMany();
        return todos.map((todo) => new Todo(todo.id, todo.title, todo.completed));
    }

    static async getById(id) {
        const todo = await prisma.todo.findUnique({
            where: { id },
        });
        if (!todo) {
            throw new Error('Todo not found');
        }
        return new Todo(todo.id, todo.title, todo.completed);
    }

    async save() {
        await prisma.todo.update({
            where: { id: this.id },
            data: {
                title: this.title,
                completed: this.completed,
            },
        });
    }

    static async delete(id) {
        await prisma.todo.delete({
            where: { id },
        });
    }

    static generateId() {
        if (!this.latestId) {
            this.latestId = 0;
        }
        return ++this.latestId;
    }
}

module.exports = Todo;
