import * as chai from "chai";
import * as React from "react";
import * as actions from "../redux/todoActions";
import {reduceTodos} from "../redux/todoReducers";

describe("todoReducers", () => {
    const initialState = {
            filterText: "",
            filteredTodos: [
                {id: 1, isDone: false, text: "text"},
                {id: 2, isDone: false, text: "ttext"},
                {id: 3, isDone: true, text: "txet"},
            ],
            todos: [
                {id: 1, isDone: false, text: "text"},
                {id: 2, isDone: false, text: "ttext"},
                {id: 3, isDone: true, text: "txet"},
            ],
        };

    it("adds new todoItem to undefined state", () => {
        chai.expect(reduceTodos(undefined, actions.addTodo("text")))
            .to.be.deep.equal(
                {
                    filterText: "",
                    filteredTodos: [{id: 1, isDone: false, text: "text"}],
                    todos: [{id: 1, isDone: false, text: "text"}],
                });
    });

    it("filteres todos from existing state", () => {
        const finalFilteredState = {
            filterText: "tex",
            filteredTodos: [
                {id: 1, isDone: false, text: "text"},
                {id: 2, isDone: false, text: "ttext"},
            ],
            todos: [
                {id: 1, isDone: false, text: "text"},
                {id: 2, isDone: false, text: "ttext"},
                {id: 3, isDone: true, text: "txet"},
            ],
        };

        chai.expect(reduceTodos(initialState, actions.filterTodos("tex")))
            .to.be.deep.equal(finalFilteredState);
    });

    it("toggles todo to another state of done", () => {
        const finalState = {
            filterText: "",
            filteredTodos: [
                {id: 1, isDone: false, text: "text"},
                 {id: 2, isDone: true, text: "ttext"},
                  {id: 3, isDone: true, text: "txet"},
            ],
            todos: [
                {id: 1, isDone: false, text: "text"},
                {id: 2, isDone: true, text: "ttext"},
                {id: 3, isDone: true, text: "txet"},
            ],
        };
        chai.expect(reduceTodos(initialState, actions.toggleDone(2)))
            .to.be.deep.equal(finalState);
    });
});
