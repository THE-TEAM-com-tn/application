import { useState, useEffect } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";

export default function Reclamation() {
  const [formData, setFormData] = useState({
    type: "",
    client_email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Scroll animations
  useEffect(() => {
    ScrollReveal().reveal(".animate_top", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      easing: "ease",
    });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate inputs (frontend check)
  const validate = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = "Type is required.";
    if (!formData.client_email) newErrors.client_email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://127.0.0.1:8000/api/reclamation-submissions", formData);
      setSuccess("Your complaint has been submitted successfully!");
      setFormData({ type: "", client_email: "", subject: "", message: "" });
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section id="support" className="i pg rm ji gp uq">
        {/* Shapes */}
        <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
        <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
        <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
        <img src="images/shape-12.svg" alt="Shape" className="h p s" />
        <img src="images/shape-13.svg" alt="Shape" className="h r q" />
        <img src="images/circle55.svg" alt="Shape" className="h r q" />

        {/* Title */}
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
            Please let us know if you have any complaints or concerns.
          </h2>
        </div>

        {/* Form */}
        <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
          {errors.general && <p className="error-message">{errors.general}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <form onSubmit={handleSubmit}>
            {/* Type */}
            <div className="vd">
              <label className="rc ac" htmlFor="type">Reclamation Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${errors.type ? "input-error" : "border-gray-300"}`}
              >
                <option value="">-- Select a type --</option>
                <option value="billing">Billing</option>
                <option value="service">Service</option>
                <option value="technical">Technical</option>
              </select>
              {errors.type && <p className="error-message">{errors.type}</p>}
            </div>

            {/* Email */}
            <div className="vd">
              <label className="rc ac" htmlFor="client_email">Email address</label>
              <input
                type="email"
                name="client_email"
                value={formData.client_email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${errors.client_email ? "input-error" : "border-gray-300"}`}
              />
              {errors.client_email && <p className="error-message">{errors.client_email}</p>}
            </div>

            {/* Subject */}
            <div className="vd">
              <label className="rc ac" htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Type your subject"
                className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi ${errors.subject ? "input-error" : "border-gray-300"}`}
              />
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="fb">
              <label className="rc ac" htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className={`vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci ${errors.message ? "input-error" : "border-gray-300"}`}
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            {/* Button */}
            <div className="tc xf">
              <button
                type="submit"
                disabled={loading}
                className="vc rg lk gh ml il hi gi _l"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
