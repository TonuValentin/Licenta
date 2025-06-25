import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCartStore } from "../stores/useCartStore";

const SIZES = ["S", "M", "L", "XL"];
const SHOE_SIZES = [39, 40, 41, 42, 43,];

// Exemplu de produse (în practică, vei face fetch sau vei primi ca prop)
const PRODUCTS = [
  {
    _id: "1",
    name: "Blugi Negri",
    price: 150,
    image: "https://res.cloudinary.com/dlutje21o/image/upload/v1747688794/products/slxffqmndsczvrz4k7fh.jpg",
    description: "Blugi negri moderni, potriviți pentru orice ocazie. Material de calitate, confortabili și rezistenți."
  },
  // ... alte produse ...
];

const REVIEWS = [
  {
    user: "Andrei",
    rating: 5,
    comment: "Foarte comozi și de calitate! Recomand cu încredere.",
  },
  {
    user: "Maria",
    rating: 4,
    comment: "Material bun, dar mărimea a fost puțin mai mare decât mă așteptam.",
  },
  {
    user: "Alex",
    rating: 5,
    comment: "Perfect pentru ținutele casual. Livrare rapidă!",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();

  // Determină mărimile disponibile în funcție de categorie
  const sizeOptions = product?.category === "shoes" ? SHOE_SIZES : SIZES;
  const [size, setSize] = useState(sizeOptions[0]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Produsul nu există");
        return res.json();
      })
      .then(data => {
        setProduct(data);
        // Setează mărimea default corectă după ce se știe categoria
        if (data.category === "shoes") setSize(SHOE_SIZES[0]);
        else setSize(SIZES[0]);
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center text-white mt-20">Se încarcă...</div>;
  if (!product) return <div className="text-center text-white mt-20">Produsul nu există.</div>;

  return (
    <div className="max-w-lg w-full mx-auto p-4 sm:p-6 rounded-lg border border-gray-700 shadow-lg bg-transparent mt-12 mb-16 transition-transform transition-shadow duration-500 ease-in-out hover:scale-200 hover:shadow-2xl will-change-transform">
      <img src={product.image} alt={product.name} className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
      <p className="text-2xl font-bold text-emerald-400 mb-2">{Math.round(product.price)} RON</p>
      <p className="text-gray-300 mb-4">{product.description}</p>
      <div className="mb-4">
        <span className="text-white mr-2 ">Alege mărimea:</span>
        {sizeOptions.map(s => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`px-4 py-2 rounded border mr-2 mb-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 ${size === s ? "bg-emerald-600 text-white border-emerald-600" : "bg-gray-800 text-gray-300 border-gray-600"}`}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          addToCart({ ...product, size });
          navigate("/cart");
        }}
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded transition-colors transition-transform transition-shadow duration-300 ease-in-out flex items-center justify-center shadow hover:scale-100 hover:shadow-lg"
      >
        Adaugă în coș
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Review-uri clienți</h2>
        <div className="space-y-4">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-gray-800 bg-opacity-60 rounded-lg p-4">
              <div className="flex items-center mb-1">
                <span className="font-semibold text-emerald-400 mr-2">{review.user}</span>
                <span className="text-yellow-400">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
