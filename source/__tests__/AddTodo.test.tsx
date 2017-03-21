import * as chai from "chai";
import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";
import * as sinon from "sinon";
import {AddTodo} from "../components/AddTodo";
import MyTextField from "../components/MyTextField";
import {mountComponent, simulateEvent} from "./helpers";

const dispatchAddTodo = sinon.spy();

describe("<AddTodo/>", () => {
    let instance;
    beforeEach(() => {
        instance = mountComponent(<AddTodo dispatchAddTodo={dispatchAddTodo}/>);
        dispatchAddTodo.reset();
    });

    it("contains MyTextField", () => {
        chai.expect(instance.find(MyTextField)).to.have.length(1);
    });

    it("contains RaisedButton", () => {
        chai.expect(instance.find(RaisedButton)).to.have.length(1);
    });

    it("fires dispatchAddTodo when button is clicked", () => {
        const button = instance.find("button");
        chai.expect(button).to.have.length(1);
        simulateEvent(button.at(0), "touchTap");
        chai.expect(dispatchAddTodo.callCount).to.be.equal(1);
    });

    it("fires dispatchAddTodo when button is clicked with proper todo text", () => {
        const input = instance.find("input");
        input.get(0).value = "abc";
        simulateEvent(input.at(0), "change");

        const button = instance.find("button");
        chai.expect(button).to.have.length(1);
        simulateEvent(button.at(0), "touchTap");
        chai.expect(dispatchAddTodo.callCount).to.be.equal(1);
        chai.expect(dispatchAddTodo.calledWith("abc")).to.be.ok;
    });
});
