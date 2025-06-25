import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type BlogItem = {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
};

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetch("https://app.the-team.tn/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogData(data.data)) // <-- ajuste selon la structure réelle
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <main>
      <Header />
      <section className="ji gp uq">
        <div className="bb ye ki xn vq jb jo">
          {blogData.length === 0 ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : (
            blogData.map(({ id, image, title, author, date }) => (
              <div key={id} className="wc qf pn xo zf iq">
                <div className="animate_top sg vk rm xm">
                  <div className="c rc i z-1 pg">
                    <img className="w-full" src={image} alt={title} />
                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                      <a href={`/blog/${id}`} className="vc ek rg lk gh sl ml il gi hi">
                        Read More
                      </a>
                    </div>
                  </div>

                  <div className="yh">
                    <div className="tc uf wf ag jq">
                      <div className="tc wf ag">
                        <img src="images/icon-man.svg" alt="User" />
                        <p>{author}</p>
                      </div>
                      <div className="tc wf ag">
                        <img src="images/icon-calender.svg" alt="Calendar" />
                        <p>{date}</p>
                      </div>
                    </div>
                    <h4 className="ek tj ml il kk wm xl eq lb">
                      <a href={`/blog/${id}`}>{title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Pagination (statique ici, à adapter pour pagination dynamique si nécessaire) */}
          <div className="mb lo bq i ua">
            <nav>
              <ul className="tc wf xf bg">
                {[1, 2, 3].map((num) => (
                  <li key={num}>
                    <a
                      className="c tc wf xf wd in zc hn rg uj fo wk xm ml il hh rm tl zm yl an"
                      href="#"
                    >
                      {num}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
