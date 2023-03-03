import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef(null);
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current
    );
  };

  return (
    <div
      data-aos="fade-up"
      className="mx-auto pb-24 px-2 md:px-12 max-w-[1080px]"
    >
      <h3 className="text-center text-3xl font-bold mb-10 ">Contact Me</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        <div className="bg-cyan-50 m-auto rounded-xl p-4 w-72 h-24 flex items-center gap-3 hover:shadow-md ">
          <img className="w-10 h-10" src="assets/mail-icon.svg" alt="" />
          <p className="text-center text-sm">CesarCamacho760@Gmail.com</p>
        </div>
        <div className="bg-orange-50 m-auto rounded-xl p-4 w-72 h-24 flex items-center gap-3 hover:shadow-md ">
          <img className="w-10 h-10 " src="assets/phone-call-icon.svg" alt="" />
          <p className="text-center">(760) 917-7209</p>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full gap-4"
        action=""
      >
        <input
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3"
          placeholder="Your Name"
          type="name"
          name="name"
        />

        <input
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3"
          placeholder="Your Email"
          type="email"
          name="email"
        />

        <textarea
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3 h-32 "
          placeholder="Your Message"
          name="message"
        />
        <button
          type="submit"
          className="py-4 px-8 hover:scale-105 ease-in duration-150 mt-3 bg-navy rounded-xl self-center text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
