import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// React-Router
import { BrowserRouter } from "react-router-dom";
// React-Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Style
import "./index.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);