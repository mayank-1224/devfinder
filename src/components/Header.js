import ThemeToggle from "./ThemeToggle";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="headerCSS">
      <div className="titleCSS">devfinder</div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
