import React from "react";

const Contact = () => {
  return (
    <div className="contacto py-10 flex flex-col gap-8 lg:py-20 contact-container lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="contact-bottom-left-content lg:col-span-1 flex flex-col gap-4">
        <p className="badge badge-outline">03</p>
        <p className="font-bold uppercase text-lg">¡Hablemos!</p>
        <div className="btn btn-ghost animate-bounce w-fit hover:bg-transparent">
          <span class="material-symbols-outlined hidden lg:block hover:bg-transparent">arrow_right_alt</span>
          <span class="material-symbols-outlined block lg:hidden hover:bg-transparent">arrow_downward</span>
        </div>
      </div>
      <div className="contact-right-content lg:col-span-2 lg:mt-9">
        <div
          className="tooltip w-full lg:w-fit bg-slate-50 hover:bg-slate-50"
          data-tip="Haz click para enviarme un mail"
        >
          <a
            className="btn text-lg bg-slate-50 border-0 border-b-[1px] border-b-slate-950 hover:bg-slate-50 hover:border-b-[1px] hover:border-b-slate-950 hover:text-slate-600 transition-all duration-150 ease-out hidden lg:block"
            href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
            target="_blank"
          >
            andreacascallanarodriguez@gmail.com
          </a>
          <a
            className="btn btn-primary text-lg w-full block lg:hidden"
            href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
            target="_blank"
          >
            Envíame un mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
