import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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

    <div class="xs:pb-12 xs:h-full md:h-screen bg-slate-950">
        <div className="flex flex-col justify-center text-center">
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Submit the form below and I&#39;ll reply!
          </p>

          {/* <div className="container flex "> */}
            <div className="container mx-auto flex justify-center items-center h-full  mt-10">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white p-7 lg:p-8 rounded-lg shadow-2xl xs:w-full lg:w-[700px]"
              >
                <div className="grid gap-8">
                  <div className=" flex flex-col justify-start items-start  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
                    <h2 className="pb-2 font-semibold">Name</h2>
                    <input
                      type="text"
                      required
                      name="user_firstname"
                      placeholder="Enter Your Name"
                      className="p-4 bg-slate-200 rounded-md w-full  text-gray-800 outline-indigo-400"
                    />
                  </div>

                  <div className=" flex flex-col justify-start items-start  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
                    <h2 className="pb-2 font-semibold">Email</h2>
                    <input
                      type="email"
                      required
                      name="user_email"
                      placeholder="Enter Your Email"
                      className="p-4 bg-slate-200 rounded-md w-full  text-gray-800 outline-indigo-400"
                    />
                  </div>

                  <div className=" flex flex-col justify-start items-start  text-gray-500 xs:text-xs sm:text-sm lg:text-base">
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
  );
};

export default Contact;
