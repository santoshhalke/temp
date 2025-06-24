'use client'
import { notFound } from 'next/navigation';
import blogs from '@/data/blogs';
import Link from 'next/link';

export default function BlogDetails({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0 py-16 mt-20">
      <Link href="/blog" className="text-blue-600 text-sm mb-6 inline-block">← Back to Blogs</Link>
      <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{blog.date} • {blog.readTime}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-8"
      />
      <article className="prose prose-lg max-w-none text-gray-800">
        {blog.content}
      </article>
    </section>
  );
}
