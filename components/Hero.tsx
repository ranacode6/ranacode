import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../public/images/home/image.png';

export default function Hero() {
  return (
    <div className="flex flex-row w-full px-10 py-12 bg-white text-slate-800 items-center justify-center">
      {/* Left Side */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-blue-500 pt-10">
          Innovative software <br /> development for your <br /> business
          vision.
        </h1>
        <p className="text-xl font-normal text-gray-500 py-5">
          We specialize in innovative software development for businesses,
          <br />
          bringing your ideas to life with custom solutions,
        </p>
        <div className="pb-6 text-gray-500 text-sm">
          <div className="flex items-center justify-start gap-2 mb-2">
            <svg
              stroke="currentColor"
              fill="#669EFF"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="text-startups-primary"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="m8 16 5.991-2L16 8l-6 2z"></path>
            </svg>
            <span className="">Personalized approach</span>
          </div>
          <div className="flex items-center justify-start gap-2 mb-2">
            <svg
              stroke="currentColor"
              fill="#669EFF"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="text-startups-primary"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
              ></path>
            </svg>
            <span>Ongoing Support</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <svg
              stroke="currentColor"
              fill="#669EFF"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="text-startups-primary"
              height="17"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"></path>
            </svg>
            <span>Tailored to your needs and budget</span>
          </div>
        </div>
        <div className="flex flex-row gap-6 pb-20 pt-6">
          <Link
            href="https://calendly.com/ranacode6/web"
            className="bg-blue-500 hover:bg-blue-700 px-6 py-5 flex items-center h-10 text-white rounded-md"
          >
            Schedule a call
          </Link>

          <div className="group relative cursor-pointer">
            <div className="border border-gray-400 flex items-center justify-between space-x-5 bg-white px-4">
              <button className="menu-hover flex gap-2 items-center py-2 text-base font-medium text-blue-500 lg:mx-4">
                <span>Explore our services</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="border border-t-0 invisible absolute z-50 flex w-full flex-col text-gray-800 shadow-xl group-hover:visible bg-white mb-10">
              <Link
                href="/services"
                className="flex items-center justify-between w-full bg-white hover:bg-gray-100 py-2 text-gray-800 hover:text-black px-4 text-sm"
              >
                <span>All services</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </Link>

              <Link
                href="/startups"
                className="flex items-center justify-between w-full bg-white hover:bg-gray-100 py-2 text-gray-800 hover:text-black px-4 text-sm"
              >
                <span>For startups</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <Image
          src={HeroImage}
          width={600}
          height={600}
          alt="Hero Section Image"
        />
      </div>
    </div>
  );
}
