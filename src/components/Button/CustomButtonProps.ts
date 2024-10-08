import { ButtonHTMLAttributes, ReactNode } from 'react';

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	icon?: ReactNode;
	title?: string;
};
