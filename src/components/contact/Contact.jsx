import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { IoIosPersonAdd } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineMessage } from "react-icons/md";
// import { span } from "motion/react-client";

const Contact = () => {
  // const [selectedOption, setSelectedOption] = useState("");
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
    <div id="testimonials" className=" sm:pt-12 lg:py-32">
      <div className="container w-full m-auto">
        <div className="flex flex-col justify-center">
          <h2 className="section-title px-2 text-black">
            Let&#39;s work together.
          </h2>
        </div>

        <div className="grid justify-center items-center lg:grid-cols-3 gap-8 p-10 mt-12 bg-white rounded-lg">
          <div className="bg-[#011c2b] lg:col-span-1 rounded-lg p-6 h-full max-lg:order-1">
            <h2 className="text-xl text-white">Contact Information</h2>
            <p className="text-base text-gray-300 mt-4">
              Available for freelance or full-time positions.
            </p>

            <ul className="mt-16 space-y-4 text-sm">
              <li className="flex items-center">
                <MdOutlineMarkEmailUnread className="text-lg" />
                <div className="text-white ml-4">
                  michaelgsmith1914@gmail.com
                </div>
              </li>
              <li className="flex items-center">
                <IoIosPhonePortrait className="text-lg" />
                <div className="text-white ml-4">Ask via e-mail</div>
              </li>
              <li className="flex items-center">
                <IoLocationOutline className="text-lg" />
                <div className="text-white ml-4">Atlanta, GA, USA</div>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-4 mt-10">
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com/in/michael-g-smith-9b9677120/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://github.com/CloudEngineerMike"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0 ">
                <a
                  href="https://www.youtube.com/channel/UCWqT2XT9Pjc-MKPHtDoLesQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrYoutube className="text-lg " />
                </a>
              </li>
            </ul>
          </div>
          <div className="p-10 lg:col-span-2 bg-white rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    name="user_firstname"
                    placeholder="First Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                  <IoIosPersonAdd className="text-2xl text-gray-300" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    name="user_lastname"
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                  <IoIosPersonAdd className="text-2xl text-gray-300" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No. (optional)"
                    name="user_phone"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                  <FaPhone className="text-lg text-gray-300" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Email"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                  <TfiEmail className="text-lg text-gray-300" />
                </div>

                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    rows={6}
                    required
                    name="user_message"
                    placeholder="Write your message..."
                    className="px-2 pt-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  ></textarea>
                  <MdOutlineMessage className="text-xl text-gray-300" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
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
          {/* <div className="grid justify-center items-center col-span-3">
            <ComputerModelContainer />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
