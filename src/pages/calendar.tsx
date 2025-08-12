import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Calendar() {
  // You can add state for calendar data if needed later
  const [loading, setLoading] = useState(false);

  // Example of how you might fetch calendar data later
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Calendar Section - Empty for now */}
      <section className="ji gp uq flex-grow">
        <div className="bb ye ki xn vq jb jo">
          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Loading calendar...</p>
          ) : (
            <div className="text-center py-20">
              <h2 className="fk vj zp or kk wm wb mb-4 dark:text-white">
                Calendar Page
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Calendar content will be displayed here
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}