import Image from 'next/image';
import EqualityImage from '@/public/images/career/image.png';

export default function Equality() {
  return (
    <div className="px-8 py-8 md:px-16 lg:px-32 lg:py-16 bg-[#16223B] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={EqualityImage}
          alt="A man is using laptop"
          width={600}
          height={400}
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 gap-5 flex flex-col">
        <h1 className="text-[#C27902] font-bold text-2xl md:text-5xl font-sans tracking-wide">
          Diversity, equality, and inclusion{' '}
          <span className="text-white">at RanaCode</span>
        </h1>
        <p className="text-md text-gray-300 text-normal">
          At RanaCode, we celebrate diversity and operate fully remotely,
          uniting talented minds from across the world. Our commitment extends
          beyond professional growth; we value your personal well-being. Expect
          abundant learning opportunities, combined with a vibrant team culture
          where work and fun harmonize
        </p>
      </div>
    </div>
  );
}
