interface ITodo {
    id: number,
    text: string,
    isDone: boolean
}
interface TodoItemProps {
    item: ITodo,
    dispatchTodoToggled: (id: number) => void
}

interface TodoItemsProps {
    todos: ITodo[]
}
interface AddTodoProps {
    dispatchAddTodo: (text: string) => void
}

interface FilterProps {
    itemsCount:number,
    disptachFilterChange: (filterValue: string) => void
}