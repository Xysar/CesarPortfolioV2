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
      className="mx-auto max-w-[1080px] px-2 pb-24 md:px-12"
    >
      <h3 className="mb-10 text-center text-3xl font-bold ">Contact Me</h3>
      <div className="mb-10 flex flex-wrap gap-3">
        <div className="m-auto flex h-24 w-72 items-center gap-3 rounded-xl bg-cyan-50 p-4 hover:shadow-md ">
          <img className="h-10 w-10" src="assets/mail-icon.svg" alt="" />
          <p className="text-center text-sm">CesarCamacho760@Gmail.com</p>
        </div>
        <div className="m-auto flex h-24 w-72 items-center gap-3 rounded-xl bg-orange-50 p-4 hover:shadow-md ">
          <img className="h-10 w-10 " src="assets/phone-call-icon.svg" alt="" />
          <p className="text-center">(760) 917-7209</p>
        </div>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full flex-col gap-4"
        action=""
      >
        <input
          required
          className=" rounded-lg bg-slate-300 bg-opacity-50 p-3"
          placeholder="Your Name"
          ref={nameRef}
          type="name"
          name="name"
        />

        <input
          required
          className=" rounded-lg bg-slate-300 bg-opacity-50 p-3"
          placeholder="Your Email"
          ref={emailRef}
          type="email"
          name="email"
        />

        <textarea
          required
          ref={msgRef}
          className=" h-32 rounded-lg bg-slate-300 bg-opacity-50 p-3 "
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
              ? "border-2 border-navy bg-slate-100 text-navy"
              : "bg-navy text-white"
          } mt-3  flex self-center rounded-xl py-4 px-8 duration-150  ease-in hover:scale-105 `}
        >
          {success ? "Sent Successfully" : "Send Message"}
        </button>
        <div
          className={`${
            error ? "flex" : "hidden"
          }   self-center py-4  px-8 text-red-500  duration-150  ease-in`}
        >
          Failed to Send
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
