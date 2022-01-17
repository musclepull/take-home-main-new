import React from "react";
import ReactDom  from "react-dom";
import TestButton from "../button";
import {isTSAnyKeyword} from '@babel/types'

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TestButton/>, div)
})