import Image from 'next/image';
import ShmoozImage from '@/public/images/about/shmooz.png';
import SephardicImage from '@/public/images/about/sephardic.png';
import YachadImage from '@/public/images/about/yachad.png';
import BrightStartImage from '@/public/images/about/bright-start-health.png';
import HoffmanImage from '@/public/images/about/hoffman.png';
import EmpireImage from '@/public/images/about/empire-expediting.svg';
import BBKImage from '@/public/images/about/bbk.svg';
import PRNCapitalImage from '@/public/images/about/prn-capital.png';

export default function TrustedByRoll() {
  return (
    <div className="bg-white dark:bg-[#1E283A] w-full py-10 md:px-16  lg:px-32 lg:py-20">
      <div className="flex items-center bg-gray-100 dark:bg-[#0F172A] rounded-full  justify-between w-full px-5 py-10">
        {/* Left Side */}
        <div className="w-1/2 md:w-1/6 flex items-center justify-center">
          <h1 className="font-bold text-xl text-blue-500">Trusted by...</h1>
        </div>
        {/* Right Side */}
        <div className="relative w-1/2 md:w-5/6 overflow-hidden flex overflow-x-hidden z-10 text-gray-100">
          {/* First Div */}
          <div className="flex items-center animate-marquee whitespace-nowrap">
            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={ShmoozImage}
                alt="Shmooz Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={SephardicImage}
                alt="Sephardic Company Logo"
                width={1200}
                height={1200}
              />
            </div>
            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={YachadImage}
                alt="Yachad Tours Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={BrightStartImage}
                alt="Bright Start Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={HoffmanImage}
                alt="Hoffman Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={EmpireImage}
                alt="Empire Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={BBKImage}
                alt="BBK Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={PRNCapitalImage}
                alt="PRN Capital Company Logo"
                width={1200}
                height={1200}
              />
            </div>
          </div>

          {/* Repeated Div */}
          <div className="absolute top-0 flex items-center animate-marquee2 whitespace-nowrap">
            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={ShmoozImage}
                alt="Shmooz Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={SephardicImage}
                alt="Sephardic Company Logo"
                width={1200}
                height={1200}
              />
            </div>
            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={YachadImage}
                alt="Yachad Tours Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={BrightStartImage}
                alt="Bright Start Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={HoffmanImage}
                alt="Hoffman Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={EmpireImage}
                alt="Empire Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={BBKImage}
                alt="BBK Company Logo"
                width={1200}
                height={1200}
              />
            </div>

            <div className="flex items-center justify-center mx-8 hover:scale-x-105 bg-gray-400 w-20 h-20 rounded-lg">
              <Image
                src={PRNCapitalImage}
                alt="PRN Capital Company Logo"
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
