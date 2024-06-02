import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center fixed bottom-0 right-0 left-0 m-auto lg:w-10/12 pb-8 pt-4 animate__animated animate__fadeInUp">
      <p className="text-sm hidden lg:block">
        Diseñado y desarrollado por Andrea Cascallana
      </p>
      <p className="text-sm text-center lg:text-end w-full lg:w-[312px]">
        Última actualización 2024
      </p>
    </div>
  );
};

export default Footer;
