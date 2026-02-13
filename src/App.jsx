import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout.jsx";

// pages
import HomePage from "./pages/HomePage.jsx";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </>,
  ),
);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
