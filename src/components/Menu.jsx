function Menu(props) {
  return (
    <nav className="container flex items-center justify-between pt-[24px]">
      <a href="#">
        <img src={props.img} alt="Skilled logo" />
      </a>
      <a href="#" className={props.bg}>
        Get Started
      </a>
    </nav>
  );
}

export default Menu;
