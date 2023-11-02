import { motion } from "framer-motion";
import { appearIn, fadeIn } from "../utils/motion";

import HeroMobileImg from "../assets/image-hero-mobile.png";

function Hero() {
  return (
    <main className="hero h-[94vh] desktop:h-auto">
      <div className="container pt-[252px] desktop:pt-[150px] flex flex-col">
        <motion.div
          variants={fadeIn("up", 0.7, 0.5)}
          initial={"initial"}
          animate={"animate"}
          className="w-full max-w-[500px] desktop:max-w-none"
        >
          <h1 className="text-xl font-bold leading-[70px] desktop:leading-normal text-dark-blue">
            Maximize skill, minimize budget
          </h1>
          <p className="text-md mt-[32px] max-w-[450px] text-gray">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <a href="#" className="button-gradient mt-[46.5px]">
            Get Started
          </a>
        </motion.div>
        <motion.img
          variants={appearIn(1.5, 1)}
          initial={"initial"}
          animate={"animate"}
          src={HeroMobileImg}
          alt=""
          className="hidden desktop:block w-full max-w-[650px] mx-auto mt-[45px]"
        />
      </div>
    </main>
  );
}

export default Hero;
