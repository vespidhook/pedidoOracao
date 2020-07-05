import React from "react";
import Link from "next/link";

const Header = ({ Component, pageProps }) => {
  return (
    <>
      <div className="bg-gray-200 p-4 shadow-md">
        <div className="container mx-auto">
          <Link href="/">
            <a>
              <img
                className="mx-auto"
                src="http://santoantonioivoturucaia.com.br/wp-content/uploads/2020/01/ch-pedido-oracao-home.png"
                alt="PalpiteBox"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-gray-300 p-3 shadow-md text-center"></div>
    </>
  );
};

export default Header;
