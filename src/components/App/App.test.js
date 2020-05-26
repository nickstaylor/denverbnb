import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import AreaContainer from "../AreaContainer/AreaContainer"
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import {fetchingApi,  getIndividualListing} from "../../apiCalls/apiCalls";

 import parkhill from "../../images/ParkHill.png";
 import rino from "../../images/RiNo.png";
import "@testing-library/jest-dom/extend-expect";
jest.mock("../../apiCalls/apiCalls");

describe("App", () => {
  it("should show the login page when website first loads", () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const { getByText } = render(router);
    expect(getByText("Email")).toBeInTheDocument();
  });
  //should show the areas page when login form is submitted

  it("should be able to log users out", () => {
    //should redirect user to login page if they've clicked sign out
    // - basically 'email' should be in the document when the button is clicked
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

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
    // expect(getByText("Email")).toBeInTheDocument();
    fireEvent.click(getByText("Sign Out"));
    expect(getByText("Email")).toBeInTheDocument();
  });

  it("should show information retrieved via fetch", async () => {
    //should redirect user to login page if they've clicked sign out
    // - basically 'email' should be in the document when the button is clicked
    //this promise is the return of 4 area objects from the fetchingApi
    //data is an array of two objects
    const areaMockData = [
      {
        about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
        id: 590,
        listings: (6) ["/api/v1/listings/3", "/api/v1/listings/44", "/api/v1/listings/221", "/api/v1/listings/744", "/api/v1/listings/90", "/api/v1/listings/310"],
        location: "North of Downtown Denver",
        name: "River North",
        nickname: "RiNo",
        quick_search: "o5kod9f5cqo0",
        region_code: 6356834
      },
      {
        about: "Park Hill features one of the best views of the downtown area and surrounding mountains. With easy access to City Park and the major highways, Park Hill also includes many unique styles of homes.",
        id: 751,
        listings: (3) ["/api/v1/listings/3921", "/api/v1/listings/56", "/api/v1/listings/21"],
        location: "East of Downtown Denver",
        name: "Park Hill",
        nickname: "Park Hill",
        quick_search: "g1m0tsxzl0o0",
        region_code: 6648386
      }
    ];
    const images =[parkhill, rino]
    const user = {
      userName: "Ryan",
      userEmail: "r@gmail.com",
      userPurpose: "business",
    }
    fetchingApi.mockResolvedValueOnce(areaMockData);
    const router = (
      <MemoryRouter>
      <AreaContainer data={areaMockData} images={images} user={user}/>
      </MemoryRouter>
    );

    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
      router
    );

    // fireEvent.change(getByPlaceholderText("name"), {
    //   target: { value: "Ryan" },
    // });
    // fireEvent.change(getByPlaceholderText("email"), {
    //   target: { value: "r@gmail.com" },
    // });
    // fireEvent.change(getByDisplayValue("--Please select a purpose--"), {
    //   target: { value: "business" },
    // });
    // fireEvent.click(getByText("Login"));
    // const idea = await waitFor(()=> getByText("Sweaters for pugs"))
    const title = await waitFor(() =>getByText("River North (RiNo)"))
    const aboutParkHill = await waitFor(()=>getByText("Park Hill features one of the best views of the downtown area and surrounding mountains. With easy access to City Park and the major highways, Park Hill also includes many unique styles of homes."))

    expect(title).toBeInTheDocument()
    expect(aboutParkHill).toBeInTheDocument()
    //might not be an issue with fetch call
    //need data to iterate through, there is no data because
    //mainpagecontainer doesn't receive any data in the test...
    //even if fetch call is working perfectly the data still isn't being passed in
    //other tests won't work for the same reason
  });


  it.skip("Can view all the areas when the app loads", async () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const firstFetch = [
      {
        area: "RiNo",
        details: "/api/v1/areas/590",
      },
    ];
    const areaData = [
      {
        about:
          "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
        id: 590,
        image: "/static/media/RiNo.b8c7b96a.png",
        length: 6,
        __proto__: Array(0),
        location: "North of Downtown Denver",
        name: "River North",
        nickname: "RiNo",
        quick_search: "o5kod9f5cqo0",
        region_code: 6356834,
      },
    ];
    const listing = [
      {
        address: { street: "2250 Lawrence St", zip: "80205" },
        area: "rino",
        area_id: 590,
        db_connect: 834470,
        details: {
          neighborhood_id: 5124122,
          superhost: true,
          seller_source: "91jss1",
          beds: 3,
          baths: 2.5,
        },
        dev_id: "u4gh2j",
        listing_id: 3,
        name: "Hip RiNo Party Spot",
      },
    ];

    //this jest function creates a promise object that is resolved
    //we are overriding the functionality of fetchCall and returning a resolved promise with some data
    getAreas.mockResolvedValueOnce(firstFetch);
    const neighborhood = await waitFor(
      getNeighborhood.mockResolvedValueOnce(areaData)
    );
    const listing3 = await waitFor(getListings.mockResolvedValueOnce(listing));

    // Render the App component (this component fetches data from an external back-end API)
    const { getByText, debug } = render(router);
    // Check that there is a container element on the page
    const areaName = await waitFor(() => getByText("River North"));
    debug();
    // Check that there are ideas on the page

    expect(areaName).toBeInTheDocument();
  });
  //should show listings when "view listings" is clicked within the area container

  //should add item to favorites from the alllistings component

  //should add item to favorites from the singlebiglisting component

  //should show additional listing information if user has clicked that button
  //on an individual listing on the all listings page
});
