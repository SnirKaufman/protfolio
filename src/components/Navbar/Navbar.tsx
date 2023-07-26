import SwipeableTemporaryDrawer from "../MuiDrawer/MuiDrawer";
import "./Navbar.css";
import NAVBAR_SECTIONS from "../../Utilites/data";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left-side-container">
          <SwipeableTemporaryDrawer />
          {NAVBAR_SECTIONS.map(({ displayName, path }) => {
            return (
              <ul key={displayName}>
                <li className="navbar-link-list">
                  <a href={path}>{displayName}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <h3 className="navbar-title">Snir.dev</h3>
      </nav>
    </>
  );
}

export default Navbar;
