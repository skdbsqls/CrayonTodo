import "./App.css";
import Router from "./shared/Router";
import GlobalStyled from "./styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyled />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
