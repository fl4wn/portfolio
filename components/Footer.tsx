import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-gray-300 py-4">
        <p>
          Built with
          {` `}
          <a className="hover:text-blue-500" href="https://nextjs.org/">
            Next.js
          </a>
        </p>
        <p>© {new Date().getFullYear()}, Alkım Caner Soydan</p>
      </div>
    </footer>
  );
};

export default Footer;
