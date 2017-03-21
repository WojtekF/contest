import TextField from "material-ui/TextField";
import * as React from "react";

export default class MyTextField extends React.Component<any, {text: string}> {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.clear = this.clear.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    public clear() {
        this.setState({text: ""});
    }
    public getValue() {
        return this.state.text;
    }

    public onChange(event: object, newValue: string) {
        this.setState({text: newValue});
        if (this.props.onChange) {
            this.props.onChange(event, newValue);
        }
    }

    public render() {
        const{ value, onChange, ...rest} = this.props;
        return (<TextField value={this.state.text} onChange={this.onChange} {...rest}/>);
    }
}
