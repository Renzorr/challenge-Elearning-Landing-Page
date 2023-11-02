import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import Menu from "../components/Menu";
import Logo from "../assets/logo-dark.svg";

function Header() {
  return (
    <motion.header
      variants={fadeIn("down", 0, 0.6)}
      initial={"initial"}
      animate={"animate"}
      className="absolute w-full z-10"
    >
      <Menu img={Logo} bg="button" />
    </motion.header>
  );
}

export default Header;
