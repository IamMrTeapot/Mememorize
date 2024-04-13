import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { useState } from "react";

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function updateAuthStatus(authStatus: boolean) {
    setIsAuthenticated(authStatus);
  }

  return (
    <BrowserRouter>
      <Router
        isAuthenticated={isAuthenticated}
        updateAuthStatus={updateAuthStatus}
      />
    </BrowserRouter>
  );
}

export default App;
