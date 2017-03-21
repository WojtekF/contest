import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import { Provider } from "react-redux";
import store from "../redux/todoStore";
import ConnectedAddTodo from "./AddTodo";
import ConnectedFilter from "./Filter";
import ConnectedTodoList from "./TodoList";

const styles = {
    display: "block",
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 50,
};

class App extends React.Component<void, void> {
    public render() {
        return (
            <Provider store={store}>
                <div style={styles}>
                    <ConnectedFilter />
                    <ConnectedTodoList/>
                    <ConnectedAddTodo/>
                </div>
            </Provider>);
        }
}

export default App;
