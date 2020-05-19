import React from "react";
import Login from "./Login";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("should render a login form", () => {
    const router = (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const { getByText } = render(router);
    expect(getByText("Email")).toBeInTheDocument();
  });

  //make sure that props were passed down successfully
  it("should throw an error if the form is not filled out correctly", () => {
    const user = {
      userName: "Ryan",
      userEmail: "r@gmail.com",
      userPurpose: "business",
    };
    const mockAddUser = jest.fn();
    const router = (
      <BrowserRouter>
        <Login addUser={mockAddUser} />
      </BrowserRouter>
    );
    const { getByText } = render(router);
    fireEvent.click(getByText("Login"));
    expect(getByText("Please enter an email address.")).toBeInTheDocument();
    expect(getByText("Please enter a name.")).toBeInTheDocument();
    expect(getByText("Please enter a purpose.")).toBeInTheDocument();
  });

  it("should submit the form if it's been filled out correctly", () => {
    const mockAddUser = jest.fn();
    const router = (
      <BrowserRouter>
        <Login addUser={mockAddUser} />
      </BrowserRouter>
    );
    
    //if user clicks button without correct login information
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
      router
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Ryan" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "ryan@gmail.com" },
    });
    fireEvent.change(getByDisplayValue("--Please select a purpose--"), {
      target: { value: "business" },
    });
    fireEvent.click(getByText("Login"));
    expect(mockAddUser).toHaveBeenCalled();
  });
});
