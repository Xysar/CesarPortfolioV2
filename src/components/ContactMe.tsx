import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactMe = () => {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const msgRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const captchaRef = useRef() as MutableRefObject<ReCAPTCHA>;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let input = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: msgRef.current.value,
      "g-recaptcha-response": captchaRef.current.getValue(),
    };
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        input
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
        }
      );
    captchaRef.current.reset();
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
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-full gap-4"
        action=""
      >
        <input
          required
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3"
          placeholder="Your Name"
          ref={nameRef}
          type="name"
          name="name"
        />

        <input
          required
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3"
          placeholder="Your Email"
          ref={emailRef}
          type="email"
          name="email"
        />

        <textarea
          required
          ref={msgRef}
          className=" bg-slate-300 bg-opacity-50 rounded-lg p-3 h-32 "
          placeholder="Your Message"
          name="message"
        />

        <div className="self-center">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={import.meta.env.VITE_CAPTCHA_KEY}
          />
        </div>

        <button
          type="submit"
          disabled={success ? true : false}
          className={`${
            success
              ? "text-navy bg-slate-100 border-2 border-navy"
              : "bg-navy text-white"
          } flex  py-4 px-8 hover:scale-105 ease-in duration-150 mt-3  rounded-xl self-center `}
        >
          {success ? "Sent Successfully" : "Send Message"}
        </button>
        <div
          className={`${
            error ? "flex" : "hidden"
          }   py-4 px-8  ease-in duration-150  self-center  text-red-500`}
        >
          Failed to Send
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
