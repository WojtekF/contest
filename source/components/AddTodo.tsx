import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";
import { connect } from "react-redux";
import {addTodo} from "../redux/todoActions";
import MyTextField from "./MyTextField";

export class AddTodo extends React.Component<AddTodoProps, void> {

    private textField;
    private ref = {
        textField: (t) => this.textField = t,
    };

    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    public render() {
        return (
            <div>
                <MyTextField ref={this.ref.textField} floatingLabelText="New todo"/>
                <RaisedButton onTouchTap={this.addTodo}> Add todo</RaisedButton>
            </div>
        );
    }

    private addTodo() {
        this.props.dispatchAddTodo(this.textField.getValue());
        this.textField.clear();
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddTodo: (text: string) => dispatch(addTodo(text)),
    };
};

const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
