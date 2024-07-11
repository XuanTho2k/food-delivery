import React from "react";
import style from "./Hero.module.css";
import { styles } from "@/constants";
import { Button } from "@nextui-org/react";
const Hero = () => {
  return (
    <div
      className={`w-full h-full ${style["banner"]} flex items-center z-10 absolute `}
    >
      <div
        className={`${style["backdrop_shaders"]} w-full`}
      >
        <div className="w-[80%] m-auto">
          <h1 className="text-4xl py-5 xl:text-6xl font-[700] xl:leading-[80px] sm:mt-20 font-Inter ">
            Healthy and delicious meals, <br />
            HDelivered straight to your door!
          </h1>
          <p className={`${styles.label} !text--[18px]`}>
            Healthy food, drinks and groceries available for
            delivery or pickup. Great <br /> discounts for
            first delivery.
          </p>
          <br />
          <Button
            className={`${styles.button} w-[180px] md:mb-12`}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
