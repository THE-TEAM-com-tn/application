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
        if (!res.ok) throw new Error("Erreur lors du chargement de l'article");
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setError("Article introuvable.");
          setPost(null);
        } else {
          setPost(data);
        }
      })
      .catch((err) => {
        setError(err.message);
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return (
      <main>
        <Header />
        <div className="text-center p-20 text-gray-500">Chargement de l'article...</div>
        <Footer />
      </main>
    );

  if (error)
    return (
      <main>
        <Header />
        <div className="text-center p-20 text-red-500">{error}</div>
        <Footer />
      </main>
    );

  if (!post)
    return (
      <main>
        <Header />
        <div className="text-center p-20 text-red-500">Article introuvable.</div>
        <Footer />
      </main>
    );

  return (
    <main className="bg-white text-gray-900">
      <Header />

      {/* Image couverture pleine page avec overlay */}
      <section
        className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(https://app.the-team.tn/storage/${post.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
       
      </section>
<div className="flex justify-end">
  <a href="http://localhost:5173/blogs/" className="vc ek rg lk gh sl ml il gi hi">
    See All The Blogs
  </a>
</div>
      {/* Contenu principal */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-16 prose prose-lg prose-slate">
        <div className="flex items-center space-x-4 mb-10">
           
        <br></br>
          <div className="text-sm text-[#259d79]">
            <p>
              Par{" "}
              <strong className="text-[#259d79]">{post.author.name}</strong>
            </p>
            <p>
              {new Date(post.created_at).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          
        </div>
              <h1 className="relative z-10 max-w-4xl text-white text-4xl md:text-6xl font-extrabold text-center px-6">
          {post.title}
        </h1>
        {/* Contenu HTML */}
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose max-w-none"
          style={{ color: "#000" }} // texte noir dans le contenu
        />
        
      </section>

      <Footer />
    </main>
  );
}
