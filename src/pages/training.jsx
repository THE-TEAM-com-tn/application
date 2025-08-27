import { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:8000/api/trainings";

export default function Trainings() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Animate on scroll
  useEffect(() => {
    ScrollReveal().reveal(".animate_top", {duration: 1200,origin: "top",distance: "50px",easing: "ease",reset: false,});
    ScrollReveal().reveal(".animate_bottom", {duration: 1200,origin: "bottom",distance: "50px",easing: "ease",reset: false,});
    ScrollReveal().reveal(".animate_zoom", {duration: 1200,scale: 0.85,easing: "ease",reset: false,});
  }, []);

  // Read URL params once on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("page") || "1", 10);
    const s = params.get("search") || "";
    setPage(Number.isNaN(p) ? 1 : p);
    setSearch(s);
    setSearchInput(s);
  }, []);

  // Fetch data
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setErr("");

    axios
      .get(API_BASE, {
        params: {
          per_page: perPage,
          page,
          search: search.trim() || undefined,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setTrainings(Array.isArray(res.data.data) ? res.data.data : []);
        setTotalPages(res.data?.pagination?.last_page || 1);
      })
      .catch((e) => {
        if (e.name !== "CanceledError") setErr(e.message || "Error");
      })
      .finally(() => setLoading(false));

    // Sync params in URL
    const url = new URL(window.location.href);
    if (search.trim()) url.searchParams.set("search", search.trim());
    else url.searchParams.delete("search");
    url.searchParams.set("page", String(page));
    window.history.replaceState({}, "", url);

    return () => controller.abort();
  }, [page, perPage, search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  return (
    <main>
      <section className="i pg rm ji gp uq">
        {/* Background Shapes */}
        <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
        <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />

        {/* Header */}
        <div className="animate_top bb ze rj ki xn vq trainings-header">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
            Explore Our Trainings
          </h2>
          <p className="mt-2">
            Sharpen your skills with professional training programs.
          </p>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="search-form mt-4">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search trainings…"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* Trainings Grid (styled like blogs) */}
        <div className="wc qf pn xo zf iq mt-8 animate_bottom">
          {err && <div className="error">{err}</div>}

          {loading ? (
            <div className="loading">Loading trainings…</div>
          ) : trainings.length === 0 ? (
            <div className="no-results">No trainings found.</div>
          ) : (
            trainings.map((t) => (
              <div key={t.id} className="animate_top sg vk rm xm">
                <div className="c rc i z-1 pg">
                  <img
  className="w-full"
  src={
    t.featured_image_url
      ? t.featured_image_url.replace("/files/", "/storage/files/")
      : "images/blog-placeholder.png"
  }
  alt={t.name}
/>




                  <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                    <Link
                      to={`/trainings/${t.id}`}
                      className="vc ek rg lk gh sl ml il gi hi"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="yh">
                  <div className="tc uf wf ag jq">
                    {t.duration && (
                      <div className="tc wf ag">
                        <img src="images/icon-calender.svg" alt="Duration" />
                        <p>{t.duration}</p>
                      </div>
                    )}
                    {t.price && (
                      <div className="tc wf ag">
                        <img src="images/icon-man.svg" alt="Price" />
                        <p>
                          {typeof t.price === "number"
                            ? `$${t.price}`
                            : t.price}
                        </p>
                      </div>
                    )}
                  </div>
                  <h4 className="ek tj ml il kk wm xl eq lb">
                    <Link to={`/trainings/${t.id}`}>{t.name}</Link>
                  </h4>
                  <p className="mt-2 text-sm">
                    {t.description?.length > 100
                      ? t.description.slice(0, 100) + "…"
                      : t.description || "—"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </section>
    </main>
  );
}
