export default function AboutHero() {
  return (
    <div className="bg-white dark:bg-[#1E283A] p-5 w-full">
      <div className="bg-[url('/images/about/about_us_hero.png')] bg-cover bg-center h-[600px] flex items-center justify-center flex-col md:animate-zoom bg-no-repeat rounded-lg">
        <h1 className="text-3xl md:text-5xl text-white font-bold w-full md:w-1/2 text-center">
          Not your average software development company
        </h1>
        <p className="text-lg text-gray-200 mt-5 w-full md:w-1/2 text-center">
          Leveraging years of industry experience, we understand that business
          owners and startup founders need personalized, business-focused
          software solutions. At RanaCode, we&apos;re dedicated to providing
          just that—helping your business grow with the right software.
        </p>
      </div>
    </div>
  );
}
