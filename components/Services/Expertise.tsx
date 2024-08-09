import Link from 'next/link';

export default function Expertise() {
  return (
    <div className="bg-white dark:bg-slate-800 px-3 py-5 lg:py-20 md:px-14 lg:px-28">
      <div className="bg-zinc-100 dark:bg-[#0E172B] px-4 py-10 md:px-8 md:py-10 lg:px-16 lg:py-20 rounded-xl flex flex-col gap-3">
        <h1 className="text-3xl text-black dark:text-gray-200">
          Areas of Expertise
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Besides our core software development services, these are the services
          we are known most for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* First Div */}
          <Link
            href="/startups"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl group h-68 hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="bg-amber-400 group-hover:bg-white dark:group-hover:bg-[#0E172B] p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xl text-white group-hover:text-gray-400 dark:text-gray-300  duration-300 ease-in-out group-hover:fill-[#aaa]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-indigo-700 group-hover:text-white my-2 dark:text-gray-200">
              Software Development for Startups
            </h2>
            <p className="text-sm group-hover:text-gray-200 text-normal text-gray-700 dark:text-gray-400">
              After years of collaborating with startups, we understand that in
              the startup world, time is of the essence. That&apos;s why
              we&apos;ve perfected a system to streamline MVP product
              development, ensuring your idea goes from concept to market fast..
            </p>
          </Link>

          {/* Second Div */}
          <Link
            href="/client-portals"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl h-68 group hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="bg-red-400 group-hover:bg-white dark:group-hover:bg-[#0E172B] p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-xl text-white group-hover:text-gray-400 dark:text-gray-300  duration-300 ease-in-out group-hover:fill-[#aaa]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-indigo-700 group-hover:text-white my-2 dark:text-gray-200">
              Self-service Portals
            </h2>
            <p className="text-sm group-hover:text-gray-200 text-normal text-gray-700 dark:text-gray-400">
              Discover how we empower businesses to leap ahead with custom
              self-service portals. Dive into our streamlined process that
              promises minimal investment for maximum impact, setting you apart
              in the 2024 market...
            </p>
          </Link>

          {/* Third Div */}
          <Link
            href="/synagogue-website-design"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl h-68 group hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="bg-orange-400 group-hover:bg-white dark:group-hover:bg-[#0E172B] p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl text-white group-hover:text-gray-400 dark:text-gray-300  duration-300 ease-in-out group-hover:fill-[#aaa]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11h-2zm-4.69 0H8.69l.6-2h5.42l.6 2zm-1.2-4H9.89l.6-2h3.02l.6 2zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-indigo-700 group-hover:text-white my-2 dark:text-gray-200">
              Synagogue website design and Cloud integration
            </h2>
            <p className="text-sm group-hover:text-gray-200 text-normal text-gray-700 dark:text-gray-400">
              We Create Modern Websites for Synagogue & Congregation
              Communities. We Integrate Shul and Synagogue Management Software.
              Your website will seamlessly integrate with your existing
              management software
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
