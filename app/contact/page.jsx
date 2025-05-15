"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 821 2546 9584 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nandobdilah1606@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "st.Mango no.1 , Indonesia",
  },
];

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container  xl:px-auto px-5 ">
        <div className="flex flex-col xl:flex-row  justify-center items-center">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Please fill out the form below to contact me.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name={"from_name"}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name={"from_lastname"}
                  required
                />
                <Input
                  type="text"
                  placeholder="Email"
                  name={"from_email"}
                  required
                />
                <Input
                  type="number"
                  placeholder="Phone"
                  name={"from_phone"}
                  required
                />
              </div>

              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service </SelectLabel>
                    <SelectItem value="web_development">Web Development</SelectItem>
                    <SelectItem value="ui_ux_designer">UI/UX Designer</SelectItem>
                    <SelectItem value="android_development">Android Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px] "
                placeholder="Type your message here"
                name={"message"}
                required
              />

              <Button
                size="md"
                className="max-w-40"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "success"
                  ? "Sent!"
                  : status === "error"
                  ? "Try Again"
                  : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Gagal mengirim, silakan coba lagi.
                </p>
              )}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
