import React from "react";

function Header2() {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.headerLink}>Home</a>
      <div style={styles.header1}>
        <a href="/contact-us" style={styles.headerLink}>Contact us</a>
        <a href="/about" style={styles.headerLink}>About</a>
        <a href="/login" style={styles.headerLink}>Login</a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: "38px",
    backgroundColor: "#1874a4",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
  },
  header1: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  headerLink: {
    marginLeft: "8px",
    marginRight: "8px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header2;
