import { useEffect } from "react";
import Intro from "./components/Intro";
const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100vw",
      }}
    >
      <Intro />
    </main>
  );
};
export default App;
