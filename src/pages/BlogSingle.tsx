import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    setError(null);

    fetch(`https://app.the-team.tn/api/blog-posts/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement de l'article");
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setError("Article introuvable.");
          setPost(null);
        } else {
          setPost(data);  // data est un objet blog, pas un tableau
        }
      })
      .catch((err) => {
        setError(err.message);
        setPost(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main>
        <Header />
        <div className="text-center p-10 text-gray-500">Chargement de l'article...</div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Header />
        <div className="text-center p-10 text-red-500">{error}</div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Header />
        <div className="text-center p-10 text-red-500">Article introuvable.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto p-6">
        <img
          src={`https://app.the-team.tn/storage/${post.image}`}
          alt={post.title}
          className="rounded-xl mb-6 w-full"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
          
          <span>Par {post.author.name}</span>
          <span>•</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      <Footer />
    </main>
  );
}
