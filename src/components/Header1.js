import React from "react";

function Header1() {
  return (
    <header style={styles.header}>
      <p style={styles.headerP}>Helpline Number: XXXX XXX XXXX</p>
      <div style={styles.header1}>
        <p style={styles.headerP}>Skip to main Content</p>
        <p style={styles.headerP}>A+</p>
        <p style={styles.headerP}>A</p>
        <p style={styles.headerP}>A-</p>
        <p style={styles.headerP}>Policies</p>
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
  headerP: {
    marginLeft: "8px",
    marginRight: "8px",
  },
};

export default Header1;
