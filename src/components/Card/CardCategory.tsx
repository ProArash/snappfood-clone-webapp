import Image from 'next/image';

export default function CardCategory({ image, title }) {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-700 rounded-md ring-2 ring-gray-400 p-2 h-[150px]">
			<div>
				<Image
					className="w-[80px] h-[100px] object-contain"
					src={image}
					alt={title}
				/>
			</div>
			<p className="text-gray-200 text-sm">{title}</p>
		</div>
	);
}
