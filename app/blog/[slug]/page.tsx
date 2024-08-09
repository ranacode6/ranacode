import { SingleBlog } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

async function getBlog(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            smallDescription,
            content,
            titleImage,
        }[0]
    `

    const blog = await client.fetch(query);
    return blog;
}

export default async function BlogSlug ({ params }: { params: { slug: string }}) {
        const blog:SingleBlog = await getBlog(params.slug);
        console.log(blog);
    return <div className="bg-slate-300 min-h-screen dark:bg-slate-800">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h1 className="text-4xl text-black dark:text-slate-200 font-semibold mt-8 mb-5">{blog.title}</h1>
            <div className="w-full flex items-center justify-center">
            <Image className="object-cover aspect-16/9 rounded-lg" width={700} height={400} src={urlFor(blog.titleImage).url()} alt={blog.title}  />
            </div>
            <div className="my-16 prose prose-xl prose-slate prose-headings:text-gray-700 prose-code:text-blue-500 prose-p:text-gray-600 prose-ul:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-600 dark:prose-invert dark:prose-headings:text-gray-400 prose-a:text-gray-600 prose-lead:text-gray-600 prose-ol:text-gray-600 dark:prose-headings:text-gray-400 dark:prose-code:text-orange-400 dark:prose-p:text-gray-400 dark:prose-li:text-gray-400 dark:prose-strong:text-gray-400 dark:prose-ul:text-gray-400 dark:prose-ol:text-gray-400 prose-figure:text-gray-800">
                <PortableText value={blog.content} />
            </div>
        </div>
    </div>;
}