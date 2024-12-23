import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Copyright © 2024 C-DAC Delhi. All Rights Reserved.</p>
      <p>
        Developed & Maintained by e-Governance Solutions Group, C-DAC Delhi
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1874a4",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#ffffff",
  },
};

export default Footer;
