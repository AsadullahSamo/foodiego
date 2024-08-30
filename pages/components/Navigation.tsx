import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import fonts from '../../styles/Fonts.module.css'
import asianIcon from '../../assets/food-icons/asian-icon.svg'
import breakfastIcon from '../../assets/food-icons/breakfast-icon.svg'
import burgerIcon from '../../assets/food-icons/burger-icon.svg'
import dessertIcon from '../../assets/food-icons/dessert-icon.svg'
import fastfoodIcon from '../../assets/food-icons/fast-food-icon.svg'
import healthyIcon from '../../assets/food-icons/healthy-icon.svg'
import iceCreamIcon from '../../assets/food-icons/ice-cream-icon.svg'
import indianIcon from '../../assets/food-icons/indian-icon.svg'
import italianIcon from '../../assets/food-icons/italian-icon.svg'
import koreanIcon from '../../assets/food-icons/korean-icon.svg'
import pizzaIcon from '../../assets/food-icons/pizza-icon.svg'
import seafoodIcon from '../../assets/food-icons/seafood-icon.svg'
import sushiIcon from '../../assets/food-icons/sushi-icon.svg'
import veganIcon from '../../assets/food-icons/vegan-icon.svg'


export default function Navigation() {

		const foodIcons = [asianIcon, breakfastIcon, burgerIcon, dessertIcon, fastfoodIcon, healthyIcon, iceCreamIcon, indianIcon, italianIcon, koreanIcon, pizzaIcon, seafoodIcon, sushiIcon, veganIcon]
		const foods = ['Asian', 'Breakfast', 'Burger', 'Dessert', 'Fast Food', 'Healthy', 'Ice Cream', 'Indian', 'Italian', 'Korean', 'Pizza', 'Seafood', 'Sushi', 'Vegan']

    const [active, setActive] = React.useState('delivery')
		const [cartIsOpen, setCartIsOpen] = React.useState(false)
		const [visibleIconsRange, setVisibleIconsRange] = React.useState({start: 0, end: 5})
		const [selectedFood, setSelectedFood] = React.useState('Asian')

		const visibleIcons = foodIcons.slice(visibleIconsRange.start, visibleIconsRange.end)
		const toggleCart = () => {
			setCartIsOpen(cartIsOpen => !cartIsOpen)
		}

		const showPrevIcons = () => {
			if (visibleIconsRange.start > 0) {
				setVisibleIconsRange({start: visibleIconsRange.start - 1, end: visibleIconsRange.end - 1})
			} else {
				setVisibleIconsRange({start: foodIcons.length - 1, end: foodIcons.length})
			}
		}

		const showNextIcons = () => {
			if (visibleIconsRange.end < foodIcons.length) {
				setVisibleIconsRange({start: visibleIconsRange.start + 1, end: visibleIconsRange.end + 1})
			} else {
				setVisibleIconsRange({start: 0, end: 5})
			}
		}

    return (
			<div className='flex flex-col justify-center mt-12 items-center h-44 w-[100%] bg-[#f3f6f7]'>
				<nav className="flex justify-center items-center text-white"> 
						<h2 className="absolute left-0 text-2xl font-bold ml-16 text-black">Foodie <span className="text-[#f9a826]">Go</span></h2>
						<div className="flex justify-start gap-2 items-center bg-[#e3e7eb] px-2 py-1 rounded-full">
								<div className={`rounded-full flex my-1 px-3 py-1 hover:cursor-pointer transition-all duration-300 ease-in-out transform ${active === 'delivery' ? 'bg-white scale-105 shadow-md' : 'bg-transparent'} hover:bg-white hover:shadow-lg`} 
										onClick={() => setActive('delivery')}>
										<span className={`material-icons transition-all duration-300 ease-in-out transform ${active === 'delivery' ? 'text-green-500 scale-110' : 'text-black'} hover:text-green-600`}>delivery_dining</span>  
										<p className={`text-black ml-1 ${fonts.poppinsSemibold} transition-all duration-300 ease-in-out`}>Delivery</p>
								</div>

								<div className={`rounded-full flex my-1 px-3 py-1 hover:cursor-pointer transition-all duration-300 ease-in-out transform ${active === 'pickup' ? 'bg-white scale-105 shadow-md' : 'bg-transparent'} hover:bg-white hover:shadow-lg`} 
										onClick={() => setActive('pickup')}>
										<span className={`material-icons transition-all duration-300 ease-in-out transform ${active === 'pickup' ? 'text-green-500 scale-110' : 'text-black'} hover:text-green-600`}>inventory_2</span>  
										<p className={`text-black ml-1 ${fonts.poppinsSemibold} transition-all duration-300 ease-in-out`}>Pickup</p>
								</div>
						</div>

						<div className="flex items-center mt-2"> 
								<span className="material-icons text-green-500">geolocation_on</span> 
								<span className={`text-black ml-1 ${fonts.poppinsSemibold}`}> 136 Greenpoint Ave </span> 
						</div>

						<div className="flex justify-end items-center gap-4 absolute right-0 mr-16"> 
								<div className="relative mr-10 mt-2 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer" onClick={toggleCart}>
										<span className="material-icons text-black hover:text-green-500 transition-colors duration-300">shopping_cart</span>
										<span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-white bg-green-500 text-xs flex items-center justify-center ${fonts.poppinsSemibold}`}> 0 </span>
								</div>
								<button className={`bg-[#f9a826] px-4 py-1 rounded-full text-white hover:bg-[#e5941d] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${fonts.poppinsSemibold}`}> Sign In </button>
								<button className={`bg-[#0eaa58] px-4 py-1 rounded-full text-white hover:bg-[#0b934a] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${fonts.poppinsSemibold}`}> Create Account</button>
						</div>

						
				</nav>

				<div className="flex justify-center items-center gap-4 mt-10">
					<div className="flex justify-center items-center gap-4">
						<span className="material-icons hover:cursor-pointer" onClick={showPrevIcons} style={{fontSize: '40px', rotate: '180deg'}}>arrow_right_alt</span>
						{visibleIcons.map((icon, index) => (
							<div className="flex flex-col justify-center items-center">
								<Image key={index} src={icon} alt="food-icon" className="w-10 h-10 hover:cursor-pointer" onClick={() => setSelectedFood(foods[index])} />
								<p className={`flex gap-1`}> 
									{/* <span className="material-icons -mt-1"> check </span>  */}
									{selectedFood === foods[index] && <span className="material-icons text-green-500"> check </span>}
									<span className={`text-black text-sm ${fonts.poppinsRegular}`}> {foods[index]} </span> 
								</p>
							</div>

						))}
						<span className="material-icons hover:cursor-pointer" onClick={showNextIcons} style={{fontSize: '40px'}}>arrow_right_alt</span>
					</div>
				</div>

		</div>

		// {cartIsOpen &&
		// 	<div className="mr-32 flex flex-col justify-start items-center absolute top-32 right-56 bg-white shadow-md w-[25%] h-64 rounded-lg">
		// 		<span className={`mt-10 material-icons text-black hover:text-green-500 transition-colors duration-300 ${fonts.poppinsSemibold}`}>shopping_cart</span>
		// 		<h3 className={`text-black font-extrabold mt-3 ml-2 ${fonts.poppinsRegular}`} style={{fontWeight: "bold"}}>Your Cart is Empty</h3>
		// 		<p className={`text-black mt-1 ml-2 ${fonts.poppinsRegular} text-center w-[75%]`}> Add items from a restaurant or store to start a new cart</p>
		// 		<button className={`bg-[#0eaa58] w-[80%] px-4 py-3 rounded-full text-white hover:bg-[#e5941d] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${fonts.poppinsSemibold} mt-5`}> Start Shopping </button>
		// 	</div>
		// }
		
		
    )
}
