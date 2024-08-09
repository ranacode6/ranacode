'use client';
import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function ClientTestimonial() {
  interface Review {
    review: string;
    image: string;
    name: string;
    position: string;
  }
  const reviews: Review[] = [
    {
      review:
        "I have working with the software development team at RanaCode for the past two years, and I couldn't be happier with the quality of their work. They have been instrumental in helping our company develop and launch a new product, and their attention to detail and quick turnaround times have been invaluable.",
      image: '/images/home/esty-herman.png',
      name: 'Esty Herman',
      position: 'CEO, Empire Expediting',
    },
    {
      review:
        'Our company had been struggling to find the right software development partner, but we hit the jackpot when we found RanaCode. They have a deep understanding of our industry and have been able to provide tailored solutions to meet our unique needs. Their team is responsive, dedicated, and easy to work with.',
      image: '',
      name: 'Alon Kalka',
      position: 'CEO, DYS Construction',
    },
    {
      review:
        'Working with RanaCode was like having an extended part of our own team. They really got what we were aiming for from the start and brought our vision to life just as we imagined. It&apos;s been fantastic to see our ideas take shape and function exactly how we wanted – couldn&apos;t have asked for a better partnership!',
      image: '',
      name: 'Ed Hoffman',
      position: 'Founder, Hoffman & Co',
    },
    {
      review:
        'The software development team at RanaCode has played a key role in the success of our business. Their ability to deliver high-quality products on time and on budget has been invaluable. I highly recommend them to any company looking for a reliable and capable software development partner.',
      image: '',
      name: 'Heshy Quittner',
      position: 'CEO, PRN Capital',
    },
    {
      review:
        'We were in a bind and needed a software development team that could work quickly and deliver results. RanaCode came through in a big way, not only meeting but exceeding our expectations. Their technical skills are top-notch and their customer service is unparalleled.',
      image: '',
      name: 'Gita sturn',
      position: 'Yachad Tours',
    },
    {
      review:
        'I have had the pleasure of working with RanaCode on multiple projects and they have consistently exceeded my expectations. The team is composed of experienced and skilled developers who are always willing to go above and beyond to deliver the best product possible. I look forward to working with them again in the future.',
      image: '',
      name: 'Idan Harari',
      position: 'ICTBIT',
    },
    {
      review:
        'The collaboration with RanaCode brought a professional touch to our online presence. Their keen design sense and intuitive website have undoubtedly elevated our brand and customer experience.',
      image: '',
      name: 'Yosef Kaver',
      position: 'YOS Inc',
    },
    {
      review:
        'RanaCode turned our app idea into reality in ways we couldn&apos;t have imagined. They transformed our concept into a user-friendly, visually captivating mobile app that our customers love.',
      image: '',
      name: 'Ari stork',
      position: 'Shaphire advance',
    },
    {
      review:
        'I have been extremely impressed with the level of expertise and professionalism demonstrated by the software development team at RanaCode. They have been able to take my complex ideas and turn them into a functional and user-friendly product. I look forward to continuing our partnership in the future.',
      image: '',
      name: 'Morty Wiess',
      position: 'E&M Management',
    },
  ];
  return (
    <div className="bg-[url('/images/home/testimonial-bg.d103e6c6.png')] bg-cover bg-no-repeat w-full py-10 lg:p-20">
      <div className="bg-slate-800 flex flex-col md:flex-row justify-center items-center gap-5 p-5 lg:p-20">
        {/* Left Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-5 z-10 text-gray-100">
          <h1 className="text-3xl font-bold">What Our Clients are saying</h1>
          <p className="text-sm font-normal text-gray-300">
            Our core values are at the heart of all that we do. They are
            integrated into our daily work lives and help us to remember our
            customers always comes first,.. <br />
            <br />
            Feel free to reach out to us!
          </p>

          <Link
            href="/contact"
            className="px-6 py-2 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-white border border-orange-400 w-fit"
          >
            Contact Us
          </Link>
        </div>
        {/* Right Section or Slider */}
        <div className="w-full md:w-3/4">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1080: {
                width: 1080,
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-slate-900 rounded-tr-xl p-4 rounded-bl-xl flex flex-col justify-between h-80">
                    <p className="text-sm text-gray-400">{review.review}</p>
                    <div className="flex gap-5 mt-5">
                      {review.image ? (
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={64}
                          height={64}
                          className="border-2 rounded-full border-gray-200"
                        />
                      ) : (
                        <span className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center">
                          {review.name.charAt(0)}
                        </span>
                      )}

                      <div className="flex flex-col justify-center">
                        <h3 className="text-base text-gray-200">
                          {review.name}
                        </h3>
                        <p className="text-xs text-blue-700">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
