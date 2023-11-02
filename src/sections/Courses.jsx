import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import IconAnimation from "../assets/icon-animation.svg";
import IconBusiness from "../assets/icon-business.svg";
import IconCrypto from "../assets/icon-crypto.svg";
import IconDesing from "../assets/icon-design.svg";
import IconPhotography from "../assets/icon-photography.svg";

const COURSESCARDS = [
  {
    img: IconAnimation,
    name: "Animation",
    content:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    img: IconDesing,
    name: "Design",
    content:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    img: IconPhotography,
    name: "Photography",
    content:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    img: IconCrypto,
    name: "Crypto",
    content:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    img: IconBusiness,
    name: "Business",
    content:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

function Courses() {
  return (
    <section className="bg-bg-course-gradient pb-[138px]">
      <div className="container grid grid-cols-responsive justify-center gap-x-[30px] gap-y-[83px]">
        <article className="card desktop:min-h-[150px] bg-bg-card-gradient text-white">
          <h2 className="font-bold text-lg pt-[61px] desktop:pt-[30px] leading-[40px]">
            Check out our most popular courses!
          </h2>
        </article>
        {COURSESCARDS.map((card, i) => {
          return (
            <motion.article
              variants={fadeIn("up", i * 0.14, 0.6)}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.25 }}
              className="card pt-[58px] bg-white"
            >
              <img
                src={card.img}
                alt=""
                className="absolute top-[-27px]"
                aria-hidden="true"
              />
              <h3 className="font-bold text-[24.5px] mb-[20px] text-dark-blue">
                {card.name}
              </h3>
              <p className="text-md text-gray">{card.content}</p>
              <a
                href="#"
                className="font-bold text-[18px] mt-auto mb-[42px] text-dark-pink"
              >
                Get Started
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Courses;
