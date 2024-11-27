import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Site en maintenance
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Nous travaillons actuellement sur le site. Revenez bientôt !
        </p>

        {/* Section des coordonnées */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contactez-nous</h2>
          <p className="text-gray-800">
            <strong>Téléphone :</strong> <a href="tel:+212535620615" className="text-blue-500 hover:underline">+212 5 35 620 615</a>
          </p>
          <p className="text-gray-800 mt-2">
            <strong>Email :</strong> <a href="mailto:secretariatassurplus@gmail.com" className="text-blue-500 hover:underline">secretariatassurplus@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
