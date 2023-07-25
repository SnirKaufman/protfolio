import "./Navbar.css";

const Navbar = () => {
  interface Navbar {
    displayName: string;
    path: string;
  }

  const NAVBAR_SECTIONS: Navbar[] = [
    { displayName: "Home", path: "/" },
    { displayName: "About", path: "/about" },
    { displayName: "Projects", path: "/projects" },
    { displayName: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <h3>Snir.dev</h3>
        </div>
        <div className="navbar-right-side-container">
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
      </nav>
    </>
  );
};

export default Navbar;
