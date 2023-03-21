import Layout from "./../components/layout/layout";
import IconRow from "./../components/iconRow/iconRow";
import PayrollHero from "../components/payrollHero/payrollHero";
import OptionCards from "../components/optionCards/optionCards";

import Logo1 from "../assets/icon/payroll/logo1.svg";
import Logo2 from "../assets/icon/payroll/logo2.svg";
import Logo3 from "../assets/icon/payroll/logo3.svg";
import Logo4 from "../assets/icon/payroll/logo4.svg";
import Logo5 from "../assets/icon/payroll/logo5.svg";
import Logo6 from "../assets/icon/payroll/logo6.svg";
import Logo7 from "../assets/icon/payroll/logo7.svg";

const list = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Payroll = () => {
  return (
    <div>
      <PayrollHero />
      <Layout
        title="Manage crypto payments and invoicing"
        description="Our secure platform is an all-encompassing, secure platform which streamlines, automates, and facilitate various types of transactions, including traditional and digital currencies, for businesses and customers alike."
        button="Get Started for Free"
        subtitle="Simplify"
      />

      <Layout
        title={
          <>
            Grow with our <br /> payroll system
          </>
        }
        description="Use our streamlined, efficient solution for managing employee compensation, including salary payments and benefit allocations."
        button="Get Started for Free"
        subtitle="Process Payroll"
        reverse={true}
      />

      <Layout
        title="Manage crypto payments and invoicing"
        description="Our secure platform is an all-encompassing, secure platform which streamlines, automates, and facilitate various types of transactions, including traditional and digital currencies, for businesses and customers alike."
        button="Get Started for Free"
        subtitle="Simplify"
      />

      <IconRow
        subtitle="Financial Stack"
        title={
          <>
            Streamline Your Payment <br /> with Seamless Integrations
          </>
        }
        description="Simplify your payment processing with Nefentus' seamless platform, offering access to over 200 wallets for effortless acceptance and processing of cryptocurrency payments with advanced security features."
        list={list}
      />

      <OptionCards />
    </div>
  );
};

export default Payroll;
