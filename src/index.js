import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from "./components/Navbar";
import Search from "./routes/Search";
import Qotd from "./routes/Qotd";
import Post from "./routes/Post";
import Author from "./routes/Author";
import Gallery from "./routes/Gallery";
import Trending from "./routes/Trending";
import "./App.css"

const AppLayout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "about",
                element: <About/>,
              },
              {
                path: "Search",
                element: <Search/>,
              },
              {
                path: "qotd",
                element: <Qotd/>,
              },
              {
                path: "post",
                element: <Post/>,
              },
              {
                path: "author",
                element: <Author/>,
              },
              {
                path: "gallery",
                element: <Gallery/>,
              },
              {
                path: "trending",
                element: <Trending/>,
              },
        ]
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}
export default App;