import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer.jsx";
import React, { useState } from "react";

export default function Calendar() {
    const [loading, setLoading] = useState(false);
return (
    <main className="min-h-screen flex flex-col">
      
      
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

      
    </main>
  );
}