import {combineReducers} from "redux";
import {actionTypes} from "./todoActions";

const initialState = {
    filterText: "",
    filteredTodos: [],
    todos: [],
};

function filterTodos(todos, filterText) {
    return filterText.length === 0 || !filterText.trim() ?
     todos : todos.filter((t) => t.text.indexOf(filterText) != -1);
}

export function reduceTodos(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FILTER_TODOS:
        return Object.assign({}, state, {
                filterText: action.filterText,
                filteredTodos: filterTodos(state.todos, action.filterText),
        });
        case actionTypes.ADD_TODO:
            const todos = state.todos;
            const newTodos = [...todos, {id: todos.length + 1, text: action.text, isDone: false}];
            return Object.assign({}, state, {
                filteredTodos: filterTodos(newTodos, state.filterText),
                todos: newTodos,
            });
        case actionTypes.TOGGLE_DONE:
            const ar = state.todos.map((t) => t.id != action.id ? t : Object.assign({}, t, {isDone: !t.isDone}));
            return Object.assign({}, state, {
                filteredTodos: filterTodos(ar, state.filterText),
                todos: ar,
            });
        default:
            return state;
    }
}
const combined = combineReducers({reduceTodos});
export default combined;
