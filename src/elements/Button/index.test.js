import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading spinner", () => {
  const { container } = render(<Button isLoading></Button>);

  expect(container.querySelector("span.spinner-border")).toBeInTheDocument();
} );

test("should render children", () => {
  const { getByText } = render(<Button>
    Click Me
  </Button>)

  expect(getByText("Click Me")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const {container} = render (<Button type="link" isExternal href="https://google.com">
    Click me
  </Button>)

  expect(container.querySelector("a")).toBeInTheDocument();
});

