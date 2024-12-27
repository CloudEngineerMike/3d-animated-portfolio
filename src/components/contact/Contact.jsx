import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { styles } from "../../styles";
// import { span } from "motion/react-client";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
          // console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className=" sm:pt-20 lg:py-24">
      <div className="container w-full m-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className={styles.sectionHeadText}>Contact</h2>
          <p className="xs:text-sm pb-6">Contact me by submitting the form below! <br /> I will get back to you as soon asap.</p>

        </div>

        {/* <div className="grid justify-center items-center md:grid-cols-4 sm:gap-16 md:gap-8 lg:gap-8 sm:mt-12 lg:mt-20 lg:bg-white lg:p-8 lg:shadow-2xl lg:rounded-2xl"> */}
        <div className="flex justify-center items-center">
          
          <div className="p-7 xs:w-full md:col-span-2 lg:col-span-3 bg-white rounded-lg  shadow-2xl lg:shadow-none md:w-full">

            <form ref={form} onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex flex-col  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
                  <h2 className="pb-2 font-semibold">Name</h2>
                  <input
                    type="text"
                    required
                    name="user_firstname"
                    placeholder="Enter Your Name"
                    className="p-4 bg-slate-200 rounded-md w-full  text-gray-800 outline-indigo-400"
                  />
                </div>

                <div className="relative flex flex-col  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
                  <h2 className="pb-2 font-semibold">Email</h2>
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Enter Your Email"
                    className="p-4 bg-slate-200 rounded-md w-full  text-gray-800 outline-indigo-400"
                  />
                </div>

                <div className="relative flex flex-col  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
                  <h2 className="pb-2 font-semibold">Message</h2>
                  <textarea
                    rows={6}
                    required
                    name="user_message"
                    placeholder="Enter Your Message"
                    className="p-4 bg-slate-200 rounded-md w-full  text-gray-800 outline-indigo-400"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-indigo-600 text-white font-semibold tracking-wider xs:text-xs uppercase lg:text-base p-4 rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
              {success && (
                <span className="text-green-700">
                  Your message has been sent!
                </span>
              )}
              {error && (
                <span className="text-red-700">Something went wrong!</span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
