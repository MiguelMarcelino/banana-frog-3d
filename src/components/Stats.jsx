import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/style";

const Stats = () =>  {
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const statistics = t("stats", { returnObjects: true });

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {statistics.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[40px] xs:leading-[43px] leading-[83px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[22px] xs:leading-[26px] leading-[30px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
