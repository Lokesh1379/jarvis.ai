import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Pages/Home/Home";
import { persistor, store } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
