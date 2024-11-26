import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Section 1: Logo et Adresse */}
        <div>
          <h3 className="text-lg font-bold mb-4">AssurPlus</h3>
          <p>ESPACE MARINA, AGDAL BUREAU N2, ÉTAGE 1</p>
          <p>Angle Rue Tariq Ibn ZYAD et Abdelkrim Benjelloun</p>
          <p>Fès, Maroc</p>
          <p className="mt-4">
            <strong>Téléphone:</strong> +212 5 35 620 615
          </p>
          <p>
            <strong>Email:</strong> secretariatassurplus@gmail.com
          </p>
        </div>

        {/* Section 2: Liens Utiles */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Nos Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Nos Services</h3>
          <ul className="space-y-2">
            <li>Conseil en Assurance</li>
            <li>Support Client</li>
            <li>Gestion des Sinistres</li>
            <li>Produits sur Mesure</li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p>Abonnez-vous pour recevoir nos dernières actualités.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Votre email"
              className="p-2 w-full rounded text-gray-800"
            />
            <button
              type="submit"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 pb-5 text-center text-sm">
        © 2024 AssurPlus. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
