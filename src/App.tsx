import { FC } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routers from "./router/index";
import { RouterProvider } from "react-router-dom";

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className="App-header">
          <div className="w-2/4">
            <RouterProvider router={Routers} />
          </div>
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default App;
