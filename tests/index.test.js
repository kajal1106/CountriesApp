import Home from "../pages/countries";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator",  () => {
    it("renders a calculator", async() => {
      render(<Home />);
      // check if all components are rendered
      console.log(screen);
      await new Promise((r) => setTimeout(r, 2000));
      console.log(screen);
      expect(screen.getByTestId("appNavBar")).toBeInTheDocument();
    });
  });