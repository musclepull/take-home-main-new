import React from "react"
import ReactDom  from "react-dom"
import TestLink from "../link"
import renderer from 'react-test-renderer'

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<TestLink/>, div)
})

test('Button changes the class when clicked', () => {
    const component = renderer.create(
      <TestLink>Facebook</TestLink>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  
    // manually trigger the callback
    tree.props.onMouseEnter()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseLeave()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })