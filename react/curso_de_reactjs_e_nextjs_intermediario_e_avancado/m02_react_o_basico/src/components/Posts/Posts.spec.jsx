/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Posts } from ".";

describe("<Posts />", () => {
  const props = {
    posts: [
      {
        title: "title 1",
        body: "body 1",
        cover: "img/img1.png",
      },
      {
        title: "title 2",
        body: "body 2",
        cover: "img/img2.png",
      },
      {
        title: "title 3",
        body: "body 3",
        cover: "img/img3.png",
      },
    ],
  };

  it("should match snapshot", () => {
    const view = render(<Posts posts={props.posts} key={props.posts.index} />);

    expect(view).toMatchSnapshot();
  });

  it("should render posts", () => {
    render(<Posts {...props} />);

    const arrHeadings = screen.getAllByRole("heading", { name: /title/i });
    const arrImgs = screen.getAllByRole("img", { name: /title/i });
    const arrBodies = screen.getAllByText(/body/i);

    expect(arrHeadings).toHaveLength(3);
    expect(arrImgs).toHaveLength(3);
    expect(arrBodies).toHaveLength(3);
  });
});
