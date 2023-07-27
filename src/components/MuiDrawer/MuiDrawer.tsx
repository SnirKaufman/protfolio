import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NAVBAR_SECTIONS from "../../Utilites/data";
import "./MuiDrawer.css";
import { RxHamburgerMenu } from "react-icons/rx";

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
        {NAVBAR_SECTIONS.map(({ displayName, path }) => {
          return (
            <ul key={displayName} className="navbar-container">
              <li className="navbar-link-list sidebar">
                <a href={path} onClick={() => setIsDrawerOpen(false)}>
                  {displayName}
                </a>
              </li>
            </ul>
          );
        })}
      </SwipeableDrawer>
    </>
  );
}
