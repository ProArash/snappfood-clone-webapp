'use client';

import { useState } from 'react';
import CustomInput from '../Input/CustomInput';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	return (
		<div className="flex flex-col gap-5">
			<CustomInput
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<p>{search}</p>
		</div>
	);
}
