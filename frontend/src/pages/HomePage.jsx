import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/jeans", name: "Blugi", imageUrl: "/jeans-new.png" },
	{ href: "/t-shirts", name: "Tricouri", imageUrl: "/tshirt.png" },
	{ href: "/shoes", name: "Adidași", imageUrl: "/shoes-new.png" },
	{ href: "/glasses", name: "Ochelari", imageUrl: "/glasses-new.png" },
	{ href: "/jackets", name: "Jachete", imageUrl: "/jackets-new.png" },
	{ href: "/suits", name: "Costumuri", imageUrl: "/suits-new.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explorează Categoriile Noastre
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Descoperă cele mai noi haine din lumea modei
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				<div className='flex justify-center mb-8'>
					<div className='w-32 h-1 bg-emerald-400 rounded-full'></div>
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
