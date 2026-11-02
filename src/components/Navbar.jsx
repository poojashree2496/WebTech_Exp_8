import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/players", label: "Players" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" }
];

function Navbar() {
  return (
    <header>
      <h1 className="logo">GAMING COMMUNITY</h1>
      <nav>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
