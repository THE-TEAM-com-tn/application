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
  const [category, setCategory] = useState("");

  // Animate on scroll
  useEffect(() => {
    ScrollReveal().reveal(".animate_top", {
      duration: 1200,
      origin: "top",
      distance: "50px",
      easing: "ease",
      reset: false,
    });
    ScrollReveal().reveal(".animate_bottom", {
      duration: 1200,
      origin: "bottom",
      distance: "50px",
      easing: "ease",
      reset: false,
    });
    ScrollReveal().reveal(".animate_zoom", {
      duration: 1200,
      scale: 0.85,
      easing: "ease",
      reset: false,
    });
  }, []);

  // Read URL params once on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("page") || "1", 10);
    const s = params.get("search") || "";
    const c = params.get("category") || "";
    
    setPage(Number.isNaN(p) ? 1 : p);
    setSearch(s);
    setSearchInput(s);
    setCategory(c);
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
          category: category || undefined,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setTrainings(Array.isArray(res.data.data) ? res.data.data : []);
        setTotalPages(res.data?.pagination?.last_page || 1);
      })
      .catch((e) => {
        if (e.name !== "CanceledError") setErr(e.message || "Error fetching trainings");
      })
      .finally(() => setLoading(false));

    // Sync params in URL
    const url = new URL(window.location.href);
    if (search.trim()) url.searchParams.set("search", search.trim());
    else url.searchParams.delete("search");
    
    if (category) url.searchParams.set("category", category);
    else url.searchParams.delete("category");
    
    url.searchParams.set("page", String(page));
    window.history.replaceState({}, "", url);

    return () => controller.abort();
  }, [page, perPage, search, category]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  // Function to clear category filter
  const clearCategoryFilter = () => {
    setCategory("");
    setPage(1);
  };

  // Function to clear all filters
  const clearAllFilters = () => {
    setCategory("");
    setSearch("");
    setSearchInput("");
    setPage(1);
  };

  return (
    <main>
      <section className="i pg rm ji gp uq">
        {/* Background Shapes */}
        <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />
        <img src="images/circle55.svg" alt="Shape" className="h r q" />

        {/* Header */}
        <div className="animate_top bb ze rj ki xn vq trainings-header">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
            Explore Our Trainings
          </h2>
          <p className="mt-2">
            Sharpen your skills with professional training programs.
          </p>

          {/* Active filters indicator */}
          {(category || search) && (
            <div className="active-filters mt-4">
              <span className="filter-label">Active filters:</span>
              
              {category && (
                <span className="filter-tag">
                  Category: {decodeURIComponent(category)}
                  <button 
                    onClick={clearCategoryFilter}
                    className="filter-remove"
                    aria-label="Remove category filter"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {search && (
                <span className="filter-tag">
                  Search: "{search}"
                  <button 
                    onClick={() => { setSearch(""); setSearchInput(""); }}
                    className="filter-remove"
                    aria-label="Remove search filter"
                  >
                    ×
                  </button>
                </span>
              )}
              
              <button 
                onClick={clearAllFilters}
                className="clear-all-filters"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="search-form mt-4">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search trainings…"
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        {/* Trainings Grid */}
        <div className="bb ye ki xn vq jb jo">
        <div className="wc qf pn xo zf iq animate_bottom">
          {err && (
            <div className="error-message">
              <p>{err}</p>
              <button onClick={() => window.location.reload()} className="retry-button">
                Try Again
              </button>
            </div>
          )}

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading trainings…</p>
            </div>
          ) : trainings.length === 0 ? (
            <div className="no-results">
              <h3>No trainings found</h3>
              <p>Try adjusting your search criteria or filters</p>
              {(category || search) && (
                <button 
                  onClick={clearAllFilters}
                  className="clear-filters-button"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="trainings-grid">
                {trainings.map((t) => (
                  <div key={t.id} className="animate_top sg vk rm xm training-card">
                    <div className="c rc i z-1 pg">
                      <img
                        className="w-full training-image"
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
                          className="vc ek rg lk gh sl ml il gi hi "
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="yh training-details">
                      <div className="tc uf wf ag jq training-meta">
                        {t.duration && (
                          <div className="tc wf ag meta-item">
                            <img src="images/icon-calender.svg" alt="Duration" />
                            <p>{t.duration}</p>
                          </div>
                        )}
                        {t.price && (
                          <div className="tc wf ag meta-item">
                            <img src="images/icon-man.svg" alt="Price" />
                            <p>
                              {typeof t.price === "number"
                                ? `$${t.price}`
                                : t.price}
                            </p>
                          </div>
                        )}
                      </div>
                      <h4 className="ek tj ml il kk wm xl eq lb training-title">
                        <Link to={`/trainings/${t.id}`}>{t.name}</Link>
                      </h4>
                      <p className="training-description">
                        {t.description?.length > 100
                          ? t.description.slice(0, 100) + "…"
                          : t.description || "—"}
                      </p>
                      {t.categories && t.categories.length > 0 && (
                        <div className="training-categories">
                          {t.categories.map((cat) => (
                            <span key={cat.id} className="category-tag">
                              {cat.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination-container">
                  <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>
                  
                  <span className="pagination-info">
                    Page {page} of {totalPages}
                  </span>
                  
                  <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === totalPages}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        </div>
      </section>
    </main>
  );
}