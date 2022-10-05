import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from ".";

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
          url: 'img1.jpg',
        },
        {
          userId: 2,
          id: 2,
          title: "title 2",
          body: "body 2",
          url: 'img2.jpg',

        },
        {
          userId: 3,
          id: 3,
          title: "title 3",
          body: "body 3",
          url: 'img3.jpg',

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
    // screen.debug();
  });
});
