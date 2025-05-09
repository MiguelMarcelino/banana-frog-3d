import React from "react";
import styles from "../styles/style";

const FeatureCard = ({ icon, title, content, index, featuresLength }) => (
    <div
        className={`flex flex-row ss:p-5 rounded-[20px] ${index !== featuresLength - 1 ? "mb-6" : "mb-0"
            } feature-card`}
    >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

export default FeatureCard;