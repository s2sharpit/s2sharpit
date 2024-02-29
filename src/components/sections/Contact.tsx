"use client";

import Link from "next/link";
import contactData from "@/data/contactData";
import { MdArrowForward } from "react-icons/md";
import { Svg } from "@/components/Svg";
import { Button, Section, Subtle, Title, Wrapper } from "@/components/ui";
import { useState } from "react";
import submitContact from "@/lib/contactAction";

export default function Contact() {
  const [status, setStatus] = useState<boolean>();


  const handleSubmit = async (formData: FormData) => {
    try {
        const response = await submitContact({
            username: String(formData.get("username")),
            email: String(formData.get("email")),
            message: String(formData.get("message")),
        });
        if (response.status == 200) {
            setStatus(true);
        } else {
            setStatus(false);
        }
        setTimeout(() => setStatus(undefined), 1500);
    } catch (e) {
        setStatus(false);
        console.log(e);
        
    }
  };

  return (
    <Section id="contact">
      <Title className="title">Get in Touch</Title>
      <Subtle className="subTitle">Contact Me</Subtle>
      <Wrapper variant={"contact"}>
        <div>
          <h3 className="text-xl text-center font-medium mb-6 text-neutral-700">
            Talk to Me
          </h3>
          <div className="grid gap-y-4 grid-cols-1 xs:grid-cols-[300px] md:grid-cols-1 lg:grid-cols-[300px] max-md:justify-center">
            {contactData.map((data) => (
              <Card key={data.title} data={data} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-center font-medium mb-6 text-neutral-700">
            Write Me A Message
          </h3>
          <form
            action={handleSubmit}
            className="md:w-96 max-sm:max-w-sm max-md:mx-auto"
          >
            <div className="relative mb-8 h-16">
              <label
                htmlFor="name"
                className="absolute -top-3 left-5 text-xs p-1 bg-neutral-50 z-20"
              >
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder="Enter Your Name"
                className="absolute top-0 left-0 w-full h-full border-2 border-neutral-700/40 bg-transparent text-text-color outline-none rounded-xl p-6 z-10"
              />
            </div>
            <div className="relative mb-8 h-16">
              <label
                htmlFor="email"
                className="absolute -top-3 left-5 text-xs p-1 bg-neutral-50 z-20"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email"
                className="absolute top-0 left-0 w-full h-full border-2 border-neutral-700/40 bg-transparent text-text-color outline-none rounded-xl p-6 z-10"
              />
            </div>
            <div className="relative mb-8 h-44">
              <label
                htmlFor="message"
                className="absolute -top-3 left-5 text-xs p-1 bg-neutral-50 z-20"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                cols={30}
                rows={10}
                placeholder="Enter Your Message"
                autoComplete="off"
                className="absolute top-0 left-0 w-full h-full border-2 border-neutral-700/40 bg-transparent text-text-color outline-none rounded-xl p-6 z-10 resize-none"
              />
            </div>
            {/* <Button size={"lg"}>
              Send Message
              <Svg.Message />
            </Button> */}
            <Button
              size={"lg"}
              className={`${
                status !== undefined
                  ? status
                    ? "bg-green-500 hover:bg-green-500"
                    : "bg-red-500 hover:bg-red-500"
                  : "bg-neutral-800 hover:bg-neutral-900 text-neutral-200 "
              } `}
            >
              {`${
                status !== undefined
                  ? status
                    ? "Message Sent"
                    : "Failed to Send"
                  : "Send Message"
              }`}
              <Svg.Message />
            </Button>
          </form>
        </div>
      </Wrapper>
    </Section>
  );
}

function Card({ data }: { data: any }) {
  return (
    <div className="container bg-white border p-4 rounded-xl grid place-items-center">
      <span className="text-2xl text-neutral-700">{data.icon}</span>
      <h3 className="text-sm font-medium">{data.title}</h3>
      <span className="text-sm block mb-3">{data.desc}</span>

      <Link
        href={data.url}
        target="_blank"
        className="group text-sm inline-flex items-center gap-x-1"
      >
        Write Me
        <span className="transition duration-300 group-hover:translate-x-1">
          <MdArrowForward />
        </span>
      </Link>
    </div>
  );
}
