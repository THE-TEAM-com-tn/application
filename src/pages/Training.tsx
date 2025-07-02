import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type TrainingItem = {
  id: number;
  image: string;
  slug: string;
  title: string;
  author: string;
  date: string;
};

export default function Training() {
  const [trainingData, setTrainingData] = useState<TrainingItem[]>([]);

  useEffect(() => {
    fetch("https://app.the-team.tn/api/trainings")
      .then((res) => res.json())
      .then((data) => {
        const trainings = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          image: `https://app.the-team.tn/storage/${item.image}`,
          slug: item.slug,
          author: item.author?.name || "Unknown",
          date: new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        }));
        setTrainingData(trainings);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <main>
      <Header />
      <section className="ji gp uq">
        <div className="bb ye ki xn vq jb jo">
          {trainingData.length === 0 ? (
            <p className="text-center text-gray-500">Loading trainings...</p>
          ) : (
            trainingData.map(({ id, image, title, author, date, slug }) => (
              <div key={id} className="wc qf pn xo zf iq">
                <div className="animate_top sg vk rm xm">
                  <div className="c rc i z-1 pg">
                    <img className="w-full" src={image} alt={title} />
                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                      <a href={`/trainings/${slug}`} className="vc ek rg lk gh sl ml il gi hi">
                        Details
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
                        <img src="./public/images/icon-calender.svg" alt="Calendar" />
                        <p>{date}</p>
                      </div>
                    </div>
                    <h4 className="ek tj ml il kk wm xl eq lb">
                      <a href={`/trainings/${id}`}>{title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Pagination (statique ici, dynamique possible ensuite) */}
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
