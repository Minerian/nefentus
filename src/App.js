import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import "./style/general.css";
import Navigation from "./components/navigation/navigation";

import { Route, HashRouter, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/Signup";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Payroll from "./pages/Payroll";
import Affiliate from "./pages/Affiliate";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollElement = document.querySelectorAll(".scroll");

      for (let i = 0; i < scrollElement.length; i++) {
        const sectionTop = scrollElement[i].offsetTop;

        const scrollPosition = window.scrollY;

        if (scrollPosition + window.innerHeight * 0.6 >= sectionTop) {
          scrollElement[i].classList.add("scrollAnimation");
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/payment"
              element={
                <Layout>
                  <Payment />
                </Layout>
              }
            />
            <Route
              path="/payroll"
              element={
                <Layout>
                  <Payroll />
                </Layout>
              }
            />
            <Route
              path="/affiliate"
              element={
                <Layout>
                  <Affiliate />
                </Layout>
              }
            />
            <Route
              path="/support"
              element={
                <>
                  <Navigation />

                  <Support />
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <Navigation />
                  <Privacy />
                  <Footer />
                </>
              }
            />
            <Route
              path="/imprint"
              element={
                <>
                  <Navigation />
                  <Imprint />
                  <Footer />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
