import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogSingle() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/blog-posts/${slug}`
        );
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center">Loading blog...</p>;
  if (!blog) return <p className="text-center">Blog not found.</p>;

  return (
    <main>
      {/* ===== Blog Single Start ===== */}
      <section className="gj qp gr hj rp hr">
        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="tc sf yo zf kq">
            {/* Article */}
            <div className="ro">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                {/* Image */}
                <img
                  src={
                    blog.image
                      ? `http://127.0.0.1:8000/storage/${blog.image}`
                      : "/images/blog-placeholder.png"
                  }
                  alt={blog.title}
                  className="mb-6 w-full"
                />

                {/* Title */}
                <h2 className="ek vj 2xl:ud-text-title-lg kk wm nb gb">
                  {blog.title}
                </h2>

                {/* Meta infos */}
                <ul className="tc uf cg 2xl:ud-gap-15 fb my-4">
                  <li>
                    <span className="rc kk wm">Author: </span>
                    {blog.author?.name || "Unknown"}
                  </li>
                  <li>
                    <span className="rc kk wm">Published On: </span>
                    {new Date(blog.created_at).toLocaleDateString()}
                  </li>
                  <li>
                    <span className="rc kk wm">Category: </span>
                    {blog.category?.name || "General"}
                  </li>
                </ul>

                {/* Content HTML rendu depuis backend */}
                <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Share Section */}
                <ul className="tc wf bg sb mt-8">
                  <li>
                    <p className="sj kk wm tb">Share On:</p>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tc wf xf yd ad rg ml il ih wk"
                      aria-label="Share on Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tc wf xf yd ad rg ml il jh wk"
                      aria-label="Share on Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tc wf xf yd ad rg ml il kh wk"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tc wf xf yd ad rg ml il lh wk"
                      aria-label="Share on Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="jn/2 so">
              {/* Search */}
              <div className="animate_top fb">
                <form>
                  <div className="i">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="vd sm _g ch pm vk xm rg gm dm/40 dn/40 li mi"
                    />
                    <button type="submit" className="h r q _h">
                      🔍
                    </button>
                  </div>
                </form>
              </div>

              {/* Categories */}
              <div className="animate_top fb">
                <h4 className="tj kk wm qb">Categories</h4>
                <ul>
                  <li className="ql vb du-ease-in-out il xl">
                    <a href="#">Blog</a>
                  </li>
                  <li className="ql vb du-ease-in-out il xl">
                    <a href="#">Events</a>
                  </li>
                  <li className="ql vb du-ease-in-out il xl">
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>

              {/* Related posts (placeholder) */}
              <div className="animate_top">
                <h4 className="tj kk wm qb">Related Posts</h4>
                <div>
                  <div className="tc fg 2xl:ud-gap-6 qb">
                    <img src="/images/blog-small-01.png" alt="Blog" />
                    <h5 className="wj kk wm xl bn ml il">
                      <a href="#">Free advertising for your online business</a>
                    </h5>
                  </div>
                  <div className="tc fg 2xl:ud-gap-6 qb">
                    <img src="/images/blog-small-02.png" alt="Blog" />
                    <h5 className="wj kk wm xl bn ml il">
                      <a href="#">9 simple ways to improve your design skills</a>
                    </h5>
                  </div>
                  <div className="tc fg 2xl:ud-gap-6">
                    <img src="/images/blog-small-03.png" alt="Blog" />
                    <h5 className="wj kk wm xl bn ml il">
                      <a href="#">Tips to quickly improve your coding speed.</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Blog Single End ===== */}
    </main>
  );
}
