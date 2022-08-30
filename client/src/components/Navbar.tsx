import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
	return (
		<nav className="w-full flex py-6 justify-center items-center navbar">
			<img src={logo} alt="blabla" className="w-[1024px] h-[32px]" />
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav,index) => (
					<li 
					key={nav.id}
					className={'font-poppins font-normal cursor-pointer text-[16px] text-white'}>
						<a href={`${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul>
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