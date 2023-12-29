import logo from "../assets/openhouse.svg";

const Header = () => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <img src={logo} alt="open house logo" className="header__img" />
      </div>
    </header>
  );

  return content;
};
export default Header;
