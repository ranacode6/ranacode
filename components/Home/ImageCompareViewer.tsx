'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CompareBeforeImage from '@/public/images/home/compare-before.png';
import CompareAfterImage from '@/public/images/home/compare-after.png';
import ReviewImage from '@/public/images/home/review-image.png';

export default function ImageCompareViewer() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="bg-slate-200 dark:bg-slate-800 p-5 md:p-10 lg:p-32">
      <div className="flex flex-col items-center justify-center gap-10 mx-10">
        <h1 className="text-4xl font-bold text-black dark:text-gray-300 text-center">
          Revolutionizing Business Operations: A Digital Transformation <br />{' '}
          Journey With RanaCode
        </h1>
        <p className="text-base font-medium text-gray-600 dark:text-gray-400 text-center">
          Witness the profound digital transformations shaping 21st-century
          businesses. From outdated methods to innovative solutions, our
          commitment is to redefine success in the digital era.
        </p>
      </div>
      <div className="flex flex-row justify-between gap-3 p-4 md:p-10">
        <span className="flex gap-3 items-center text-black dark:text-white text-center">
          <p>Before digitalization</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-xl dark:text-white hidden md:flex"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"></path>
          </svg>
        </span>
        <span className="flex gap-5 items-center text-[#0730d3] text-center dark:text-lime-500">
          <p>After digitalization</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-xl text-[#0730d3] dark:text-lime-500 hidden md:flex"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"></path>
          </svg>
        </span>
      </div>

      <div className="w-full relative" onMouseUp={handleMouseUp}>
        <div
          className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
        >
          <Image
            alt="Compare After Image"
            fill
            draggable={false}
            priority
            src={CompareAfterImage}
          />

          <div
            className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              draggable={false}
              alt="Compare Before Image"
              src={CompareBeforeImage}
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-blue-600 cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-blue-600 absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
          </div>
        </div>
      </div>
      <div className="md:flex justify-end w-2/3 mx-auto -mt-20 hidden">
        <Image
          src={ReviewImage}
          alt="ReviewImage"
          className="z-40"
          width={300}
          height={200}
        />
      </div>
      <div className="w-1/8 flex justify-center mt-10">
        <Link
          href="/digital-transformation"
          className="flex border hover:border-sky-950 hover:bg-white hover:text-sky-950  gap-3 text-white bg-blue-950 dark:border-gray-400 dark:hover:bg-blue-900 dark:hover:text-white px-6 py-2 rounded-md items-center"
        >
          <p>See more examples</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
