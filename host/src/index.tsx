import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, Container, Typography } from "@mui/material";

const RemoteApp1 = React.lazy(() => import("remote1/App"));
const RemoteApp2 = React.lazy(() => import("remote2/App"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container>
        <Typography variant="h4">React Dashboard</Typography>
        <React.Suspense fallback={<div>Loading Remote 1...</div>}>
          <RemoteApp1 />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading Remote 2...</div>}>
          <RemoteApp2 />
        </React.Suspense>
      </Container>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
