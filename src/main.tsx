import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient({
    defaultOptions: { queries:  { staleTime: 1000 * 60 * 5 }},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
          <ReactQueryDevtools />
      </QueryClientProvider>
  </React.StrictMode>,
)

