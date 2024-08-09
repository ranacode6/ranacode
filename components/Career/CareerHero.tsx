import Image from 'next/image';
import HeroImage from '@/public/images/career/career-hero.png';
import Link from 'next/link';

export default function CareerHero() {
  return (
    <div className="px-8 py-5 md:px-16 md:py-8 lg:px-32 lg:py-10 bg-white dark:bg-[#334155]">
      {/* BreadCrumb */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-md font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-800 dark:text-white mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-md font-medium text-gray-800 md:ms-2 dark:text-white">
                Career
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-col gap-5 w-full mt-10 lg:mt-0 md:w-1/2 mr-10">
          <h1 className="text-4xl text-blue-500 font-bold">
            Create positive change{' '}
            <span className="text-black dark:text-gray-200">
              at <br />
              RanaCode
            </span>
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 font-medium">
            As a united force, we consistently achieve remarkable results that
            exceed imagination. Ready to be part of a team that values you and
            your potential? Join us at RanaCode and embark on a career
            that&apos;s not only fulfilling but also beyond your expectations
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-md font-semibold px-6 py-3 w-fit text-white rounded-md mt-8"
          >
            Get in touch
          </Link>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center mt-10 md:mt-0 justify-center md:p-10">
          <Image
            src={HeroImage}
            alt="Career Hero Image"
            width={600}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
