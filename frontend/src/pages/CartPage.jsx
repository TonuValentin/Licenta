import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import CartItem from "../components/CartItem";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import OrderSummary from "../components/OrderSummary";
import GiftCouponCard from "../components/GiftCouponCard";

const CartPage = () => {
	const { cart } = useCartStore();

	return (
		<div className="min-h-screen flex flex-col">
			<main className={`flex-1 py-8 sm:px-6 lg:px-8 ${cart.length === 0 ? "flex flex-col items-center pt-24" : ""}`}>
				{cart.length === 0 ? (
					<EmptyCartUI />
				) : (
					<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Lista produse */}
							<div className="lg:col-span-2">
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{cart.map((item) => (
										<div key={item._id} className="min-w-[220px] min-h-[350px] w-full max-w-xs mx-auto">
											<CartItem item={item} />
										</div>
									))}
								</div>
								{cart.length > 0 && <PeopleAlsoBought />}
							</div>
							{/* Sumar comandă și voucher */}
							<div className="space-y-6">
								{cart.length > 0 && (
									<>
										<OrderSummary />
										<GiftCouponCard />
									</>
								)}
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};
export default CartPage;

const EmptyCartUI = () => (
	<motion.div
		className='flex flex-col items-center justify-center space-y-4 py-16'
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<ShoppingCart className='h-24 w-24 text-gray-300' />
		<h3 className='text-2xl font-semibold '>Coșul tău este gol</h3>
		<p className='text-gray-400'>Se pare că nu ai adăugat nimic în coș.</p>
		<Link
			className='mt-4 rounded-md bg-emerald-500 px-6 py-2 text-white transition-colors hover:bg-emerald-600'
			to='/'
		>
			Începe cumpărăturile
		</Link>
	</motion.div>
);
