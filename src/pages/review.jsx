import { useState, useEffect } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";

export default function Review() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: 5,
    comment: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" }); // clear error when typing
  };

  // Validation
  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.comment.trim()) errors.comment = "Comment cannot be empty.";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!validateForm()) return; // stop submission if invalid

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/review-submissions/create", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Thank you for your review!");
      setFormData({ name: "", email: "", phone: "", rating: 5, comment: "" }); // reset form
      setValidationErrors({});
    } catch (err) {
      if (err.response?.status === 422) {
        setError("Validation failed. Please check your inputs.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Animations
  useEffect(() => {
    ScrollReveal().reveal(".animate_left", { duration: 2000, origin: "left", distance: "50px", easing: "ease" });
    ScrollReveal().reveal(".animate_right", { duration: 2000, origin: "right", distance: "50px", easing: "ease" });
    ScrollReveal().reveal(".animate_top", { duration: 2000, origin: "top", distance: "50px", easing: "ease" });
    ScrollReveal().reveal(".animate_bottom", { duration: 2000, origin: "bottom", distance: "50px", easing: "ease" });
    ScrollReveal().reveal(".animate_fade", { duration: 2000, opacity: 0, distance: "0px", easing: "ease" });
    ScrollReveal().reveal(".animate_zoom", { duration: 2000, scale: 0.85, easing: "ease" });
  }, []);

  return (
    <main>
      <section id="support" className="i pg rm ji gp uq">
        {/* Bg Shapes */}
        <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
        <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />
        <img src="images/circle55.svg" alt="Shape" className="h r q" />

        {/* Section Title */}
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
            Your opinion matters to us
          </h2>
        </div>

        {/* Review Form */}
        <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
          <form onSubmit={handleSubmit}>
            <div className="tc sf yo ap zf ep qb">
              <div className="vd to/2">
                <label className="rc ac" htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Devid Wonder"
                   className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${
                   validationErrors.name ? "input-error" : ""
                     }`}
                 />
                 {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
              </div>

              <div className="vd to/2">
                <label className="rc ac" htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${
                    validationErrors.email ? "input-error" : ""
                  }`}
                />
                {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
              </div>
            </div>

            <div className="tc sf yo ap zf ep qb">
              <div className="vd to/2">
                <label className="rc ac" htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+009 3342 3432"
                  className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${
                    validationErrors.phone ? "input-error" : ""
                  }`}
                />
                {validationErrors.phone && <p className="error-message">{validationErrors.phone}</p>}
              </div>

              <div className="vd to/2">
                <label className="rc ac" htmlFor="rating">Rating</label>
                <select
                  name="rating"
                  id="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                >
                  {[1,2,3,4,5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="fb">
              <label className="rc ac" htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci ${
                  validationErrors.comment ? "input-error" : ""
                }`}
              />
              {validationErrors.comment && <p className="error-message">{validationErrors.comment}</p>}
            </div>

            {/* Messages */}
            {loading && <p>Submitting...</p>}
            {success && <p className="text-green-500">{success}</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="tc xf">
              <button
                type="submit"
                disabled={loading}
                className="vc rg lk gh ml il hi gi _l"
              >
                {loading ? "Sending..." : "Send Review"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
