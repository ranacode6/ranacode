import Image from 'next/image';
import OwnerImage from '@/public/images/about/dov.png';
import Link from 'next/link';

export default function OwnerStory() {
  return (
    <div className="bg-white dark:bg-[#1E283A] px-8 py-10 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 relative">
        {/* Left Div */}
        <div>
          <Image
            src={OwnerImage}
            alt="Owner Image"
            width={300}
            height={700}
            className="aspect-[9/16] object-cover rounded-xl z-10"
          />
          <div className="absolute w-fit gap-10 flex items-center justify-between rounded-full border-2 border-gray-400 dark:border-gray-800 bg-gray-300 dark:bg-[#0F172A] mx-3 px-5 py-4 -mt-24 z-40">
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium font-roboto text-gray-800 dark:text-gray-200">
                Rana Ahammed
              </h2>
              <p className="text-base font-normal font-roboto text-gray-600 dark:text-gray-400">
                CEO & Founder
              </p>
            </div>
            <Link
              href="https://linkedin.com/in/ranacode6"
              className="hover:text-blue-600 text-black dark:text-gray-400"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </Link>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-full md:w-2/3 bg-emerald-400 grid grid-cols-1 px-5 py-4 md:px-10 md:py-7 gap-5 rounded-lg">
          <h2 className="text-4xl text-black font-roboto font-medium text-center">
            Rana Ahammed&apos;s Story: The Drive Behind RanaCode
          </h2>
          <p className="text-xl text-gray-800 font-roboto font-medium">
            My fascination with technology began in childhood, when I was the
            kid who loved tinkering with new gadgets and fixing computers. This
            passion for technology propelled me into the military, where I
            served in a cybersecurity unit. My tenure there was highlighted by
            the honor of receiving a presidential award for my role in
            developing a new cyber weapon.
          </p>
          <p className="text-xl text-gray-800 font-roboto font-medium">
            Following my military service, I launched RanaCode with a clear
            mission: to help business owners leverage technology to create
            outstanding products that drive their growth. At RanaCode, we are
            committed to delivering personalized service that makes each client
            feel like they are our only client. This approach not only sets us
            apart but is also a key reason why our clients love working with us.
          </p>
          <p className="text-xl text-gray-800 font-roboto font-medium">
            Thank you for taking the time to learn about our journey. At
            RanaCode Automation, we&apos;re excited to help you bring your ideas
            to life with the power of technology.
          </p>
        </div>
      </div>
    </div>
  );
}
