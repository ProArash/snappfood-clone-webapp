import { CustominputProps } from './CustomInputProps';

export default function CustomInput({
	placeholder,
	className,
	...props
}: CustominputProps) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={`flex p-2 rounded-md bg-slate-800 ${className}`}
			{...props}
		/>
	);
}
