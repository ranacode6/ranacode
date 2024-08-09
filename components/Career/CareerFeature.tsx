import codingIcon from '@/public/images/career/remotely.185bb09d.svg';
import AgileTeamIcon from '@/public/images/career/agile-team.f3a8d25c.svg';
import diversifiedIcon from '@/public/images/career/culture.dd673e20.svg';
import FunWorkIcon from '@/public/images/career/fun-to-work.7fc488d0.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function CareerFeature() {
  return (
    <div className="px-8 py-10 md:px-16 lg:px-32 bg-slate-900">
      {/* top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st Div */}
        <div className="flex flex-col gap-3 group">
          <Image
            src={codingIcon}
            alt="Coding Icon"
            width={50}
            height={50}
            className="group-hover:scale-105 group-hover:transition-all group-hover:ease-in-out group-hover:duration-100"
          />
          <h2 className="text-lg font-semibold text-gray-100 group-hover:text-orange-400">
            We work remotely
          </h2>
          <p className="text-sm text-gray-500 font-normal">
            Though the head office in the USA, our team is completely remote
          </p>
        </div>
        {/* 2nd Div */}
        <div className="flex flex-col gap-3 group">
          <Image
            src={AgileTeamIcon}
            alt="AgileTeamIcon"
            width={50}
            height={50}
            className="group-hover:scale-105 group-hover:transition-all group-hover:ease-in-out group-hover:duration-100"
          />
          <h2 className="text-lg font-semibold text-gray-100 group-hover:text-orange-400">
            An Agile team
          </h2>
          <p className="text-sm text-gray-500 font-normal">
            We are an agile team who work in a very fast-paced environment
          </p>
        </div>
        {/* 3rd Div */}
        <div className="flex flex-col gap-3 group">
          <Image
            src={diversifiedIcon}
            alt="Diversified Culture Icon"
            width={50}
            height={50}
            className="group-hover:scale-105 group-hover:transition-all group-hover:ease-in-out group-hover:duration-100"
          />
          <h2 className="text-lg font-semibold text-gray-100 group-hover:text-orange-400">
            A diversified culture
          </h2>
          <p className="text-sm text-gray-500 font-normal">
            Our team is formed with talents from across the world
          </p>
        </div>
        {/* 4th Div */}
        <div className="flex flex-col gap-3 group">
          <Image
            src={FunWorkIcon}
            alt="Fun To Work Icon"
            width={50}
            height={50}
            className="group-hover:scale-105 group-hover:transition-all group-hover:ease-in-out group-hover:duration-100"
          />
          <h2 className="text-lg font-semibold text-gray-100 group-hover:text-orange-400">
            Fun to work
          </h2>
          <p className="text-sm text-gray-500 font-normal">
            We just don&apos;t just code like robots. we have fun, hang out and
            celebrate even small wins
          </p>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex flex-col py-16 items-center justify-center gap-5">
        <p className="text-md font-normal text-gray-400">
          Think you&apos;d fit in this team? Explore career opportunities...
        </p>
        <Link
          href="/company/ranacode"
          className="px-6 py-3 text-sm text-yellow-400 border border-yellow-400 bg-tranparent rounded-md"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
