import Menu from "../components/Menu";
import Logo from "../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="bg-black flex items-center justify-center  h-[120px]">
      <Menu img={Logo} bg="button-gradient-2" />
    </footer>
  );
}

export default Footer;
