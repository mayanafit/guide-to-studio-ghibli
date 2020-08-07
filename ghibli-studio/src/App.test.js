import React from 'react';
import { render, screen, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';


describe(`route '/' testing element`, () => {
  
  test('menu in route /', () => {
    const { getByText } = render(<App />);
    const linkGuidance = getByText(/guidance/i);
    const linkMovies = getByText(/Movies/i);
    const linkWatch = getByText(/watch list/i);
    const linkPeople = getByText(/people in studio/i)
    expect(linkGuidance).toBeInTheDocument();
    expect(linkMovies).toBeInTheDocument();
    expect(linkWatch).toBeInTheDocument();
    expect(linkPeople).toBeInTheDocument();
  });

  test(`button guidance in '/' should show the welcoming text`, () => {
    const { getByTestId, getByText } = render(<App />);
    const guidance = getByTestId("button-guidance");
    expect(guidance).toBeInTheDocument();
    fireEvent.click(guidance);
    const welcomeText = getByText(/welcome to/i)
    expect(welcomeText).toBeInTheDocument()
  })

  test(`button movies in '/' should show page '/movies'`, () => {
    const { getByTestId, getByText } = render(<App />);
    const movies = getByTestId("button-movies");
    expect(movies).toBeInTheDocument();
    fireEvent.click(movies);
    let movieTitle = getByText(/list movies/i)
      // movieTitle = getAllByText("castle", {exact: false})
      // movieTitle = container.querySelector('.td-width-desc')
    expect(movieTitle).toBeInTheDocument()
  })

})

