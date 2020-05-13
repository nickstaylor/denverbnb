import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from "react-router-dom";


describe('App', () => {
  it('should be in the document', () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const {getByText} = render(router);
    expect(getByText('Email')).toBeInTheDocument();
  });
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
