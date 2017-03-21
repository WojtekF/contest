import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from "react-dom";
import * as injectTapEventPluginExport from "react-tap-event-plugin";

injectTapEventPluginExport();

export function mountComponent(Component) {
    return mount(<MuiThemeProvider>{Component}</MuiThemeProvider>, {attachTo: document.getElementById("component")});
}

export function simulateEvent(wrappedTarget, eventType) {
  if (wrappedTarget.node) {
    // wrappedTarget was obtained using enzyme's mount()
    const domNode = ReactDOM.findDOMNode(wrappedTarget.node);
    TestUtils.Simulate[eventType](domNode);
  } else {
    // wrappedTarget was obtained using enzyme's shallow()
    wrappedTarget.simulate(eventType);
  }
}
