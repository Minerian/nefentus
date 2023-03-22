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
        title={<>Effortlessly manage payroll with crypto</>}
        description="Empower your employees with Nefentus' advanced crypto payroll solutions, enabling you to pay full or partial salaries and bonuses in cryptocurrency, as well as allocate shares of your token to build loyalty and incentivize productivity."
        button="Get Started for Free"
        subtitle="Manage"
      />

      <Layout
        subtitle="Organize payment"
        title={<>Effortlessly process employee benefits</>}
        description="Efficiently manage your payroll with Nefentus' advanced features, including multi-currency and multi-chain support, lower transaction fees for global teams, onboarding through CSV file uploads, and scheduling of recurring salaries."
        button="Get Started for Free"
        reverse={true}
      />

      <Layout
        title={
          <>
            Track all payments <br className="" /> in one place
          </>
        }
        description="Effortlessly review the status of all payment requests using Nefentus' visual dashboard, with the ability to easily send payment reminders to outstanding requests."
        button="Get Started for Free"
        subtitle="Track"
      />

      <IconRow
        subtitle="Financial Stack"
        title={
          <>
            Streamline Your Payment <br className="md-mob" />
            with Seamless Integrations
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
