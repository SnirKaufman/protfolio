import Drawer from "../MuiDrawer/MuiDrawer";
import "./Navbar.css";
import { NAVBAR_SECTIONS } from "../../Utilites/data";
import { Link } from "react-scroll";

function Navbar() {
  const NAVBAR_TITLE = "Snir.dev";

  return (
    <>
      <nav className="navbar">
        <div>
          <Drawer />
          <ul className="list-container">
            {NAVBAR_SECTIONS.map(({ displayName, path, id }) => {
              return (
                <li key={id} className="navbar-link-list">
                  <Link className="scroll-link" offset={-80} to={path}>
                    {displayName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <h3>{NAVBAR_TITLE}</h3>
      </nav>
    </>
  );
}

export default Navbar;
