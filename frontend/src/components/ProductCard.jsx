import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Trebuie să te loghezi pentru a adăuga produse în coș", { id: "login" });
			return;
		} else {
			addToCart(product);
		}
	};

	return (
		<div className="rounded-lg overflow-hidden h-full w-full min-w-[220px] max-w-sm mx-auto border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105 p-2 bg-transparent">
			<Link to={`/product/${product._id}`} className="block">
				<div className='overflow-hidden'>
					<img
						src={product.image}
						alt={product.name}
						className='w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg'
					/>
				</div>
				<div className='p-4'>
					<h3 className='text-lg font-semibold mb-2 text-white'>{product.name}</h3>
					<p className='text-2xl font-bold text-emerald-400 mb-4'>
						{Math.round(product.price)} RON
					</p>
				</div>
			</Link>
			<button
				onClick={handleAddToCart}
				className='w-full mt-4 bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300'
			>
				Disponibil
			</button>
		</div>
	);
};

export default ProductCard;
