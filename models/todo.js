class Todo {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    static fromRequestBody(reqBody) {
        const { title, completed } = reqBody;
        return new Todo(
            Todo.generateId(),
            title || '',
            completed || false
        );
    }

    static generateId() {
        if (!this.latestId) {
            this.latestId = 0;
        }
        return ++this.latestId;
    }
}

module.exports = Todo;
