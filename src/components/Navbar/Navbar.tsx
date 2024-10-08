import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
	return (
		<div className="flex justify-between p-3 items-center bg-gray-800 rounded-full m-3">
			<div>
				<Image width={50} alt="logo" src={logo} />
			</div>
			<div>
				<FaUser size={25} />
			</div>
		</div>
	);
}
