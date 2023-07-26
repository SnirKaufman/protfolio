interface NAVBAR {
  displayName: string;
  path: string;
}

const NAVBAR_SECTIONS: NAVBAR[] = [
  { displayName: "Home", path: "#" },
  { displayName: "About", path: "#about" },
  { displayName: "Projects", path: "#projects" },
  { displayName: "Contact", path: "#contact" },
];

export default NAVBAR_SECTIONS;
