import { BlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
    const query = `
      *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      'currentSlug': slug.current,
      titleImage,
  }
    `;
  
    const blogs = await client.fetch(query);
    return blogs;
  }

export default async function Blogs() {

    const blogs: BlogCard[] = await getData();
    console.log(blogs);
    return <div className="grid grid-cols-1 md:grid-cols-2 my-5 px-4 max-w-5xl gap-20">
      {
        blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.currentSlug}`} className="group border rounded-lg border-slate-400 dark:border-slate-700 border-1 max-w-xl">
            <div className="flex justify-center items-center">
            <Image className="object-cover aspect-video rounded-lg" src={urlFor(blog.titleImage).url()} width={500} height={800} alt={blog.title} priority sizes="100vw"  />
            </div>
            <h2 className="my-3 font-semibold text-3xl group-hover:underline line-clamp-2 text-black px-3 dark:text-slate-200">{blog.title}</h2>
            <p className="mb-3 text-xl font-normal text-gray-600 dark:text-gray-400 group-hover:underline line-clamp-2 px-3">{blog.smallDescription}</p>
          </Link>
        ))
      }
    </div>;
}