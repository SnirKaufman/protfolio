import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { NAVBAR_SECTIONS } from "../../Utilites/data";
import "./MuiDrawer.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

export default function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <RxHamburgerMenu
        className="hamburgerIcon"
        onClick={() => setIsDrawerOpen(true)}
      />
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        <ul className="drawer-container">
          {NAVBAR_SECTIONS.map(({ displayName, path }) => {
            return (
              <li key={displayName} className="navbar-link-list sidebar">
                <Link
                  className="scroll-link"
                  to={path}
                  offset={-80}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      </SwipeableDrawer>
    </>
  );
}
