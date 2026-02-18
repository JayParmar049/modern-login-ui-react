import { useState } from "react";
import AuthForm from "./components/AuthForm";
import TogglePanel from "./components/TogglePanel";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <AuthForm type="sign-up" />
      <AuthForm type="sign-in" />
      <TogglePanel
        onRegister={() => setIsActive(true)}
        onLogin={() => setIsActive(false)}
      />
    </div>
  );
}

export default App;
