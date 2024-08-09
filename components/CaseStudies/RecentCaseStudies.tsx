import Link from 'next/link';
import Image from 'next/image';

export default function RecentCaseStudies() {
  interface caseStudy {
    link: string;
    image: string;
    title: string;
    details: string;
  }

  const caseStudies: caseStudy[] = [
    {
      link: '/case-study/e&m',
      image: '/images/case-study/e-and-m.75564076.svg',
      title: 'Estate Management Pro',
      details:
        'Rental property management is an age-old business. What&apos;s new is how you bring unparalleled convenie...',
    },
    {
      link: '/case-study/shmooz-ai',
      image: '/images/case-study/shmooz.a85006e8.svg',
      title: 'Shmooz AI',
      details:
        'Ideas can be wild, and so are the founders behind them! But turning those ideas into reality? That&apos;s...',
    },
    {
      link: '/case-study/bbk',
      image: '/images/case-study/bbk1.png',
      title: 'BBK',
      details:
        'Construction project finances can be daunting, but RanaCode offers a streamlined solution. The...',
    },
    {
      link: '/case-study/yachad-tours',
      image: '/images/case-study/yachad.1f7900ee.svg',
      title: 'Yachad Tours',
      details:
        'How could automation elevate your efficiency and enhance customer experience? Let&apos;s see how it worke...',
    },
    {
      link: '/case-study/dys-construction',
      image: '/images/case-study/dys.d90c90e6.svg',
      title: 'DYS Construction',
      details:
        'Construction projects might seem hard and confusing to handle, but guess what? We&apos;ve got an exciting...',
    },
    {
      link: '/case-study/hoffman-caterers',
      image: '/images/case-study/hoffman-caterers.png',
      title: 'Hoffman Caterers',
      details:
        'Hoffman & Co&apos;s revamped website offers easy navigation and showcases our catering expertise with a g...',
    },
    {
      link: '/case-study/bright-start-health',
      image: '/images/case-study/card_image.svg',
      title: 'Bright Start Health',
      details:
        'Our solution streamlined the process of connecting therapy patients with clinicians, alleviating adm...',
    },
    {
      link: '/case-study/empire-expediting',
      image: '/images/case-study/empire.4b487b00.svg',
      title: 'Empire Expediting',
      details:
        'How can you ensure customer satisfaction when substantial investments are on the line in a project? ...',
    },
    {
      link: '/case-study/prn-capital',
      image: '/images/case-study/prncapital.adca0b4c.svg',
      title: 'Prn Capital',
      details:
        'In this project we built a website with a costumer portal that allows prn capital to communicate wit...',
    },
    {
      link: '/case-study/sapphire-advance',
      image: '/images/case-study/sapphire.e0e7af59.svg',
      title: 'Sapphire Advance',
      details:
        'In this project we built a communication website that helps our clients to communicate and market ou...',
    },
    {
      link: '/case-study/stock-market-ai',
      image: '/images/case-study/stock-market-ai.c51982e8.svg',
      title: 'Stock Market AI',
      details:
        'This project is a stock market AI that we built for our clients to help them make better decisions i...',
    },
    {
      link: '/case-study/social-media-analytics',
      image: '/images/case-study/social-media.02b959ed.svg',
      title: 'Social Media Analytics',
      details:
        'A social media analytics platform helps businesses track and analyze their social media performance,...',
    },
    {
      link: '/case-study/business-flight-approval-system',
      image: '/images/case-study/flight.468e1d02.svg',
      title: 'Business Flight Approval System',
      details:
        'This is a powerful and easy-to-use tool for businesses that need to manage and approve employee trav...',
    },
    {
      link: '/case-study/sephardic-center',
      image: '/images/case-study/sephardic.cb3f7244.svg',
      title: 'Sephardic Center',
      details:
        'In today&apos;s online world, a well-made website is like a key to connect with people. But how many can ...',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0F172A] px-8 py-8 md:px-16 md:py-10 lg:px-32 lg:py-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mb-10">
        {/* top left */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <span className="bg-blue-100 text-blue-500 text-sm font-medium me-2 px-4 py-2 rounded dark:bg-blue-300 dark:text-blue-700 w-fit">
            OUR CASE STUDIES
          </span>
          <h1 className="font-bold text-3xl text-slate-800 dark:text-gray-300">
            Some of our{' '}
            <span className="text-indigo-600">Recent Case studies</span>
          </h1>
        </div>

        {/* top right */}
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium text-gray-500">
            Here are some example projects that we have worked on, while helping
            our clients to grow their business.
          </p>
          <div className="flex gap-5">
            <Link
              href="https://calendly.com/ranacode6/web"
              className="bg-indigo-600 text-white text-sm font-normal px-6 py-3 hover:bg-indigo-700 rounded-md flex items-center"
            >
              Schedule a meeting
            </Link>
            <Link
              href="/contact"
              className="text-sm text-blue-500 px-6 py-3 rounded-md hover:bg-indigo-600 border hover:text-white border-blue-500"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {caseStudies.map((caseStudy, index) => {
          return (
            <Link
              href={caseStudy.link}
              key={index}
              className="flex flex-col gap-2"
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={500}
                height={400}
              />
              <h1 className="text-cyan-900 text-xl font-normal dark:text-gray-200">
                {caseStudy.title}
              </h1>
              <p className="text-base text-gray-400">{caseStudy.details}</p>
              <button className="flex gap-3 items-center text-blue-500 text-sm text-normal">
                <span>Explore</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                </svg>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
