import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll animations
    ScrollReveal().reveal(".animate_top", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      easing: "ease",
      reset: false,
    });
    ScrollReveal().reveal(".animate_bottom", {
      duration: 2000,
      origin: "bottom",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Fetch blogs from backend
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blog-posts");
        // Paginated data is in response.data.data
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center">Loading blogs...</p>;
  }

  return (
    <main>
      <section className="ji gp uq">
        {/* Section Title */}
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
            Welcome to our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="bb ye ki xn vq jb jo">
          <div className="wc qf pn xo zf iq">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="animate_top sg vk rm xm">
                  <div className="c rc i z-1 pg">
<img
  className="w-full"
  src={
    blog.image
      ? `http://127.0.0.1:8000/storage/${blog.image}`
      : "images/blog-placeholder.png"
  }
  alt={blog.title}
/>
                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                      <a
                        href={`/blog/${blog.slug}`}
                        className="vc ek rg lk gh sl ml il gi hi"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="yh">
                    <div className="tc uf wf ag jq">
                      <div className="tc wf ag">
                        <img src="images/icon-man.svg" alt="User" />
                        <p>{blog.author?.name || "Unknown"}</p>
                      </div>
                      <div className="tc wf ag">
                        <img src="images/icon-calender.svg" alt="Calender" />
                        <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <h4 className="ek tj ml il kk wm xl eq lb">
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs found.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
