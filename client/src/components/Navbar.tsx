import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../assets/react.svg';

const Navbar = () => {
	return (
		<nav className="w-full flex justify-start xl:justify-center items-center p-1">
			<div className="md:flex-[0.5] flex-initial justify-center items-center">
				<img src={logo} alt="logo" className="cursor-pointer"/>
			</div>
			<ul className="">
				
			</ul>
		</nav>
	);
}

export default Navbar;