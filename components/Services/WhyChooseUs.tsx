import Image from 'next/image';
import headThinkingImage from '@/public/images/services/head-thinking.png';
import checkPng from '@/public/images/services/check.png';

export default function WhyChooseUs() {
  return (
    <div className="md:px-14 md:py-10 lg:px-28 lg:py-20 bg-white dark:bg-[#030717]">
      <div className="bg-gray-100 dark:bg-[#0E172B] p-10 w-full flex flex-col items-center justify-center rounded-lg">
        <h2 className="text-lg font-semibold text-blue-500">Why Choose Us?</h2>
        <h3 className="my-3 text-center md:text-start font-bold text-black dark:text-gray-300 text-3xl">
          Here are some key reasons why you should choose us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* 1st div */}
          <div className="group">
            <div className="h-60 p-5 bg-white dark:bg-[#030717] relative bg-WhyChooseUsBg bg-cover bg-bottom group-hover:bg-blue-500 rounded-md">
              <div className="flex justify-end w-full group-hover:-translate-x-1/2 group-hover:right-50% transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={headThinkingImage}
                  alt="Head Thinking Image"
                  width={50}
                  height={50}
                  className="opacity-30 group-hover:opacity-100 group-hover:bg-white rounded-full p-2"
                />
              </div>
              <h2 className="text-xl font-normal text-gray-800 group-hover:text-white group-hover:text-center dark:text-gray-200">
                Build Lasting Relationships
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-2 group-hover:text-gray-200 group-hover:text-center">
                We go beyond transactions – we build meaningful relationships
                with our clients. Our personalized approach ensures that your
                unique needs and goals are at the forefront of our services.
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="group">
            <div className="h-60 p-5 bg-white dark:bg-[#030717] relative bg-WhyChooseUsBg bg-cover bg-bottom group-hover:bg-blue-500 rounded-md">
              <div className="flex justify-end w-full group-hover:-translate-x-1/2 group-hover:right-50% transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={checkPng}
                  alt="Head Thinking Image"
                  width={50}
                  height={50}
                  className="opacity-30 group-hover:opacity-100 group-hover:bg-white rounded-full p-2"
                />
              </div>
              <h2 className="text-xl font-normal text-gray-800 group-hover:text-white group-hover:text-center dark:text-gray-200">
                Tailored and Personalized Solutions
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-2 group-hover:text-gray-200 group-hover:text-center">
                Experience a personalized touch in every interaction. Our
                commitment to a personal approach means that our solutions are
                customized to align perfectly with your business objectives and
                preferences.
              </p>
            </div>
          </div>

          {/* 3rd div */}
          <div className="group">
            <div className="h-60 p-5 bg-white dark:bg-[#030717] relative bg-WhyChooseUsBg bg-cover bg-bottom group-hover:bg-blue-500 rounded-md">
              <div className="flex justify-end w-full group-hover:-translate-x-1/2 group-hover:right-50% transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={headThinkingImage}
                  alt="Head Thinking Image"
                  width={50}
                  height={50}
                  className="opacity-30 group-hover:opacity-100 group-hover:bg-white rounded-full p-2"
                />
              </div>
              <h2 className="text-xl font-normal text-gray-800 group-hover:text-white group-hover:text-center dark:text-gray-200">
                Flexible Payment Options and Free Demos
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-2 group-hover:text-gray-200 group-hover:text-center">
                Explore our services risk-free with flexible payment options and
                complimentary demos, ensuring informed decisions that suit your
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
