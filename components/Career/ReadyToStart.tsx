import Image from 'next/image';
import Link from 'next/link';
import ReadyToStartImage from '@/public/images/career/readyToStart.png';

export default function ReadyToStart() {
  return (
    <div className="bg-white dark:bg-[#1F2836] px-8 py-10 md:px-16 lg:px-32 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-3xl md:text-5xlj font-bold text-blue-500">
          Ready to get{' '}
          <span className="text-black dark:text-gray-200">started?</span>
        </h1>
        <p className="text-base text-gray-800 dark:text-gray-400 font-normal mt-5 mb-10">
          We&apos;re always here to help you on your journey. If you are
          interested in getting more details about opportunities at RanaCode
          Automation, please get in touch with us
        </p>
        <Link
          href="/contact"
          className="px-7 py-3 font-semibold text-base rounded-md bg-blue-600 w-fit text-white hover:bg-blue-700"
        >
          Get in touch
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={ReadyToStartImage}
          alt=""
          width={600}
          height={400}
          className="dark:bg-gray-200 rounded-tr-[100px] rounded-tl-md rounded-bl-[100px] rounded-br-md"
        />
      </div>
    </div>
  );
}
