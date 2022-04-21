import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import NavItem from "../components/NavItem";
import { IoClose } from "react-icons/io5";

type propTypes = {
  toggleNavMenu: () => void;
  navMenuOpen: boolean;
};

const Header = (props: propTypes) => {
  return (
    <header className="header">
      <div className="menu" onClick={() => props.toggleNavMenu()}>
        {!props.navMenuOpen ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
      </div>
      <img
        className="headerLogo"
        src={require("../assets/Logo2_Grey.webp")}
        alt="Company Logo"
        onClick={() => (window.location.href = "#")}
      />
      <div className="headerText">Company Logo</div>
      <nav className="headerNav">
        <IoClose className="headerExitButton" onClick={() => props.toggleNavMenu()} />
        <NavItem text="Home"></NavItem>
        <NavItem text="About Us"></NavItem>
        <NavItem text="Gallery"></NavItem>
        <NavItem text="Contact"></NavItem>
      </nav>
    </header>
  );
};

export default Header;
