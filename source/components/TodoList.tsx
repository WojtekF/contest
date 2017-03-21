import {List} from "material-ui/List";
import * as React from "react";
import { connect } from "react-redux";
import ConnectedTodoItem from "./TodoItem";

export class TodoList extends React.Component<TodoItemsProps, void> {

    public render() {
        const todos = this.props.todos.map((t) => <ConnectedTodoItem key={t.id} item={t}/>);
        return(
            <div >
                <List>
                    {todos}
                </List>
            </div>
            );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
    return {
        todos: state.reduceTodos.filteredTodos,
    };
};

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;
