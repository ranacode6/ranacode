'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function NumberIncremental() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="bg-white dark:bg-[#1E283A] px-8 md:px-16 py-10 lg:px-32 lg:py-20">
      <h1 className="text-4xl text-center font-bold text-black dark:text-gray-200">
        Your trusted software development partner
      </h1>
      <p className="text-center font-normal text-2xl mb-8 mt-3 text-gray-800 dark:text-gray-400">
        Delivering exceptional software solutions, we empower businesses to
        excel in the digital landscape.
      </p>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1st div */}
          <div className="px-8 py-10 h-80 bg-cyan-500 rounded-lg">
            <h1 className="text-5xl font-bold text-black">
              {counterState && (
                <CountUp start={0} end={75} duration={2.75}></CountUp>
              )}
              +
            </h1>

            <p className="text-base font-normal text-gray-700">Projects done</p>
            <p className="mt-5 text-lg text-black text-normal">
              From mobile apps to web development, we&apos;ve successfully
              completed 75 projects for clients across industries.
            </p>
          </div>
          {/* 2nd div */}
          <div className="px-8 py-10 h-80 bg-red-400 rounded-lg">
            <h1 className="text-5xl font-bold text-black">
              {counterState && (
                <CountUp start={0} end={45} duration={2.75}></CountUp>
              )}
              +
            </h1>
            <p className="text-base font-normal text-gray-700">
              Clients Served
            </p>
            <p className="mt-5 text-lg text-black text-normal">
              We build strong relationships with our clients, prioritizing their
              strategic goals and long-term success.
            </p>
          </div>

          {/* 3rd div */}
          <div className="px-8 py-10 h-80 bg-emerald-400 rounded-lg">
            <h1 className="text-5xl font-bold text-black">
              {counterState && (
                <CountUp start={0} end={15} duration={2.75}></CountUp>
              )}
              +
            </h1>
            <p className="text-base font-normal text-gray-700">
              Industries Served
            </p>
            <p className="mt-5 text-lg text-black text-normal">
              Our diverse expertise allows us to deliver specialized software
              solutions across a broad spectrum of sectors, from real estate and
              finance to technology and retail.
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
