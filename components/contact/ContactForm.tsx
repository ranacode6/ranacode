'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch('/api/sendMailContact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    const res = await response.json();
    toast(res.message);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="bg-white dark:bg-[#1E293B] px-8 py-8 md:px-16 lg:px-32 lg:py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Div */}
      <div className="w-full md:w-1/2 flex flex-col justify-start gap-5">
        <span className="bg-blue-200 w-fit px-2 py-1 rounded-md text-blue-700 text-sm">
          GET IN TOUCH
        </span>
        <h1 className="font-bold font-jost text-4xl text-indigo-950 dark:text-gray-200">
          Let&apos;s start a{' '}
          <span className="text-indigo-600">conversation</span>
        </h1>
        <p className="text-gray-600 text-lg font-jost dark:text-gray-400">
          We&apos;d love to hear from you. Contact us today to learn more about
          how we can help you take your business to the next level.
        </p>
        {/* phone */}
        <div className="flex gap-4 group w-fit">
          {/* phone icon */}
          <div className="px-4 py-2 flex items-center justify-center w-fit bg-indigo-600 rounded-md group-hover:bg-transparent text border border-indigo-600">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-3xl text-white group-hover:text-indigo-600 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-black dark:text-gray-300">
              Phone
            </h2>
            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
              +1 443 609 2794
            </p>
          </div>
        </div>
        {/* email section */}
        <div className="flex  gap-4 group w-fit">
          {/* email icon */}
          <div className="px-4 py-2 flex items-center justify-center w-fit bg-indigo-600 rounded-md group-hover:bg-transparent text border border-indigo-600">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-3xl text-white group-hover:text-indigo-600 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-black dark:text-gray-200">
              Email
            </h2>
            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
              office@RanaCodeautomation.com
            </p>
          </div>
        </div>
      </div>
      {/* Right Div */}
      <div className="w-full md:w-1/2 shadow-lg dark:bg-[#0F172A] rounded-lg">
        <form
          onSubmit={sendEmail}
          className="flex flex-col items-start w-full p-5"
        >
          <label htmlFor="name" className="text-gray-800 dark:text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="w-full mb-3 rounded-md text-black dark:text-gray-200 text-normal dark:bg-[#1E293B]"
            required
          />
          <div className="flex justify-between gap-5 items-center w-full">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="email"
                className="text-gray-800 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="w-full mb-3 rounded-md text-black dark:text-gray-200 text-normal dark:bg-[#1E293B]"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="phone"
                className="text-gray-800 dark:text-gray-400"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter your phone number"
                className="w-full mb-3 rounded-md text-black dark:text-gray-200 text-normal dark:bg-[#1E293B]"
                required
              />
            </div>
          </div>
          <label htmlFor="subject" className="text-gray-800 dark:text-gray-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="Enter the subject of your message"
            className="w-full mb-3 rounded-md text-black dark:text-gray-200 text-normal dark:bg-[#1E293B]"
            required
          />
          <label htmlFor="message" className="text-gray-800 dark:text-gray-400">
            Message
          </label>
          <textarea
            rows={5}
            cols={30}
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter your message"
            className="w-full mb-3 rounded-md text-black dark:text-gray-200 text-normal dark:bg-[#1E293B]"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 w-full flex items-center justify-center text-white font-normal py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
