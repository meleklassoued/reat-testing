import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
});

// ? test(name,fn,timeout):
// the first argument is the test name used to identify the test
// the second argument is a function that contains the expectations to test
// the third argument is timeout which is an optional argument specifying how long to wait before aborting the test /the default timeout value is 5 second

// ?What to test ? :
// test component renders
// test component render with props
// test component renders in different states
// test component reacts to events

// ? what not to test ?
// implementations details
// third party code
// code that is not important from a user point of view

// ?RTL Queries ?
// render the component
// find an element rendered by the component
// asset against the element found in step 2 will pass or fail the test

// to render the component we use the render method from RTL , for assertion ,we use expect passing in a value and combine it with a matcher function from jest or jestDom

// queries are the methods that testing library provides to find elements on the page

// ! to find a single element on the page we have :
// getBy
// queryBy
// findBy

// ! to find multiple elements on the page , we have
// getAllBy
// queryAllBy
// findAllBy
