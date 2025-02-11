import { useState } from "react";

import "./App.css";
import Chatbot from "./components/Chatbot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Chatbot />
      </QueryClientProvider>
    </>
  );
}

export default App;
