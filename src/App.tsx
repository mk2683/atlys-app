import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [isDashboardVisible, setIsDashboardVisible] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(false);

  return isDashboardVisible ? (
    <Home
      setIsLoginVisible={setIsLoginVisible}
      isLoginVisible={isLoginVisible}
      isRegisterVisible={isRegisterVisible}
      setIsRegisterVisible={setIsRegisterVisible}
    />
  ) : (
    <Login
      setIsDashboardVisible={setIsDashboardVisible}
      setIsRegisterVisible={setIsRegisterVisible}
    />
  );
}

export default App;
