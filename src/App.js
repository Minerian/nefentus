import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import "./style/general.css";
import Navigation from "./components/navigation/navigation";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/Signup";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
