import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const { addToCart } = useCartStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<div className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>Produse Recomandate</h2>
				<div className='relative'>
					<div className='overflow-hidden'>
						<div
							className='flex transition-transform duration-300 ease-in-out'
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product) => (
								<div key={product._id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2'>
									<div className="rounded-lg overflow-hidden h-full max-w-xs mx-auto border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-100 p-2 bg-transparent">
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
											onClick={() => addToCart(product)}
											className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center mt-2'
										>
											<ShoppingCart className='w-5 h-5 mr-2' />
											Adăugă în Coș
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
					<button
						onClick={prevSlide}
						disabled={isStartDisabled}
						className={`absolute top-1/2 -left-8 transform -translate-y-1/2 p-4 text-white text-xl rounded-full shadow-lg border-2 border-emerald-400 transition-colors duration-300 z-20 ${
							isStartDisabled ? "bg-gray-400 cursor-not-allowed border-gray-400" : "bg-emerald-600 hover:bg-emerald-500 border-emerald-400 hover:scale-110"
						}`}
					>
						<ChevronLeft className='w-8 h-8' />
					</button>

					<button
						onClick={nextSlide}
						disabled={isEndDisabled}
						className={`absolute top-1/2 -right-8 transform -translate-y-1/2 p-4 text-white text-xl rounded-full shadow-lg border-2 border-emerald-400 transition-colors duration-300 z-20 ${
							isEndDisabled ? "bg-gray-400 cursor-not-allowed border-gray-400" : "bg-emerald-600 hover:bg-emerald-500 border-emerald-400 hover:scale-110"
						}`}
					>
						<ChevronRight className='w-8 h-8' />
					</button>
				</div>
			</div>
		</div>
	);
};
export default FeaturedProducts;
