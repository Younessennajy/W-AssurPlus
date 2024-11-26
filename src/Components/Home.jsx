import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Site en maintenance
        </h1>
        <p className="text-lg text-gray-600">
          Nous travaillons actuellement sur le site. Revenez bientôt !
        </p>
      </div>
    </div>
  );
}

export default Home;
