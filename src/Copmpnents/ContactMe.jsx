import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "motion/react";
const Motion = motion;

const ContactMe = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvgovjb",
        "template_h7bynhf",
        e.target,
        "SKD2KnJ9hVDHmOkrC",
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        e.target.reset();

        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");

        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-center mb-4">
          Contact <span className="text-cyan-400">me.</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          I can't wait to hear from you, contact me for new opportunities or to
          discuss that awesome project idea!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl mb-6">Get in touch</h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email Address:</p>
                <a
                  href="mailto:malakalmasri76@gmail.com"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  malakalmasri76@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone Number:</p>
                <a
                  href="tel:+972592281827"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  +972592281827
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location:</p>
                <p className="text-white">Palestine, Gaza</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm mb-2 text-gray-400"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-400 text-black py-3 rounded
                    disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send message"}
              </Motion.button>

              {status === "success" && (
                <div
                  className="mt-4 text-sm text-cyan-400 bg-cyan-400/10
                        border border-cyan-400/20 rounded px-4 py-3"
                >
                  ✔ Message sent successfully. I’ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div
                  className="mt-4 text-sm text-red-400 bg-red-400/10
                        border border-red-400/20 rounded px-4 py-3"
                >
                  ✖ Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
