import Link from 'next/link';

export default function AllServices() {
  return (
    <div className="bg-white dark:bg-[#0B1539] md:py-10 md:px-14 lg:py-20 lg:px-28">
      <div className="bg-gray-100 dark:bg-[#0B1B4B] px-10 py-20 flex flex-col gap-5 rounded-xl">
        {/* Top Section */}
        <div className="">
          <h2 className="text-3xl font-bold text-black dark:text-blue-600">
            All your software development needs under one roof
          </h2>
          <p className="mt-2 mb-5 text-md font-normal text-gray-800 dark:text-gray-400">
            Empowering Your Business with Tailored Solutions for Optimal
            Performance,
            <br /> Innovation, and Sustainable Growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1st Area */}
          <Link
            href="/services/web-development"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              Web Development
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Crafting Custom Web Applications Aligned with Your Business Needs.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
          {/* 2nd Area */}
          <Link
            href="/services/api-development"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              API Development & Integration
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Building and Integrating APIs for a Dynamic and Enhanced Digital
              Presence.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
          {/* 3rd Area */}
          <Link
            href="/services/database-development"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              Database Development & Optimization
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Tailored Databases for your Business Needs and Optimized
              Integration with Exising Data Solutions.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
          {/* 4th Area */}
          <Link
            href="/services/qa-and-testing"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              Quality Assurance & Testing
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Quality assurance is integral from Development to Deployment.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
          {/* 5th Area */}
          <Link
            href="/services/devops"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              DevOps and Application Management
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Streamline Operations and Ensure Continuous Improvement for your
              Established Applications.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
          {/* 6th Area */}
          <Link
            href="/services/support-and-maintenance"
            className="bg-white px-6 pt-10 pb-6 rounded-md flex flex-col gap-3 group hover:bg-blue-500 group-hover:bg-white dark:hover:bg-blue-700 dark:bg-[#0B1539]"
          >
            <div className="bg-blue-600 group-hover:bg-white w-fit rounded-full p-3">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-2xl font-bold duration-100 group-hover:fill-black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 group-hover:text-white">
              Application Support and Maintenance
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-200">
              Proactive Support and Regular Maintenance for a Reliable and
              Responsive Software Application.
            </p>
            <button className="flex items-center justify-start w-full gap-2 mt-4 text-gray-800 group-hover:text-gray-200 dark:text-gray-200">
              <span>Read More</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
