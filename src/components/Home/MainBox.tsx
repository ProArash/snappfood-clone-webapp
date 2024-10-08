import Image from 'next/image';
import img1 from '../../assets/hero-image.png';
import AddressBox from '../AddressBox/AddressBox';

export default function MainBox() {
	return (
		<div className="flex gap-2 justify-between bg-gray-800 m-2 rounded-md p-2">
			<div className="flex flex-col gap-3">
				<p>سفارش انلاین</p>
				<p>سفارش آنلاین غذا، میوه، نان، شیرینی و ...</p>
				<AddressBox />
			</div>
			<div>
				<Image
					className="object-cover w-[150px] h-[400px]"
					src={img1}
					alt="banner"
				/>
			</div>
		</div>
	);
}
