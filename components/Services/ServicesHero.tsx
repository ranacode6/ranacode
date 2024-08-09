'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SlideFirstImage from '@/public/images/services/image-n1.png';
import SlideSecondImage from '@/public/images/services/image-n2.png';
import SlideThirdImage from '@/public/images/services/image-n3.png';

export default function ServicesHero() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center px-5 md:px-16 lg:px-32 py-20 bg-gradient-to-r from-blue-500 to-[#875EFF] dark:from-slate-900 dark:to-slate-950 w-full">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-3">
        <hr className="w-20 h-[1px] bg-gray-200" />
        <h1 className="text-5xl font-semibold text-gray-100 w-full">
          Our Services
        </h1>
        <p className="text-lg font-normal text-gray-200">
          Transforming your innovative ideas into scalable digital solutions.
        </p>
        <div className="flex justify-between md:justify-start items-center w-full gap-2 mt-5">
          <Link
            href="https://calendly.com/ranacode6/web"
            className="border px-2 md:px-6 py-2 rounded-md bg-gray-200 text-black hover:bg-transparent hover:text-white flex items-center justify-center gap-2 md:gap-3 w-2/3 md:w-fit"
          >
            <span>Schedule a Free call</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
            </svg>
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-gray-200 text-md rounded-md border border-gray-200 hover:bg-gray-200 hover:text-black px-4 py-2 w-1/3 md:w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-indigo-400 dark:bg-[#101729] p-10 rounded-2xl w-full md:w-1/3 mx-auto">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={SlideFirstImage}
              alt="First Image"
              width={500}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideSecondImage}
              alt="Second Image"
              width={500}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideThirdImage}
              alt="Third Image"
              width={500}
              height={400}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
