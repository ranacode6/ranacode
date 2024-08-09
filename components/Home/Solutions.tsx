import Link from 'next/link';

export default function Solutions() {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 text-sky-950 px-5 py-6 md:px-10 md:py-16 lg:px-32 lg:py-20 flex flex-col gap-6">
      <h1 className="text-center text-4xl font-bold dark:text-gray-200">
        Solutions tailored to your business
      </h1>
      <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400">
        We offer a range of custom software solutions to help businesses like
        yours improve efficiency and streamline operations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* 1st box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-3xl text-[#0E3466]  dark:text-white  duration-300"
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
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Tailored Web Solutions
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Crafting Personalized web applications that perfectly align with
            your business goals, enhancing your online presence.
          </p>
        </Link>

        {/* 2nd Box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-3xl text-[#0E3466] dark:text-white  duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z"></path>
            </svg>
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Innovative API Integration
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Drive innovation with our API development services, empowering you
            to seamlessly integrate and enhance your business processes.
          </p>
        </Link>

        {/* 3rd Box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-3xl text-[#0E3466]  dark:text-white  duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Custom Database Solutions
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Build databases tailored to your business, transforming data into
            valueable insights that drive decision-making.
          </p>
        </Link>

        {/* 4th Box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-3xl text-[#0E3466]  dark:text-white  duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeWidth="2"
                d="M18.218,1 L23,1 L23,19 L1,19 L1,1 L6,1 M16.9999996,9.99999996 C13,6.99999996 11,13 7.00000002,9.99999996 M5,23 L19,23 L5,23 Z M10,1 L10,5.773 L5,12.955 L5,15 L19,15 L19,12.955 L14,5.773 L14,1 M8,1 L16,1 L8,1 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z"
              ></path>
            </svg>
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Quality Assurance Excellenced
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ensure the reliability and performance of your software with our
            integral quality assurance and testing services.
          </p>
        </Link>

        {/* 5th Box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="text-3xl text-[#0E3466]  dark:text-white  duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"></path>
            </svg>
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Streamlined DevOps Practices
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Boost efficiency through continuous integration and delivery, key
            elements in optimizing your software development process.
          </p>
        </Link>

        {/* 6th Box */}
        <Link
          href="/services/web-development"
          className="flex flex-col px-6 py-12 dark:bg-[#101927] dark:border-none rounded border-2 text-center gap-3 hover:shadow-md"
        >
          <span className="border-2 dark:border-none p-4 rounded-sm mx-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-3xl text-[#0E3466]  dark:text-white  duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
            </svg>
          </span>
          <h2 className="text-xl font-semibold dark:text-gray-300">
            Reliable Support and Maintenance
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Nurture your software lifecycle with dedicated support and
            maintenance, ensuring continuous evolution and optimal performance.
          </p>
        </Link>
      </div>

      <Link
        href="/services"
        className="w-52 flex items-center mx-auto mt-3 md:mt-10 bg-sky-950 px-3 py-3 text-white justify-center gap-3 rounded-md hover:bg-white hover:text-sky-950 border border-sky-950 dark:hover:bg-transparent dark:hover:border-gray-200 dark:hover:text-gray-200"
      >
        <span>Learn More</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="h-4 w-4"
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
