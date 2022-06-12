import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-neutral-900 border-t border-neutral-800 mt-8 py-4">
      <span className="text-white text-center">
        Built by{" "}
        <a
          href="https://imcamilomillan.web.app/"
          target="_blank"
          rel="noreferrer"
          className="font-medium hover:text-purple-500"
        >
          Camilo Millan
        </a>
      </span>
    </footer>
  );
};

export default Footer;
