import { render, screen } from "@testing-library/react";

import MsgEmpty from "./MsgEmpty";

describe("MsgEmpty", () => {
  it("should render text default", async () => {
    const textDefault = "Nenhum resultado encontrado";

    render(<MsgEmpty />);

    expect(screen.getByText(textDefault)).toBeInTheDocument();
  });

  it("should render correct text passed by props", async () => {
    const text = "No results were found";

    render(<MsgEmpty msg={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
