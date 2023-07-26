import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import NAVBAR_SECTIONS from "../../Utilites/data";
import "./MuiDrawer.css";

export default function SwipeableTemporaryDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Button</Button>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        {NAVBAR_SECTIONS.map(({ displayName, path }) => {
          return (
            <ul key={displayName}>
              <li className="navbar-link-list sidebar">
                <a href={path}>{displayName}</a>
              </li>
            </ul>
          );
        })}
      </SwipeableDrawer>
    </>
  );
}
