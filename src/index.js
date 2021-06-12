import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

const client = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  rootElement
);
