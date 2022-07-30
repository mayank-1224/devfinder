import ThemeToggle from "./ThemeToggle";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="headerCSS">
      <h1>devfinder</h1>
      <span>
        <ThemeToggle />
      </span>
    </header>
  );
};

export default Header;
