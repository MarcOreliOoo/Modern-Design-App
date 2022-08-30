import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';



const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img src={logo} alt="blabla" className="w-[124px] h-[32px]" />
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav,index) => (
					<li 
					key={nav.id}
					className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1?'mr-0':'mr-10'} text-white`}>
						<a href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex justify-end items-center">
				<img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
				<div className={`${toggle?'flex':'hidden'} absolute p-6 top-20 right-0 mx-4 my-2 bg-black-gradient min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav,index) => (
							<li 
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1?'mr-0':'mb-4'} text-white`}>
								<a href={`#${nav.id}`}>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

		</nav>	 
	);
}

export default Navbar;

/**
 * <nav className="w-full flex justify-start xl:justify-center items-center p-1">
			<div className="md:flex-[0.5] flex-initial justify-center items-center">
				<img src={logo} alt="logo" className="cursor-pointer"/>
			</div>
			<ul className="">
				
			</ul>
		</nav>
 */