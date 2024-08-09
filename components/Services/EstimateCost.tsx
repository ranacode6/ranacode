import Link from 'next/link';

export default function EstimateCost() {
  return (
    <div className="bg-white dark:bg-slate-800 px-5 pb-5 md:px-14 md:pb-10 lg:px-28 lg:pb-20">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-slate-900 dark:to-slate-950 flex flex-col md:flex-row items-center justify-between px-10 py-12 rounded-xl gap-10">
        <h2 className="text-gray-100 text-3xl text-semibold w-full lg:w-1/2 text-center">
          Estimate the cost of your software development project for free!
        </h2>
        <Link
          href="/cost-calculator"
          className="py-4 px-6 text-blue-600 dark:bg-slate-900 dark:text-white rounded-md hover:shadow-xl font-medium bg-gray-100"
        >
          Get an estimate
        </Link>
      </div>
    </div>
  );
}
