"use client";
import Image from "next/image";
import { Button } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <p className="sub__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias
        </p>

        <Button
          title="Explode Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
