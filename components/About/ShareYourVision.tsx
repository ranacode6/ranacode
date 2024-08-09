import Link from 'next/link';

export default function ShareYourVision() {
  return (
    <div className="px-10 py-10 lg:p-32 bg-white dark:bg-slate-800">
      <div className=" flex flex-col items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:py-20 py-10 rounded-xl px-5">
        <h1 className="text-4xl text-white font-bold text-center lg:text-start">
          Share your vision with us, we&apos;ll make it a reality
        </h1>
        <p className="text-white text-base font-medium text-center lg:text-start">
          From Concept to Creation: Let Us Bring Your Vision to Life!
        </p>
        <Link
          href="https://calendly.com/ranacode6/web"
          className="text-black bg-white dark:bg-slate-800 dark:text-gray-200 dark:border-slate-800 px-6 py-4 rounded-lg hover:bg-transparent border border-white text-base mt-2"
        >
          Schedule a free call
        </Link>
      </div>
    </div>
  );
}
