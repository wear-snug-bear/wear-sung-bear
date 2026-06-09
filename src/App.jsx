import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showLanding ? <LandingPage /> : <Home />}
    </BrowserRouter>
  );
}

export default App;