import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white text-lg">
        Segunda Igreja Batista em Bonsucesso -{" "}
        <a
          className="hover:underline"
          href="http://www.sibbonsucesso.com.br/"
          target="_blank"
        >
          Site
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.facebook.com/sibbonsucesso/"
          target="_blank"
        >
          Facebook
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.youtube.com/sibbonsucesso/"
          target="_blank"
        >
          Youtube
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.instagram.com/sibbonsucesso/"
          target="_blank"
        >
          Instagran
        </a>
        <div className="mt-2">
          <img
            className={`inline p-4 mx-4 ${styles.imageSize}`}
            src="http://www.sibbonsucesso.com.br/images/sibb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
