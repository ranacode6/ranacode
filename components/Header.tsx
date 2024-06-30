'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/icon.svg';
import emImage from '../public/images/case-study/e-and-m.75564076.svg';
import bbkImage from '../public/images/case-study/image.png';
import ShmoozImage from '../public/images/case-study/shmooz.a85006e8.svg';
import YachadImage from '../public/images/case-study/yachad.1f7900ee.svg';
import { useEffect, useState } from 'react';

export default function Header() {
  // dark Mode start
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const setDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  };

  const setLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
    setIsDark(false);
  };

  const togglemode = () => {
    if (isDark) {
      setLight();
    } else {
      setDark();
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDark();
    } else {
      setLight();
    }
  }, []);
  // dark mode end

  const hamburgerMenuToggler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full px-2 md:px-4 py-2 md:py-6 text-slate-500 bg-slate-200 dark:bg-slate-800 sticky">
        <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {/* For Desktop Screen */}
          <div className="relative hidden xl:flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-bold text-black text-xl flex items-center gap-2"
            >
              <span>RanaCode</span>
              <Image
                src={logo}
                width={30}
                height={30}
                alt="Logo"
                className="rounded-full"
              />
            </Link>
            <ul className="flex items-center justify-center">
              {/* Home */}
              <li className="px-3 py-2 relative group">
                <Link
                  href="/"
                  className="hover:opacity-50 font-semibold hover:underline"
                >
                  Home
                </Link>
              </li>

              {/* Services */}
              <li className="relative group px-3 py-2">
                <Link
                  href="/services"
                  className="hover:opacity-50 font-semibold hover:underline"
                  aria-haspopup="true"
                >
                  Services
                </Link>
                <div className="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform">
                  <div className="relative top-6 p-8 bg-white rounded-t-lg shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Side */}
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <Link
                              href="/startups"
                              className="flex p-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 bg-slate-300 min-h-[100px]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" icon icon-tabler icon-tabler-rocket mr-2 hover:bg-indigo-600 bg-cyan-500 rounded-full p-2"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#fff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                              <div>
                                <h3 className="text-xl text-blue-600">
                                  Software Development <br /> for Startups
                                </h3>
                                <p className="text-gray-500 font-normal text-sm">
                                  Our team builds everything from <br /> MVPs to
                                  ambitious features...
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/web-development"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="bg-blue-600 rounded-full p-2 icon icon-tabler icon-tabler-rocket mr-2 hover:bg-indigo-600"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#fff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M7 8l-4 4l4 4" />
                                <path d="M17 8l4 4l-4 4" />
                                <path d="M14 4l-4 16" />
                              </svg>

                              <div>
                                <p className="text-md text-blue-600">
                                  Crafting dynamic websites
                                </p>
                                <p className="text-gray-500 font-normal text-sm">
                                  Elevate your online presence with cust...
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/web-development"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-coins mr-2 hover:bg-indigo-600 bg-blue-600 rounded-full p-2"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                                <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                                <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                                <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                                <path d="M3 11c0 .888 .772 1.45 2 2" />
                              </svg>
                              <div>
                                <p className="text-md text-blue-600">
                                  Tailored Database Solutions
                                </p>
                                <p className="text-gray-500 font-normal text-sm">
                                  Transform your data into actionable insi...
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>

                        {/* Right Side */}
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <Link
                              href="/startups"
                              className="flex p-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 bg-slate-300 min-h-[100px]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-building  bg-cyan-500 rounded-full p-2 mr-2 hover:bg-indigo-600"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M3 21l18 0" />
                                <path d="M9 8l1 0" />
                                <path d="M9 12l1 0" />
                                <path d="M9 16l1 0" />
                                <path d="M14 8l1 0" />
                                <path d="M14 12l1 0" />
                                <path d="M14 16l1 0" />
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                              </svg>
                              <div>
                                <h3 className="text-xl text-blue-600">
                                  Self-service Portals
                                </h3>
                                <p className="text-gray-500 mt-2 font-normal text-sm">
                                  Discover how we empower <br /> businesses to
                                  leap ahead with <br /> custom self-service
                                  portals.
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/web-development"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-plug-connected mr-2 hover:bg-indigo-600 bg-blue-600 rounded-full p-2"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
                                <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
                                <path d="M3 21l2.5 -2.5" />
                                <path d="M18.5 5.5l2.5 -2.5" />
                                <path d="M10 11l-2 2" />
                                <path d="M13 14l-2 2" />
                              </svg>
                              <div>
                                <p className="text-md text-blue-600">
                                  Powerful API Solutions
                                </p>
                                <p className="text-gray-500 font-normal text-sm">
                                  Unlock innovation and connectivity with...
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/web-development"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="42"
                                height="42"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-list-check mr-2 hover:bg-indigo-600 bg-blue-600 rounded-full p-2"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                                <path d="M11 6l9 0" />
                                <path d="M11 12l9 0" />
                                <path d="M11 18l9 0" />
                              </svg>
                              <div>
                                <p className="text-md text-blue-600">
                                  Ensuring Quality Every Step
                                </p>
                                <p className="text-gray-500 font-normal text-sm">
                                  We prioritize excellence through thorou...
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-6 justify-end items-center p-4 bg-gray-200 rounded-b-lg">
                    <Link
                      href="/services"
                      className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 text-white rounded-md"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </li>

              {/* Case Studies */}
              <li className="relative group px-3 py-2 hover:underline">
                <Link
                  href="/case-study"
                  className="hover:opacity-50 cursor-pointer font-semibold"
                  aria-haspopup="true"
                >
                  Case Studies
                </Link>
                <div className="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[800px] transform rounded-lg">
                  <div className="relative top-6 px-6 rounded-t-lg bg-white shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-6 pb-4">
                        {/* Left Side */}
                        <ul className="text-[15px]">
                          <li>
                            <Link
                              href="/case-study/e&m"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <Image
                                src={emImage}
                                height={48}
                                width={48}
                                alt="Estate Management Pro"
                                className="rounded-xl mr-2"
                              />
                              <div>
                                <h6 className="text-md text-blue-600">
                                  Estate Management Pro
                                </h6>
                                <p className="text-gray-500 font-normal text-sm">
                                  Rental Management Property is an age-ol...
                                </p>
                              </div>
                            </Link>
                            <Link
                              href="/case-study/e&m"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <Image
                                src={bbkImage}
                                height={50}
                                width={50}
                                alt="Estate Management Pro"
                                className="rounded-xl mr-2"
                              />
                              <div>
                                <h6 className="text-md text-blue-600">BBK</h6>
                                <p className="text-gray-500 font-normal text-sm">
                                  Construction project finances can be dau...
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>

                        {/* Right Side */}
                        <ul className="text-[15px]">
                          <li>
                            <Link
                              href="/case-study/e&m"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <Image
                                src={ShmoozImage}
                                height={50}
                                width={50}
                                alt="Estate Management Pro"
                                className="rounded-xl mr-2"
                              />
                              <div>
                                <h6 className="text-md text-blue-600">
                                  Shmooz AI
                                </h6>
                                <p className="text-gray-500 font-normal text-sm">
                                  Ideas can be wild, and so are the founde...
                                </p>
                              </div>
                            </Link>
                            <Link
                              href="/case-study/e&m"
                              className="flex p-4 mt-4 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 border bg-gray-100"
                            >
                              <Image
                                src={YachadImage}
                                height={50}
                                width={50}
                                alt="Estate Management Pro"
                                className="rounded-xl mr-2"
                              />
                              <div>
                                <h6 className="text-md text-blue-600">
                                  Yachad Tours
                                </h6>
                                <p className="text-gray-500 font-normal text-sm">
                                  How could automation elevate your effici...
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center h-auto p-3 bg-gray-200 rounded-b-lg mt-6">
                    <Link
                      className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
                      href="/case-study"
                    >
                      View all case studies
                    </Link>
                  </div>
                </div>
              </li>

              {/* Career */}
              <li className="px-3 py-2 relative group">
                <Link
                  href="/career"
                  className="hover:opacity-50 font-semibold hover:underline"
                >
                  Career
                </Link>
              </li>

              {/* About */}
              <li className="px-3 py-2 relative group">
                <Link
                  href="/about"
                  className="font-semibold hover:opacity-50 hover:underline"
                >
                  About
                </Link>
              </li>
              {/* Contact */}
              <li className="px-3 py-2 relative group">
                <Link
                  href="/contact"
                  className="hover:opacity-50 font-semibold hover:underline"
                >
                  Contact
                </Link>
              </li>
              {/* Blog */}
              <li className="px-3 py-2 relative group">
                <Link
                  href="/blogs"
                  className="hover:opacity-50 font-semibold hover:underline"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <ul className="flex gap-10">
              <li className="mt-2">
                <label className="swap swap-rotate text-primary">
                  <input id="darkSwitch" type="checkbox" onClick={togglemode} />

                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://calendly.com/ranacode6/web"
                  className="rounded-full px-3 py-2 font-semibold bg-blue-600 hover:bg-blue-800 flex items-center group text-white"
                >
                  <span className="mr-2">Schedule a call</span>
                  <svg
                    className="stroke-current"
                    width="10"
                    height="10"
                    stroke-width="2"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <g fill-rule="evenodd">
                      <path
                        className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                        d="M0 5h7"
                      ></path>
                      <path
                        className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-00"
                        d="M1 1l4 4-4 4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* For Mobile Screen and Tablet Screen */}
          <div className="xl:hidden mx-auto px-2 flex justify-between items-center text-gray-800">
            <Link href="/" className="flex gap-2">
              <span className="text-xl font-semibold hidden sm:flex">
                RanaCode
              </span>
              <Image src={logo} width={30} height={30} alt="Logo" />
            </Link>
            <svg
              onClick={hamburgerMenuToggler}
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hover:bg-gray-300 p-1 rounded-md icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </nav>
      </header>
      {isNavOpen && <div className="w-full bg-red-500">dkdfj</div>}
    </>
  );
}
