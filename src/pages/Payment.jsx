import Layout from "./../components/layout/layout";

import Arrow from "../assets/icon/arrow.svg";
import Grow from "../components/grow/grow";
import IconRow from "./../components/iconRow/iconRow";
import Why from "../components/why/why";
import DataCards from "../components/dataCards/dataCards";
import Circle from "../components/circle/circle";
import PaymentCards from "./../components/paymentCards/paymentCards";

import Logo1 from "../assets/icon/methods/logo1.svg";
import Logo2 from "../assets/icon/methods/logo2.svg";
import Logo3 from "../assets/icon/methods/logo3.svg";
import Logo4 from "../assets/icon/methods/logo4.svg";
import Logo5 from "../assets/icon/methods/logo5.svg";
import Logo6 from "../assets/icon/methods/logo6.svg";
import Logo7 from "../assets/icon/methods/logo7.svg";

const list = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Payment = () => {
  return (
    <div>
      <Circle />
      <Layout
        heading="Accept Crypto in less than 5 minutes"
        description="Experience the future of finance by revolutionizing your invoicing and payment processes with our advanced automation tools and secure crypto-based checkouts, simplifying financial management and maximizing revenue potential."
        button={
          <>
            <p>Start now, it’s free</p>
            <img src={Arrow} alt="" />
          </>
        }
        store={true}
      />

      <Grow />
      <IconRow
        subtitle="Dont Be Left Behind"
        title={
          <>
            Adopt the Payment Methods <br /> that Power the Future
          </>
        }
        description="We offer a diverse range of payment options, including popular cryptocurrencies like Bitcoin, Ethereum, Ripple, and USDT, to help you effortlessly sell your products and services to a global audience. Our platform's flexibility and scalability enable you to customize your payment capabilities and stay ahead of the curve in today's rapidly evolving payment landscape. Join us today and take your business to the next level."
        list={list}
      />

      <Why />
      <DataCards />

      <PaymentCards />
    </div>
  );
};

export default Payment;
