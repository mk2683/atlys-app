import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [isDashboardVisible, setIsDashboardVisible] = useState<boolean>(false);

  return isDashboardVisible ? (
    <Home />
  ) : (
    <Login setIsDashboardVisible={setIsDashboardVisible} />
  );
}

export default App;
