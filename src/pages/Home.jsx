import Layout from "../components/layout/layout";
import Navigation from "../components/navigation/navigation";

import Arrow from "../assets/icon/arrow.svg";
import Circle from "../components/circle/circle";
import Logos from "../components/logos/logos";
import Cards from "../components/cards/cards";
import About from "../components/about/about";
import Reviews from "../components/reviews/reviews";

const Home = () => {
  return (
    <>
      <Circle />
      <Layout
        heading="Level-up Business with Nefentus"
        description="Our revolutionary state-of-the-art automation and secure crypto checkouts let you focus on your core business while maximizing earnings. Leave manual payments behind and embrace the future of commerce today."
        button={
          <>
            <p>Start now, it’s free</p>
            <img src={Arrow} alt="" />
          </>
        }
        store={true}
      />

      <Logos />
      <Cards />

      <Layout
        title="Manage crypto payments and invoicing"
        description="Our secure platform is an all-encompassing, secure platform which streamlines, automates, and facilitate various types of transactions, including traditional and digital currencies, for businesses and customers alike."
        button="Get Started for Free"
        subtitle="Simplify"
      />

      <Layout
        title="Grow with our payroll system"
        description="Use our streamlined, efficient solution for managing employee compensation, including salary payments and benefit allocations."
        button="Get Started for Free"
        subtitle="Process Payroll"
        reverse={true}
      />

      <About />

      <Reviews />
    </>
  );
};

export default Home;
