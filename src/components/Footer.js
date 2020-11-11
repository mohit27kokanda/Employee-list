import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Abc Pvt. Ltd.  Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
