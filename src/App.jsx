import { useEffect, useState } from "react";
import LandingPage from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLanding ? <LandingPage /> : <Home />}
    </>
  );
}

export default App;