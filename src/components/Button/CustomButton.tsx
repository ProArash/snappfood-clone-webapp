import { CustomButtonProps } from './CustomButtonProps';

export default function CustomButton({
	title,
	className,
	icon,
	...props
}: CustomButtonProps) {
	return (
		<button
			className={`${className} flex p-1 text-white items-center bg-pink-500`}
			{...props}>
			{icon && icon}
			{title && title}
		</button>
	);
}
