import * as chai from "chai";
import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";
import * as sinon from "sinon";
import {Filter} from "../components/Filter";
import MyTextField from "../components/MyTextField";
import {mountComponent, simulateEvent} from "./helpers";

const dispatchFilterChange = sinon.spy();
const resetFilter = sinon.spy(Filter.prototype, "resetFilter");

describe("<Filter/>", () => {
    let instance;
    beforeEach(() => {
        instance = mountComponent(<Filter itemsCount={2} disptachFilterChange={dispatchFilterChange} />);
        resetFilter.reset();
        dispatchFilterChange.reset();
    });

    it("contains one RaisedButton", () => {
        chai.expect(instance.find(RaisedButton)).to.have.length(1);
    });

    it("contains one MyTextField", () => {
        chai.expect(instance.find(MyTextField)).to.have.length(1);
    });

    it("sets proper value to MyTextField", () => {
        const input = instance.find("input");
        input.get(0).value = "abc";
        simulateEvent(input.at(0), "change");
        chai.expect(instance.find(MyTextField).get(0).getValue()).to.equal("abc");
    });

    it("resets MyTextField value after clicking button", () => {
        const input = instance.find("input");
        input.get(0).value = "abc";
        simulateEvent(input.at(0), "change");
        chai.expect(instance.find(MyTextField).get(0).getValue()).to.equal("abc");

        simulateEvent(instance.find("button").at(0), "touchTap");
        chai.expect(resetFilter.calledOnce).to.be.ok;
        chai.expect(instance.find(MyTextField).get(0).getValue()).to.equal("");
    });
});
