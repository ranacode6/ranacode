import Image from 'next/image';
import Link from 'next/link';
import estateManageImage from '@/public/images/home/e-and-m.75564076.svg';
import shmoozImage from '@/public/images/home/shmooz.a85006e8.svg';
import bbkImage from '@/public/images/home/bbk.png';

export default function ExploringCaseStudies() {
  return (
    <div className="flex justify-center flex-col items-center bg-gray-100 dark:bg-[#0E172B] py-10 lg:py-20 px-5 md:px-20 lg:px-40 text-sky-950">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-gray-200 text-center">
          Exploring Case Studies
        </h1>
        <p className="text-base font-normal text-gray-400 dark:text-gray-300 text-center">
          We bridge the gap between theory and practice, offering readers a
          deeper comprehension of how knowledge translates into action
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8 py-5">
        {/* 1st part */}
        <Link
          href="/case-study/e&m"
          className="flex flex-col items-center justify-center md:items-start md:justify-start gap-3"
        >
          <Image
            src={estateManageImage}
            width={400}
            height={200}
            alt="Estate Management Pro Image"
          />
          <h1 className="text-xl font-normal dark:text-gray-200">
            Estate Management Pro
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-start">
            Rental property management is an age-old business. What&apos;s new
            is how you bring unparalled convenie...
          </p>
          <button className="flex gap-3 text-blue-600 items-center">
            <span>Explore</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </Link>
        {/* 2nd part */}
        <Link
          href="/case-study/shmooz-ai"
          className="flex flex-col items-center justify-center md:items-start md:justify-start gap-3"
        >
          <Image
            src={shmoozImage}
            width={400}
            height={200}
            alt="Estate Management Pro Image"
          />
          <h1 className="text-xl font-normal dark:text-gray-200">Shmooz AI</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-start">
            Ideas can be wild, and so are the founders behind them! But turning
            those ideas into reality? That&apos;s..
          </p>
          <button className="flex gap-3 text-blue-600 items-center">
            <span>Explore</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </Link>
        {/* 3rd part */}
        <Link
          href="/case-study/e&m"
          className="flex flex-col items-center justify-center md:items-start md:justify-start gap-3"
        >
          <Image
            src={bbkImage}
            width={300}
            height={100}
            alt="Estate Management Pro Image"
          />
          <h1 className="text-xl font-normal dark:text-gray-200">BBK</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-start">
            Construction project finances can be daunting, but RanaCode offers a
            streamlined solution. The...
          </p>
          <button className="flex gap-3 text-blue-600 items-center">
            <span>Explore</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
      <Link
        href="/projects"
        className="flex w-fit bg-sky-950 px-6 mt-10 gap-3 py-3 justify-center items-center hover:bg-white text-white hover:text-sky-950 hover:border-sky-950 rounded-md dark:hover:bg-transparent dark:hover:text-gray-200 border border-gray-800 dark:hover:border-gray-200"
      >
        <p>View All case studies</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
