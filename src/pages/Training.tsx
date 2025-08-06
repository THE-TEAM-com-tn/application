import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css"; // si tu veux un style personnalisé

type Module = {
  id: number;
  title: string;
  description: string;
  position: number;
};

type TrainingItem = {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  featured_image_url: string;
  modules: Module[];
};

export default function Training() {
  const [trainings, setTrainings] = useState<TrainingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.the-team.tn/api/trainings")
      .then((res) => res.json())
      .then((data) => setTrainings(data.data))
      .catch((err) => console.error("Erreur de chargement :", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Header />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#259d79]">
          Our Trainings
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading trainings...</p>
        ) : trainings.length === 0 ? (
          <div className="text-center text-gray-500 italic">No trainings available for now.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training) => (
              <div
                key={training.id}
                className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-blacksection border border-gray-200 dark:border-strokedark flex flex-col transition-transform hover:scale-[1.02]"
              >
                <img
                src={training.featured_image_url}
                alt={training.name}
                className="h-48 w-full object-cover"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src = "/images/placeholder.jpg")
                }
              />


                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-[#259d79]">
                      {training.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {training.description}
                    </p>

                    <ul className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                      <li>
                        <strong>Duration:</strong> {training.duration} hrs
                      </li>
                      <li>
                        <strong>Price:</strong> ${training.price}
                      </li>
                      <li>
                        <strong>Modules:</strong> {training.modules.length}
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`/trainings/${training.id}`}
                    className="mt-4 inline-block text-center bg-[#259d79] text-white px-4 py-2 rounded hover:bg-[#1f7c60] transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
