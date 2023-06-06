import Banner from './Banner'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Cart from './Cart'
import { useState, useEffect} from 'react'
import UploadImage from './UploadImage'
import Identifier from './Identifier'


function App() {

	const [user, setUser] = useState({});
	const [cart, updateCart] = useState(0)
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<Identifier user={user} setUser={setUser} />
			<UploadImage />
			<div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
			<QuestionForm />
		</div>
	)
}

export default App