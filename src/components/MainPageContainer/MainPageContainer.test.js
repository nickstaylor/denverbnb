import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import ( getAreas ) from ''

import MainPageContainer from "./MainPageContainer";

describe("MainPageContainer", () => {
  it("should render the MainPageContainer in the document", () => {
    const { getByTitle } = render(
      <BrowserRouter>
        <MainPageContainer />
      </BrowserRouter>
    );
    expect(getByTitle("areaContainer")).toBeInTheDocument();
  });
});
