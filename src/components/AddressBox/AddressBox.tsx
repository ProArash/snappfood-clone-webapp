import { FaLocationDot, FaMagnifyingGlass } from 'react-icons/fa6';
import CustomButton from '../Button/CustomButton';

export default function AddressBox() {
	return (
		<div className="flex rounded-full p-2 items-center bg-gray-300 text-gray-800 m-5">
			<div className="w-1/6">
				<FaLocationDot />
			</div>
			<div className="w-full text-center text-xs">
				ابتدا آدرستان را انتخاب کنید
			</div>
			<div className="w-1/6 rounded-full">
				<CustomButton
					className="rounded-full p-2"
					icon={<FaMagnifyingGlass size={20} />}
				/>
			</div>
		</div>
	);
}
