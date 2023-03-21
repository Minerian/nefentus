import Layout from "./../components/layout/layout";

import Image from "../assets/image/affiliate.svg";
import Why from "./../components/why/why";
import Compare from "../components/compare/compare";

const content = [
  {
    title: "Overview",
    description:
      "At a glance, see how much you have earned and how many transactions have been completed.",
  },
  {
    title: "Leaderboard",
    description:
      "Compare your performance to other affiliates and get listed on the leaderboard.",
  },
  {
    title: "Goal function",
    description:
      "Track your commissions and compare revenues for your promoted products.",
  },
  {
    title: "Mobile App",
    description:
      "Keep track of your commissions and get notified about sales with our app.",
  },
];

const Affiliate = () => {
  return (
    <div>
      <Layout
        subtitle="Affiliate Program"
        heading="Earn commissions effortlessly "
        description="Sign up for Nefentus' affiliate program for free and start earning commissions on autopilot."
        button={
          <>
            <p>Create your account</p>
          </>
        }
        image={Image}
        list
      />

      <Why
        title={
          <>
            Products Tailored <br /> for Affiliate
          </>
        }
        content={content}
      />

      <Compare />
    </div>
  );
};

export default Affiliate;
