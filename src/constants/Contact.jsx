import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <section id="contact" ref={contactRef} className="py-16">
      <div className="px-4 text-center">
        <h2 className="mb-4 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className=" mb-8 text-lg lg:text-xl">
          Coffee with me :)<br/> {" "}
          <a href="mailto:dhairya9d@gmail.com" className="border-b text-sm md:text-base text-blue-400">
            dhairya9d@gmail.com
          </a>
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/dhairya-kaithwar-570033133/"
            target=" _blank"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/DhairyaKaithwar"
            target=" _blank"
            className="contact-icon"
            aria-label="Visit my Github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/dhairya-kaithwar-570033133/"
            target=" _blank"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
