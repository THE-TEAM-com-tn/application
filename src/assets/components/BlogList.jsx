import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogList({ limit }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blog-posts");
        let data = response.data.data || [];
        if (limit) data = data.slice(0, limit); // show only latest x blogs
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [limit]);

  return (
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
                <a href={`/blog/${blog.slug}`} className="vc ek rg lk gh sl ml il gi hi">
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
  );
}
