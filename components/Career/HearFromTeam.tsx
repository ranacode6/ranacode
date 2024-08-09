import ShowMoreButton from './ShowMoreButton';

export default function HearFromTeam() {
  interface review {
    image: string;
    review: string;
    name: string;
    position: string;
  }

  const reviews: review[] = [
    {
      image: '/images/career/soloman.81c23ffd.svg',
      review:
        "At RanaCode, we're not just about software &hyphen; we're about your journey. Join our crew of ambitious minds, where innovation thrives and collaboration reigns. Work hard, yes, but we''re all about that balance, ensuring your career grows hand in hand with your passions. Let's chase dreams together!",
      name: 'Rana Ahammed',
      position: 'CEO & Founder',
    },
    {
      image: '/images/career/fahim.b4f1f065.svg',
      review:
        "In my role as team lead and backend developer, I take immense pride in being a part of this exceptional organization. Our innovative culture fuels my creativity and tech exploration, within the freedom of remote work. Collaborating with a skilled team is inspiring, and cutting-edge tech keeps me at industry forefront. Clear communication and growth initiatives amplify my project impact. The company's dedication to my development and inclusive approach amplifies our software's positive influence.",
      name: 'Fahim Shahriar',
      position: 'Team Lead, Web Developer',
    },
    {
      image: '/images/career/anika.53e2c1e9.svg',
      review:
        "I am incredibly proud to be a part of RanaCode as a UI/UX Designer. The dynamic and innovative environment here has truly allowed me to thrive and continuously push the boundaries. From collaborating with talented teams, every day brings new challenges and opportunities for growth. The supportive leadership and emphasis on creativity make RanaCode, an exceptional place to shape my future. I'm grateful for the chance to contribute my skills and be a part of this amazing journey",
      name: 'Jannatul Ferdus Anamika',
      position: 'UI UX Designer',
    },
    {
      image: '/images/career/hasib.340126f9.svg',
      review:
        'RanaCode is such a company where the work environment is highly satisfying. OCB of our company is really praiseworthy. Perceived support from coworkers and superiors is outstanding. There is no counterproductive work behavior. RanaCode team always gives me motivating environment though there are challenges in work and I have gained a lot experience and skills working here.',
      name: 'Hasibul Hasan',
      position: 'Lead Developer',
    },
    {
      image: '/images/career/ashik.ee53ddf4.svg',
      review:
        'One of the things I appreciate most about RanaCode is the constant drive for excellence. As a web developer, I am constantly challenged to think outside the box and find innovative solutions to complex problems. The supportive team atmosphere and access to cutting-edge technologies make every day exciting and rewarding.',
      name: 'Ashik Mahmud',
      position: 'Web Developer',
    },
    {
      image: '/images/career/shakil.jpeg',
      review:
        "I really appreciate the awesome team dynamic at RanaCode. Everyone is super supportive, making it a great working environment. The company truly cares about its employees, and that means a lot. Being part of this team exposes me to fresh challenges, and I@apos;m learning something new every single day. It's a source of pride for me to contribute to the company's growth. ",
      name: 'Shakil Ahmed',
      position: 'Web Developer',
    },
    {
      image: '/images/career/shakib.jpeg',
      review:
        "I am proud to be a part of the RanaCode team. The company's commitment to excellence and innovation is truly inspiring. I am constantly challenged to grow and develop my skills, and I am supported every step of the way. The team atmosphere is collaborative and supportive, and I am grateful for the opportunity to contribute to the company's success. ",
      name: 'Ahmed Shakib',
      position: 'SEO Manager',
    },
    {
      image: '/images/career/lindas.jpeg',
      review:
        "I love working at RanaCode, the team spirit is amazing and everyone is so supportive.From collaborating with talented teams, every day brings new challenges and opportunities for growth. The supportive leadership and emphasis on creativity make RanaCode, an exceptional place to shape my future. I'm grateful for the chance to contribute my skills and be a part of this amazing journey",
      name: 'Lin Das',
      position: 'UI/UX Designer',
    },
  ];
  return (
    <div className="bg-white dark:bg-[#334155] px-3 md:px-16 lg:px-32 py-10">
      <h1 className="text-3xl font-bold dark:text-gray-200 text-slate-900 text-center mb-10">
        Let&apos;s hear from our team...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => {
          return <ShowMoreButton key={index} review={review} />;
        })}
      </div>
    </div>
  );
}
