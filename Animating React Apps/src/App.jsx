import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import Counter from "./pages/Counter.jsx";

const router = createBrowserRouter(
  [
    { path: "/", element: <WelcomePage /> },
    { path: "/challenges", element: <ChallengesPage /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  console.log("ROUTER CONFIG:", router);
  return (
    <>
      <Counter />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
