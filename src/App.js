import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import "./style/general.css";
import Navigation from "./components/navigation/navigation";

import {
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/Signup";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Payroll from "./pages/Payroll";
import Affiliate from "./pages/Affiliate";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";

const router = createHashRouter([
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/payment",
    element: (
      <Layout>
        <Payment />
      </Layout>
    ),
  },
  {
    path: "/payroll",
    element: (
      <Layout>
        <Payroll />
      </Layout>
    ),
  },
  {
    path: "/affiliate",
    element: (
      <Layout>
        <Affiliate />
      </Layout>
    ),
  },
  {
    path: "/support",
    element: (
      <>
        <Navigation />
        <Support />
        <Footer />
      </>
    ),
  },
  {
    path: "/privacy",
    element: (
      <>
        <Navigation />
        <Privacy />
        <Footer />
      </>
    ),
  },
  {
    path: "/imprint",
    element: (
      <>
        <Navigation />
        <Imprint />
        <Footer />
      </>
    ),
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
