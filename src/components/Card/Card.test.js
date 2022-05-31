import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Card from "./Card";

describe("Card component", () => {
  it("should render card with data passed by props", () => {
    const fakeMovies = [
      {
        id: 624860,
        poster_path: "/9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg",
        release_date: "2021-12-16",
        title: "Matrix Resurrections",
        vote_average: 6.7,
      },
      {
        id: 157336,
        poster_path: "/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
        release_date: "2014-11-05",
        title: "Interstellar",
        vote_average: 8.4,
      },
      {
        id: 8271,
        poster_path: "/atL5uJGwq15C4Xq7PbFcAnDz6zK.jpg",
        release_date: "2007-04-12",
        title: "Paranóia",
        vote_average: 6.7,
      },
    ];

    render(
      <MemoryRouter>
        {fakeMovies.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              imagePath={item.poster_path}
              subtitle={item.release_date}
              voteAverage={item.vote_average}
            />
          );
        })}
      </MemoryRouter>
    );

    expect(screen.getAllByTestId("card")).toHaveLength(3);
    expect(screen.getByText(fakeMovies[0].title)).toBeInTheDocument();
    expect(screen.getByText(fakeMovies[1].title)).toBeInTheDocument();
    expect(screen.getByText(fakeMovies[2].title)).toBeInTheDocument();
  });
});
