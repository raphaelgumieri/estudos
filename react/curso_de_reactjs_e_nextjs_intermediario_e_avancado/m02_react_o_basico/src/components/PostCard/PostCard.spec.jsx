import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const post = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard post={post} />);

    const img = screen.getByRole("img", { name: post.title });
    const h1 = screen.getByRole("heading", { name: post.title });
    const p = screen.getByText(post.body);

    expect(img).toHaveAttribute("src", post.cover);
    expect(h1).toBeInTheDocument("heading", post.title);
    expect(p).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const view = render(<PostCard post={post} />);
    expect(view).toMatchSnapshot();
  });
});
