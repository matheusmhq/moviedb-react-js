import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("should render pagination with data passed by props", () => {
    function Wrapper() {
      const [page, setPage] = useState(1);
      const lastPage = 10;
      const totalResults = 100;

      return (
        <Pagination
          setPage={setPage}
          page={page}
          totalResults={totalResults}
          lastPage={lastPage}
        />
      );
    }
    render(<Wrapper />);

    expect(screen.getByText("Página 1 de 10")).toBeInTheDocument();
    expect(screen.getByText("100 resultado(s)")).toBeInTheDocument();
  });

  it("should go to the next page by clicking the button", () => {
    function Wrapper() {
      const [page, setPage] = useState(1);
      const lastPage = 10;
      const totalResults = 100;

      return (
        <Pagination
          setPage={setPage}
          page={page}
          totalResults={totalResults}
          lastPage={lastPage}
        />
      );
    }
    render(<Wrapper />);

    const btn2 = screen.getByTestId("btn-page-2");
    userEvent.click(btn2);

    expect(screen.getByText("Página 2 de 10")).toBeInTheDocument();
  });
});
