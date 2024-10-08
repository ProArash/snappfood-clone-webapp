'use client';
import { useState } from 'react';
import CustomButton from '../Button/CustomButton';
import CustomInput from '../Input/CustomInput';

export default function SignInBox() {
	const [mobile, setMobile] = useState('');
	const [sms, setSms] = useState('');

	return (
		<div className="flex flex-col gap-5 p-3 w-1/2 h-fit shadow shadow-slate-600 rounded-md">
			<p>ورود به حساب</p>
			<CustomInput
				onChange={(e) => {
					setMobile(e.target.value);
				}}
				placeholder="موبایل"
			/>
			<CustomInput
				onChange={(e) => {
					setSms(e.target.value);
				}}
				placeholder="کد ارسال شده"
			/>
			<CustomButton
				title="ارسال کد"
				className="rounded-md bg-blue-700 justify-center active:bg-blue-600"
				onClick={() => {
					alert(mobile);
				}}
			/>
			<p className="text-white">{mobile}</p>
		</div>
	);
}
