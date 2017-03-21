export const actionTypes = {
    ADD_TODO: "ADD_TODO",
    FILTER_TODOS: "FILTER_TODOS",
    TOGGLE_DONE: "TOGGLE_DONE",
};

export function addTodo(text: string) {
    return {
        type: actionTypes.ADD_TODO,
        text,
    };
}

export function filterTodos(text: string) {
    return {
        filterText: text,
        type: actionTypes.FILTER_TODOS,
    };
}

export function toggleDone(id: number) {
    return {
        id,
        type: actionTypes.TOGGLE_DONE,
    };
}
