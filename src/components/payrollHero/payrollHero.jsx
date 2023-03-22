import styles from "./payrollHero.module.css";
import HeadingCenter from "./../headingCenter/headingCenter";

import Image from "../../assets/image/dummy.png";

const PayrollHero = () => {
  return (
    <div className={`${styles.section} payroll container`}>
      <div>
        <HeadingCenter
          title={
            <>
              The most effortless payroll <br /> processing for your business
            </>
          }
          subtitle="Payroll Solutions"
        />
        <p className={`${styles.description}`}>
          Simplify your payroll process with Nefentus' flexible and efficient
          crypto and FIAT payroll solutions. Add employees, set salaries, and
          pay with ease, all while taking advantage of the benefits of
          cryptocurrency. With our comprehensive reporting tools, you can gain
          valuable insights into your payroll data, enabling you to optimize
          your operations for improved productivity and profitability.
        </p>
      </div>

      <img src={Image} alt="" />
    </div>
  );
};

export default PayrollHero;
