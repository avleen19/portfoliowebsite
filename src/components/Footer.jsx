import React from "react";
import "../styles/globals.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="bottom">© {new Date().getFullYear()} Avleen Kaur</p>
    </footer>
  );
}
