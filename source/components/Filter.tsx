import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";
import { connect } from "react-redux";
import {filterTodos} from "../redux/todoActions";
import MyTextField from "./MyTextField";

export class Filter extends React.Component<FilterProps, void> {

    private textField;
    private ref = {
        textField: (t) => this.textField = t,
    };
    constructor(props) {
        super(props);
        this.resetFilter = this.resetFilter.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    public render() {
        return (
            <div>
                <RaisedButton onTouchTap={this.resetFilter}> Clear filter</RaisedButton>
                <br/>
                <MyTextField ref={this.ref.textField} onChange={this.onValueChange}  floatingLabelText="Search..."/> 
                <br/>
                <span>{this.props.itemsCount} items found </span>
            </div>
        );
    }

    private resetFilter(event: object) {
        this.textField.clear();
        this.props.disptachFilterChange("");
    }

    private onValueChange(event: object, newValue: string) {
        this.props.disptachFilterChange(newValue);
    }
};

/* istanbul ignore next */
const mapStateToProps = (state) => {
    return {itemsCount: state.reduceTodos.filteredTodos.length};
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
    return {
        disptachFilterChange: (filterText: string) => dispatch(filterTodos(filterText)),
    };
};
const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default ConnectedFilter;
