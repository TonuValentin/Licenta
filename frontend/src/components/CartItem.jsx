import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

	return (
		<div className="rounded-lg overflow-hidden h-full max-w-xs mx-auto border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105 p-2 bg-transparent">
			<div className='overflow-hidden rounded-lg'>
				<img
					src={item.image}
					alt={item.name}
					className='w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110'
				/>
			</div>
			<div className='p-4 text-center'>
				<h3 className='text-lg font-semibold mb-2 text-white'>{item.name}</h3>
				{item.size && (
					<p className='text-sm text-gray-300 mb-2'>Mărime: <span className='font-semibold text-white'>{item.size}</span></p>
				)}
				<p className='text-2xl font-bold text-emerald-400 mb-4'>
					{Math.round(item.price)} RON
				</p>
				<div className="flex items-center justify-center mb-4">
					<button
						onClick={() => decreaseQuantity(item._id)}
						className="p-2 rounded bg-gray-800 hover:bg-emerald-600 text-white transition-colors duration-200"
					>
						<Minus />
					</button>
					<span className="mx-4 font-bold text-lg text-white select-none">{item.quantity || 1}</span>
					<button
						onClick={() => increaseQuantity(item._id)}
						className="p-2 rounded bg-gray-800 hover:bg-emerald-600 text-white transition-colors duration-200"
					>
						<Plus />
					</button>
				</div>
				<button
					onClick={() => removeFromCart(item._id)}
					className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center mx-auto'
				>
					<Trash className='w-5 h-5 mr-2' />
					Șterge din coș
				</button>
			</div>
		</div>
	);
};
export default CartItem;
