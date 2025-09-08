import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-slate-50 animate__animated animate__fadeInUp z-40">
      <div className="container m-auto flex justify-between items-center lg:w-10/12 pb-8 pt-4">
        <p className="text-sm hidden lg:block">
          Diseñado y desarrollado por Andrea Cascallana
        </p>
        <p className="text-sm text-center lg:text-end w-full lg:w-[312px]">
          Última actualización 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
