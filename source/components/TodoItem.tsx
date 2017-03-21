import {ListItem} from "material-ui/List";
import Done from "material-ui/svg-icons/action/done";
import * as React from "react";
import { connect } from "react-redux";
import {toggleDone} from "../redux/todoActions";

export class TodoItem extends React.PureComponent<TodoItemProps, void> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <ListItem
                primaryText={this.props.item.text}
                leftIcon={this.props.item.isDone ? <Done/> : null}
                onTouchTap={this.onTouchTap}
            />);
    }

    private onTouchTap = () => this.props.dispatchTodoToggled(this.props.item.id);
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        dispatchTodoToggled: (id: number) => dispatch(toggleDone(id)),
    };
};

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

export default ConnectedTodoItem;
