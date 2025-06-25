import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="w-full bg-gray-900 text-gray-400 py-10 mt-auto border-t border-emerald-800">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand & Scurtă descriere */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">GreenWardrobe</h2>
        <p className="text-sm">
          Magazinul tău online pentru haine, accesorii și multe altele. Calitate, rapiditate și siguranță la fiecare comandă!
        </p>
      </div>

      {/* Linkuri rapide */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Linkuri rapide</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/" className="relative hover:text-emerald-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">
              Acasă
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative hover:text-emerald-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">
              Coș
            </Link>
          </li>
          <li>
            <Link to="/signup" className="relative hover:text-emerald-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">
              Creează-ți contul
            </Link>
          </li>
          <li>
            <Link to="/login" className="relative hover:text-emerald-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">
              Loghează-te
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
        <ul className="space-y-1 text-sm">
          <li>Email: <a href="mailto:contact@ecommerce.com" className="hover:text-emerald-400">contact@ecommerce.com</a></li>
          <li>Telefon: <a href="tel:+40123456789" className="hover:text-emerald-400">+40 123 456 789</a></li>
          <li>Adresă: Str. Calea Marasesti 157,Bacau</li>
        </ul>
      </div>

      {/* Social media */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Urmărește-ne</h3>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl transition-transform duration-200 hover:scale-125"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-2xl transition-transform duration-200 hover:scale-125"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 text-2xl transition-transform duration-200 hover:scale-125"><FaTwitter /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 text-2xl transition-transform duration-200 hover:scale-125"><FaGithub /></a>
        </div>
      </div>
      </div>
    <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-center items-center text-sm">
      <span className="w-full text-center">
        &copy; {new Date().getFullYear()} GreenWardrobe. Toate drepturile rezervate.
      </span>

      </div>
      </footer>
);

export default Footer;