'use client';
import logo from '@/public/images/icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

export default function Footer() {
  let [isOpen1, setIsOpen1] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);

  function open1() {
    setIsOpen1(true);
  }

  function close1() {
    setIsOpen1(false);
  }
  function open2() {
    setIsOpen1(true);
  }

  function close2() {
    setIsOpen1(false);
  }
  function open3() {
    setIsOpen1(true);
  }

  function close3() {
    setIsOpen1(false);
  }

  return (
    <footer className="py-16 bg-[#0E172B] bg-[url('/images/home/footer-bg.png')] p-5 md:px-14 lg:px-28 bg-bottom bg-cover">
      {/* Top section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Top Section Left Side */}
        <div className="flex flex-col justify-center md:justify-start p-4 gap-2 items-center md:items-start mb-5 md:mb-0">
          <div className="w-fit flex flex-col md:justify-start md:items-start justify-center items-center">
            <Image
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">RanaCode</h1>
          </div>
          <p className="text-center md:text-left md:w-1/2 w-full">
            Our goal is to help you get the most out of your business by
            creating custom software to automate your business, and by providing
            IT solutions for your business flow & marketing
          </p>
          <div className="flex mt-3">
            {/* phone svg */}
            <Link
              href="tel:+1234567890"
              className="hover:bg-indigo-700 border p-2"
            >
              <svg
                stroke="#fff"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 bg-transparent"
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
            </Link>

            {/* Email Svg */}
            <Link
              href="mailto:ranacode6@gmail.com"
              className="border border-x-0 p-2 hover:bg-indigo-700"
            >
              <svg
                stroke="#fff"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 bg-transparent"
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
            </Link>

            {/* LinkedIn Svg */}
            <Link
              href="https://linkedin.com/in/ranacode6"
              className="border p-2 hover:bg-indigo-700"
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-5 h-5 bg-transparent"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        {/*Top Section Right Side */}
        <div className="flex gap-10">
          {/* Left Part */}
          <div className="flex flex-col">
            <h2 className="text-sm text-gray-200 font-semibold mb-3">
              USEFUL LINKS
            </h2>
            <Link href="/" className="hover:underline text-gray-400 mb-2">
              Home
            </Link>
            <Link href="/about" className="hover:underline text-gray-400 mb-2">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-gray-400 mb-2"
            >
              Contact
            </Link>
          </div>

          {/* Right Part */}
          <div className="flex flex-col">
            <h2 className="text-sm text-gray-200 font-semibold mb-3">
              QUICK LINKS
            </h2>
            <Link
              href="/services"
              className="hover:underline text-gray-400 mb-2"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:underline text-gray-400 mb-2"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-gray-400 mb-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <hr className="bg-gray-500 w-full h-[1px] my-4" />

      {/* bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 RanaCode™. All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          {/* Terms of Services */}

          <Button
            onClick={open1}
            className="rounded-md text-xs py-2 px-4 font-medium text-gray-200 focus:outline-none hover:text-white data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Terms of services
          </Button>

          <Dialog
            open={isOpen1}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close1}
            __demoMode
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-full max-w-xl rounded-xl bg-white dark:bg-[#0E172B] p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 my-20 border border-gray-800"
                >
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium dark:text-gray-200 text-gray-700 text-center"
                  >
                    Terms of Services
                  </DialogTitle>
                  <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">
                    Effective date: December 19, 2022 RanaCode
                    (&rdquo;us&rdquo;, &rdquo;we&rdquo;, or &rdquo;our&rdquo;)
                    operates the www.RanaCodeautomation.com website (hereinafter
                    referred to as the &rdquo;Service&rdquo;). This page informs
                    you of our policies regarding the collection, use, and
                    disclosure of personal data when you use our Service. By
                    using the Service, you agree to the collection and use of
                    information in accordance with this policy. We collect and
                    use your personal data to provide and improve the Service.
                    We may also use it to communicate with you, such as to send
                    nRanaCodeletters or marketing materials. You can opt out of
                    receiving these communications at any time. We use cookies
                    and similar tracking technologies to track activity on our
                    Service. You can instruct your browser to refuse all cookies
                    or to indicate when a cookie is being sent. However, if you
                    do not accept cookies, you may not be able to use some parts
                    of our Service. We may disclose your personal data in
                    response to legal requests, to protect our rights and the
                    rights of others, and to prevent harm. We reserve the right
                    to update this Privacy Policy at any time. We encourage you
                    to review it regularly to stay informed of any changes. If
                    you have any questions or concerns about our collection,
                    use, or disclosure of your personal data, please contact us
                    at office@RanaCodeautomation.com
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 dark:bg-gray-300 dark:text-black py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                      onClick={close1}
                    >
                      Close
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
          <hr className="w-[2px] h-3 outline-none border-none bg-blue-600" />

          <Button
            onClick={open2}
            className="rounded-md text-xs py-2 px-4 font-medium text-gray-200 focus:outline-none hover:text-white data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Privacy policy
          </Button>

          <Dialog
            open={isOpen2}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close2}
            __demoMode
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-full max-w-xl rounded-xl bg-white dark:bg-[#0E172B] p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 my-20 border border-gray-800"
                >
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-gray-700 text-center"
                  >
                    Privacy policy
                  </DialogTitle>
                  <p className="mt-1 text-sm/6 text-gray-500">
                    Effective date: December 19, 2022 RanaCode
                    (&rdquo;us&rdquo;, &rdquo;we&rdquo;, or &rdquo;our&rdquo;)
                    operates the www.RanaCodeautomation.com website (hereinafter
                    referred to as the &rdquo;Service&rdquo;). This page informs
                    you of our policies regarding the collection, use, and
                    disclosure of personal data when you use our Service. By
                    using the Service, you agree to the collection and use of
                    information in accordance with this policy. We collect and
                    use your personal data to provide and improve the Service.
                    We may also use it to communicate with you, such as to send
                    nRanaCodeletters or marketing materials. You can opt out of
                    receiving these communications at any time. We use cookies
                    and similar tracking technologies to track activity on our
                    Service. You can instruct your browser to refuse all cookies
                    or to indicate when a cookie is being sent. However, if you
                    do not accept cookies, you may not be able to use some parts
                    of our Service. We may disclose your personal data in
                    response to legal requests, to protect our rights and the
                    rights of others, and to prevent harm. We reserve the right
                    to update this Privacy Policy at any time. We encourage you
                    to review it regularly to stay informed of any changes. If
                    you have any questions or concerns about our collection,
                    use, or disclosure of your personal data, please contact us
                    at office@RanaCodeautomation.com
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                      onClick={close2}
                    >
                      Close
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
          <hr className="w-[2px] h-3 outline-none border-none bg-blue-600" />

          <Button
            onClick={open3}
            className="rounded-md text-xs py-2 px-4 font-medium text-gray-200 focus:outline-none hover:text-white data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Cookie policy
          </Button>

          <Dialog
            open={isOpen3}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close3}
            __demoMode
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-full max-w-xl rounded-xl bg-white dark:bg-[#0E172B] p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 my-20 border border-gray-800"
                >
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-gray-700 text-center"
                  >
                    Cookie policy
                  </DialogTitle>
                  <p className="mt-1 text-sm/6 text-gray-500">
                    Effective date: December 19, 2022 RanaCode
                    (&rdquo;us&rdquo;, &rdquo;we&rdquo;, or &rdquo;our&rdquo;)
                    operates the www.RanaCodeautomation.com website (hereinafter
                    referred to as the &rdquo;Service&rdquo;). This page informs
                    you of our policies regarding the collection, use, and
                    disclosure of personal data when you use our Service. By
                    using the Service, you agree to the collection and use of
                    information in accordance with this policy. We collect and
                    use your personal data to provide and improve the Service.
                    We may also use it to communicate with you, such as to send
                    nRanaCodeletters or marketing materials. You can opt out of
                    receiving these communications at any time. We use cookies
                    and similar tracking technologies to track activity on our
                    Service. You can instruct your browser to refuse all cookies
                    or to indicate when a cookie is being sent. However, if you
                    do not accept cookies, you may not be able to use some parts
                    of our Service. We may disclose your personal data in
                    response to legal requests, to protect our rights and the
                    rights of others, and to prevent harm. We reserve the right
                    to update this Privacy Policy at any time. We encourage you
                    to review it regularly to stay informed of any changes. If
                    you have any questions or concerns about our collection,
                    use, or disclosure of your personal data, please contact us
                    at office@RanaCodeautomation.com
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                      onClick={close3}
                    >
                      Close
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}
