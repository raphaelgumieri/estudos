import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from ".";
import userEvent from "@testing-library/user-event";

// para mockar as requisições, usei o msw https://mswjs.io/ ;
// primeiro, criamos um array com a requisição e sua resposta, nessa estrutura;
// nesse caso, as duas requisições são parecidas, então foi inserido o * no começo e no final da requisição, e adicionado a linha de url para mockar por completo todos os itens necessários;
const handlers = [
  rest.get("*jsonplaceholder.typicode.com*", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "title 1",
          body: "body 1",
          url: "img1.jpg",
        },
        {
          userId: 2,
          id: 2,
          title: "title 2",
          body: "body 2",
          url: "img2.jpg",
        },
        {
          userId: 3,
          id: 3,
          title: "title 3",
          body: "body 3",
          url: "img3.jpg",
        },
        {
          userId: 4,
          id: 4,
          title: "title 4",
          body: "body 4",
          url: "img4.jpg",
        },
      ]),
    );
  }),
];

// aqui vc instancia o server passando o mock das requisições
const server = setupServer(...handlers);

describe("<Home />", () => {
  // foi utilziado essa lógica para o servidor de mock iniciar antes do teste, resetar as mocks dps que acabar um teste e quando todos os testes finalizarem, o servidor é fechado
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should render search, post and load more", async () => {
    render(<Home />);
    const noMorePosts = screen.getAllByText("Não existem posts =(");
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it("should render search for posts", async () => {
    render(<Home />);
    const noMorePosts = screen.getAllByText("Não existem posts =(");
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    const headingQuery1 = screen.queryByRole("heading", { name: /title 1/i });
    const headingQuery2 = screen.queryByRole("heading", { name: /title 2/i });
    const headingQuery3 = screen.queryByRole("heading", { name: /title 3/i });
    const falseHeading = screen.queryByRole("heading", { name: /title 4/i }); // usa query quando vc n tem certeza se o componente vai estar renderizado na tela. Já que o get retorna erro caso ele não exista
    expect(headingQuery1).toBeInTheDocument();
    expect(headingQuery2).toBeInTheDocument();
    expect(headingQuery3).toBeInTheDocument();
    expect(falseHeading).not.toBeInTheDocument();

    userEvent.type(search, "title 1");
    expect(headingQuery1).toBeInTheDocument();
    expect(headingQuery2).not.toBeInTheDocument();
    expect(headingQuery3).not.toBeInTheDocument();

    userEvent.clear(search);
    const headingGet1 = screen.getByRole("heading", { name: /title 1/i });
    const headingGet2 = screen.getByRole("heading", { name: /title 2/i });
    const headingGet3 = screen.getByRole("heading", { name: /title 3/i });
    expect(headingGet1).toBeInTheDocument();
    expect(headingGet2).toBeInTheDocument();
    expect(headingGet3).toBeInTheDocument();

    userEvent.type(search, "sem posts");
    expect(screen.getByText('Não existem posts =(')).toBeInTheDocument();
  });

  it("should load more posts", async () => {
    render(<Home />);
    const noMorePosts = screen.getAllByText("Não existem posts =(");
    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole("button", { name: /load more posts/i });

    userEvent.click(button);
    const headingGet4 = screen.getByRole("heading", { name: /title 3/i });
    expect(headingGet4).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
