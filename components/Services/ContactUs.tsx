'use client';

import Image from 'next/image';
import { useState } from 'react';
import lightImage from '@/public/images/services/light-icon.png';
import CallIcon from '@/public/images/services/call-icon.png';
import MailIcon from '@/public/images/services/mail-icon.png';
import LocationIcon from '@/public/images/services/location-icon.png';

import toast, { Toaster } from 'react-hot-toast';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        tel,
        message,
      }),
    });

    const res = await response.json();
    res.status === 200 ? toast.success(res.message) : toast.error(res.message);
    setName('');
    setEmail('');
    setTel('');
    setMessage('');
  };
  return (
    <div className="bg-gray-100 dark:bg-[#1F293A] px-5 py-5 md:px-16 md:py-10 lg:px-32 lg:py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 bg-white dark:bg-[#0E172B] px-5 py-10 rounded-md">
        <p className="text-md font-medium text-blue-500 mb-2">Contact Us</p>
        <p className="text-[#0A1538] dark:text-gray-200 font-bold text-2xl mb-6">
          Leave us a message
        </p>
        <form onSubmit={sendMail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your Name"
            className="bg-gray-100 dark:bg-slate-800 outline-none border-none rounded-sm text-black text-md font-medium focus:ring-2 py-3"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="bg-gray-100 dark:bg-slate-800 outline-none border-none rounded-sm text-black text-md font-medium focus:ring-2 py-3"
            required
          />
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={(event) => setTel(event.target.value)}
            placeholder="Enter your phone number"
            className="bg-gray-100 dark:bg-slate-800 outline-none border-none rounded-sm text-black text-md font-medium focus:ring-2 py-3"
            required
          />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            cols={20}
            placeholder="Enter your message"
            className="bg-gray-100 dark:bg-slate-800 outline-none border-none rounded-sm text-black text-md font-medium focus:ring-2"
            required
          />
          <button
            type="submit"
            className="flex gap-3 items-center mr-auto rounded-full bg-[#0A1538] text-white px-4 py-3 mt-2 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <span>Send</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.586 6.586c-.781.779-.781 2.047 0 2.828l1.586 1.586h-7.244c-1.104 0-2 .895-2 2 0 1.104.896 2 2 2h7.244l-1.586 1.586c-.781.779-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l6.414-6.414-6.414-6.414c-.781-.781-2.047-.781-2.828 0z"></path>
            </svg>
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-violet-600 dark:from-slate-900 dark:to-slate-950 rounded-lg p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-start">
          <Image src={lightImage} alt="Light Image" width={80} height={80} />
          <h1 className="text-4xl text-white font-bold">
            Take the first step towards success
          </h1>
        </div>
        <h2 className="text-gray-800 dark:text-gray-200 font-bold text-xl md:text-3xl my-5">
          Don&apos;t hesitate to reach out with any questions
        </h2>
        <div className="flex gap-4">
          <div className="rounded-full bg-blue-100 p-3">
            <Image src={CallIcon} alt="Call Icon" width={25} height={25} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 dark:text-gray-400 font-normal text-md">
              Phone
            </p>
            <a
              href="tel:+14436092794"
              target="_blank"
              rel="norefferer"
              className="font-bold text-black dark:text-gray-200 text-sm md:text-xl"
            >
              +1 443 609 2794
            </a>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="rounded-full bg-blue-100 p-3">
            <Image src={MailIcon} alt="Mail Icon" width={25} height={25} />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-gray-700 dark:text-gray-400 font-normal text-base">
              Email
            </p>
            <a
              href="mailto:office@RanaCodeautomation.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-black dark:text-gray-200 text-sm md:text-xl"
            >
              ranacode6@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="rounded-full bg-blue-100 p-3">
            <Image
              src={LocationIcon}
              alt="Location Icon"
              width={25}
              height={25}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 dark:text-gray-400 font-normal text-md">
              Location
            </p>
            <p className="font-bold text-black dark:text-gray-200 text-sm md:text-xl">
              Baltimore - Washington Area
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
