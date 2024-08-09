export default function Faq() {
  return (
    <div className="w-full bg-white dark:bg-[#020617] p-5 md:p-10 lg:p-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold text-sky-950 dark:text-gray-200">
          Got Questions?
        </h1>
        <p className="text-lg text-gray font-normal text-gray-500 text-center dark:text-gray-400">
          Here are some of our FAQs. If you have any other questions you&apos;d
          like <br /> answered please feel free to email us.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl text-gray-800 divide-y divide-gray-700">
        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> What kind of services does RanaCode offer?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-500 mb-8 px-5 text-base">
              RanaCode offers enterprise web solutions, including custom
              software development, web application development, mobile app
              development, e-commerce development, and more.
            </p>
          </details>
        </div>
        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> What industries does RanaCode specialize in?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              RanaCode works with a variety of industries, including healthcare,
              finance, education, retail, and more.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span>
                {' '}
                How long does it typically take to complete a project with
                RanaCode Automation?
              </span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              The timeline for completing a project with RanaCode can vary
              depending on the complexity and scope of the project, but the team
              works to deliver high-quality solutions within a reasonable
              timeframe.
            </p>
          </details>
        </div>
        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span>
                {' '}
                How does RanaCode ensure the security of its clients data?
              </span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              RanaCode takes data security very seriously and employs best
              practices for data protection, including data encryption, secure
              storage, and access control measures.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span>
                {' '}
                Does RanaCode offer ongoing maintenace and support for its
                solutions?
              </span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              Yes, RanaCode offers ongoing maintenance and support for its
              solutions to ensure that they continue to function optimally and
              meet the changing needs of clients.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> Can RanaCode help with digital marketing and SEO?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              Yes, RanaCode offers digital marketing and SEO services to help
              clients increase their online visibility and attract more
              customers.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span>
                {' '}
                Does RanaCode work with with startups and small businesses?
              </span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              Yes, RanaCode works with startups and small businesses to help
              them develop and launch their web and mobile applications.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> What industries does RanaCode specialize in?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              RanaCode works with a variety of industries, including healthcare,
              finance, education, retail, and more.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> How can I get started with RanaCode?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              To get started with RanaCode, you can request a free proposal
              through the website or contact the team directly to discuss your
              project.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> What industries does RanaCode specialize in?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              RanaCode works with a variety of industries, including healthcare,
              finance, education, retail, and more.
            </p>
          </details>
        </div>

        <div className="">
          <details className="group">
            <summary className="flex text-base md:text-lg cursor-pointer list-none items-center justify-between font-medium p-5 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1F2937]">
              <span> What does RanaCode stand for?</span>
              <span className="transition group-open:rotate-180 rounded-full bg-blue-500 text-white ml-2">
                <svg
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-gray-400 mb-8 px-5 text-base">
              RanaCode stands for Enterprise Web Solutions. It reflects the
              company&apos;s focus on providing comprehensive web solutions for
              businesses and organizations that are looking to establish a
              strong online presence and drive growth through digital channels.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
