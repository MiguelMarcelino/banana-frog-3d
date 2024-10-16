import React from "react";
import { useTranslation } from "react-i18next";

const Product = ({ content, name, sizes, img }) => {
  const { t, _, ready } = useTranslation();

  return (
    <div className="justify-center flex flex-col px-10 sm:py-6 py-3 rounded-[20px] md:w-[370px] w-[350px] md:mr-10 mr-0 my-5 feedback-card">
      <img src={img} alt={name} className="w-[300px] h-[300px] object-contain" />
      <div className="flex flex-row h-[50px] my-5">
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
            {t("product.size_title")} {sizes}
          </p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] md:leading-[32px] text-white md:max-w-[300px]">
        {content}
      </p>
    </div>
  );
};

export default Product;
