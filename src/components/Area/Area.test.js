import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Area from "./Area";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
describe("Area", () => {
  let area;
  beforeEach(() => {
    area = {
      nickname: "LoHi",
      about:
        "The Lower Highlands area, often referred to as the Highlands or LoHi, was one of the first areas to experience massive growth from the downtown area. Known for many great bars and restaurants with a great eastern facing view of the Downtown area.",
      location: "West of Downtown",
      name: "Lower Highlands",
      id: 408,
    };
  });
  it("should render an area component", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Area area={area} />
      </BrowserRouter>
    );
    const title = getByText("Lower Highlands (LoHi)");
    const title1 = getByAltText(/(Lower)/g);
    const location = getByText("West of Downtown");
    expect(title).toBeInTheDocument();
    expect(title1).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
  it("should link to a differnt page upon clicking view listing button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Area area={area} />
      </BrowserRouter>
    );
    const link = getByText("View Listings");
    fireEvent.click(link);
    expect(window.location.href).toBe("http://localhost/areas/408/listings");
  });
});
