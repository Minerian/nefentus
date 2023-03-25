import Layout from "../components/layout/layout";
import Navigation from "../components/navigation/navigation";

import Arrow from "../assets/icon/arrow.svg";
import Circle from "../components/circle/circle";
import Logos from "../components/logos/logos";
import Cards from "../components/cards/cards";
import About from "../components/about/about";
import Reviews from "../components/reviews/reviews";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Circle />
      <Layout
        heading={t("home.heroTitle")}
        description={t("home.heroDescription")}
        button={
          <>
            <p>{t("home.heroButton")}</p>
            <img src={Arrow} alt="" />
          </>
        }
        store={true}
      />

      <Logos />
      <Cards />

      <Layout
        subtitle={t("home.simplifySubtitle")}
        title={t("home.simplifyTitle")}
        description={t("home.simplifyDescription")}
        button={t("home.layoutButton")}
      />

      <Layout
        title={
          <>
            {t("home.payrollTitleP1")} <br /> {t("home.payrollTitleP2")}
          </>
        }
        description={t("home.payrollDescription")}
        button={t("home.layoutButton")}
        subtitle={t("home.payrollSubtitle")}
        reverse={true}
      />

      <About />

      <Reviews />
    </>
  );
};

export default Home;
