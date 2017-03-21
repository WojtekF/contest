import * as chai from "chai";
import * as React from "react";
import { Provider } from "react-redux";
import * as sinon from "sinon";
import ConnectedTodoItem from "../components/TodoItem";
import {TodoList} from "../components/TodoList";
import store from "../redux/todoStore";
import {mountComponent} from "./helpers";

const filteredTodos = [
    {id: 2, isDone: false, text: "test2"},
    {id: 3, isDone: true, text: "test3"},
    {id: 4, isDone: false, text: "test4"},
];

describe("<TodoList/>", () => {
    let instance;
    beforeEach(() => {
        instance = mountComponent(
            <Provider store={store}> 
                <div>
                    <TodoList todos={filteredTodos} /> 
                </div>
            </Provider>);
    });

    it("contains 3 ConnectedTodoItems", () => {
        chai.expect(instance.find(ConnectedTodoItem)).to.have.length(3);
    });
});
