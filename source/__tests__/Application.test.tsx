import * as chai from "chai";
import * as React from "react";
import ConnectedAddTodo from "../components/AddTodo";
import App from "../components/Application";
import ConnectedFilter from "../components/Filter";
import ConnectedTodoList from "../components/TodoList";
import {mountComponent} from "./helpers";

describe("<App />", () => {
    let instance;

    beforeEach(() => {
        instance = mountComponent(<App/>);
    });

    it("contains one ConnectedAddTodo", () => {
        chai.expect(instance.find(ConnectedAddTodo)).to.have.length(1);
    });

    it("contains one ConnectedFilter", () => {
        chai.expect(instance.find(ConnectedFilter)).to.have.length(1);
    });

    it("contains one ConnectedTodoList", () => {
        chai.expect(instance.find(ConnectedTodoList)).to.have.length(1);
    });
});
