import * as chai from "chai";
import * as React from "react";
import * as actions from "../redux/todoActions";

describe("todoActions", () => {

    it("returns corretc object for addTodo action", () => {
        chai.expect(actions.addTodo("text"))
            .to.be.deep.equal(
                {
                    text: "text",
                    type: actions.actionTypes.ADD_TODO,
                });
    });

    it("returns corretc object for filterTodos action", () => {
        chai.expect(actions.filterTodos("text"))
            .to.be.deep.equal(
                {
                    filterText: "text",
                    type: actions.actionTypes.FILTER_TODOS,
                });
    });

    it("returns corretc object for filterTodos action", () => {
        chai.expect(actions.toggleDone(2))
            .to.be.deep.equal(
                {
                    id: 2,
                    type: actions.actionTypes.TOGGLE_DONE,
                });
    });
});
