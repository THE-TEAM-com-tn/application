import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/style.css';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar_url?: string | null;
  };
  created_at: string;
};

export default function BlogSingle() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    fetch(`https://app.the-team.tn/api/blog-posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog post");
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="text-center py-24">Loading...</div>;
  if (error) return <div className="text-center py-24 text-red-500">{error}</div>;
  if (!post) return <div className="text-center py-24 text-red-500">Article not found.</div>;

  return (
    <main>
      <Header />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <article className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection  border-gray-200 dark:border-strokedark p-8 md:p-10">
          {/* Cover Image */}
          <img
            src={`https://app.the-team.tn/storage/${post.image}`}
            alt={post.title}
            className="mb-6 rounded-lg"
          />

          {/* Title */}
          <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb mb-4">
            {post.title}
          </h2>

          {/* Meta */}
          <ul className="tc uf cg 2xl:ud-gap-15 fb text-sm text-gray-600 dark:text-gray-400 mb-6">
            <li>
              <span className="rc kk wm">Author: </span> {post.author?.name || 'Unknown'}
            </li>
            <li>
              <span className="rc kk wm">Published On: </span>{' '}
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </li>
            <li>
              <span className="rc kk wm">Category: </span> Blog
            </li>
          </ul>

          {/* Content from API (HTML) */}
          <div
            className="space-y-6 leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share buttons
          <ul className="tc wf bg sb mt-10">
            <li>
              <p className="sj kk wm tb">Share On:</p>
            </li>
            <li>
              <a href="#" className="tc wf xf yd ad rg ml il ih wk">Fb</a>
            </li>
            <li>
              <a href="#" className="tc wf xf yd ad rg ml il jh wk">Tw</a>
            </li>
            <li>
              <a href="#" className="tc wf xf yd ad rg ml il kh wk">In</a>
            </li>
            <li>
              <a href="#" className="tc wf xf yd ad rg ml il lh wk">Li</a>
            </li>
          </ul>
           */}
           
        </article>
      </section>

      <Footer />
    </main>
  );
}
