import React from 'react';
import { render } from '@testing-library/react';
import MainPageContainer from './MainPageContainer';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
describe('MainPageContainer', () => {
  it('should render the MainPageContainer in the document', () => {
  const {getByTitle} = render(  <BrowserRouter>
        <MainPageContainer />
      </BrowserRouter>)
    expect(getByTitle("areaContainer")).toBeInTheDocument();
  });
});