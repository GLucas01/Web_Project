import { useState } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div>
			{isOpen ? (

			<div className='lmj-cart'>
				<div>
					<h2>Panier</h2>
					<div>
						Monstera : {monsteraPrice}€
						<button onClick={() => updateCart(cart +1)}>
							Ajouter
						</button>
					</div>
					Total : {monsteraPrice * cart}€
				</div>
				<button onClick={() => updateCart(0)}>Vider le panier</button>
				<button onClick={() => setIsOpen(false)}>Cacher le panier</button>
			</div>

			):<button onClick={() => setIsOpen(true)}>Afficher le panier</button>}
		</div>
		
	)
}

export default Cart