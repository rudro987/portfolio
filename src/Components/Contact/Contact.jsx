import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiSolidMessageRounded } from "react-icons/bi";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vvu2ssn",
        "template_vtsqnai",
        form.current,
        "cH1K88KnFV3g8QyIs"
      )
      .then(
        (response) => console.log("SUCCESS!", response.status, response.text),
        (error) => console.log("FAILED...", error)
      );
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto py-40">
        <div className="w-full flex justify-center pb-20">
          <h1 className="section-title uppercase">Contact Me</h1>
        </div>

        <div className="px-4">
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="space-y-8"
          >
            <div className="w-full flex justify-between items-center gap-5">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                className="block py-3 w-full text-lg text-bgFrom bg-transparent border-b-2 border-bgFrom focus-visible:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-1/2">
              <input
                type="email"
                name="email"
                className="bg-gray-50 block w-full py-3 text-bgFrom bg-transparent text-lg border-b-2 border-bgFrom focus-visible:outline-none"
                placeholder="email@example.com"
                required
              />
            </div>
            </div>

            <div className="sm:col-span-2">
              <textarea
                name="message"
                rows={10}
                className="block py-3 w-full text-lg text-bgFrom bg-transparent border-b-2 border-bgFrom focus-visible:outline-none"
                placeholder="Leave a Message..."
                defaultValue={""}
              />
            </div>
            <div className="flex justify-center pt-10">
            
            <button
              type="submit"
              className="py-5 px-8 text-base text-bgFrom font-medium text-center border-2 [border-image:linear-gradient(to_right,#00d2ff,#3a7bd5)_30] hover:bg-gradient-to-r hover:from-bgFrom hover:to-bgTo hover:text-white message-btn uppercase"
            >
            <div className="flex items-center gap-2">
            <BiSolidMessageRounded className="text-2xl" />
              Send message
              </div>
            </button>
            
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
