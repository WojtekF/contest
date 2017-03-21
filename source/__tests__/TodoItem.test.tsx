import * as chai from "chai";
import {ListItem} from "material-ui/List";
import Done from "material-ui/svg-icons/action/done";
import * as React from "react";
import * as sinon from "sinon";
import {TodoItem} from "../components/TodoItem";
import {mountComponent, simulateEvent} from "./helpers";

const dispatchTodoToggled = sinon.spy();
const todo = {id: 2, text: "test", isDone: false};

describe("<TodoItem/>", () => {
    let instance;
    beforeEach(() => {
        instance = mountComponent(<TodoItem item={todo} dispatchTodoToggled={dispatchTodoToggled}/>);
    });

    it("contains ListItem", () => {
        chai.expect(instance.find(ListItem)).to.have.length(1);
    });

    it("fires event with todo's id when tapped", () => {
        simulateEvent(instance.find(ListItem).find("span").at(0), "touchTap");
        chai.expect(dispatchTodoToggled.calledOnce).to.be.ok;
        chai.expect(dispatchTodoToggled.calledWith(2)).to.be.ok;
    });

    it("contains Done component when is done", () => {
        const done = Object.assign({}, todo, {isDone: true});
        instance = mountComponent(<TodoItem item={done} dispatchTodoToggled={dispatchTodoToggled}/>);
        chai.expect(instance.find(Done)).to.have.length(1);
    });
});
