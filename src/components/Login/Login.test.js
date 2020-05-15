import React from "react";
import Login from "./Login";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("should render a login form", () => {
    const router = (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const {getByText} = render(router);
    expect(getByText('Email')).toBeInTheDocument();
  });

  //make sure that props were passed down successfully
  it("should receive the addUser function from the App class", () => {
      const user = {
          userName: 'Ryan',
          userEmail: 'r@gmail.com',
          userPurpose: 'business'
      }
      const mockAddUser = jest.fn();
    const router = (
      <BrowserRouter>
        <Login addUser={mockAddUser}/>
      </BrowserRouter>
    );
    //if user clicks button without correcr login information
    const {getByText, getAllByText } = render(router);
    fireEvent.click(getByText('Login'))
    expect(getAllByText("Please")).toHaveLength(3)
    // expect(mockAddUser).toHaveBeenCalledWith(user);
//
  });

//test that error messages appear if conditions are not met

});
