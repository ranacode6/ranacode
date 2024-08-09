import Image from 'next/image';

export default function WhyChooseUs() {
  interface data {
    image: string;
    title: string;
    details: string;
  }
  const datas: data[] = [
    {
      image: '/images/about/4.png',
      title: 'Build Lasting Relationships',
      details:
        'We go beyond transactions - we build meaningful relationships with our clients. Our personalized approach ensures that your unique needs and goals are at the forefront of our services.',
    },
    {
      image: '/images/about/2.png',
      title: 'Tailored and Personalized Solutions',
      details:
        'Experience a personalized touch in every interaction. Our commitment to a personal approach means that our solutions are customized to align perfectly with your business objectives and preferences.',
    },
    {
      image: '/images/about/3.png',
      title: 'Flexible Payment Options and Free Demos',
      details:
        'Explore our services risk-free with flexible payment options and complimentary demos, ensuring informed decisions that suit your budget.',
    },
  ];
  return (
    <div className="bg-white dark:bg-[#020716] flex flex-col items-center justify-center px-5 pt-10 md:pt-20">
      <h2 className="text-3xl font-semibold text-black dark:text-gray-200">
        Why Choose Us?
      </h2>
      <p className="text-lg text-normal text-gray-600 my-4">
        Here are some key reasons why you should choose us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg items-center justify-center p-10">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 bg-gray-200 dark:bg-[#0F172A] rounded-lg items-center justify-center p-10 h-[550px] md:hover:translate-y-5 duration-300"
            >
              <Image
                src={data.image}
                alt={data.title}
                width={200}
                height={200}
                className="dark:bg-gray-500 rounded-lg"
              />
              <h2 className="text-2xl font-normal text-gray-800 dark:text-gray-200 mt-5">
                {data.title}
              </h2>
              <p className="text-md font-normal text-gray-800 dark:text-gray-400">
                {data.details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
