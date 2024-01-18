import React, { useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface IPriceInputProps {
	id: string;
	placeholder: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: any;
}

function PriceInput({ id, placeholder, onChange }: IPriceInputProps) {
	const [priceNum, setPriceNum] = useState<string>('');

	// 1000단위로 콤마 찍어줌 + onChange 호출
	function changePriceNum(e: ChangeEvent<HTMLInputElement>) {
		onChange(e);
		const value: string = e.target.value;
		const removedCommaValue: number = Number(value.replaceAll(',', ''));
		setPriceNum(removedCommaValue.toLocaleString());
	}

	return (
		<div className="mt-2">
			<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
				<input
					type="text"
					name={id}
					id={id}
					className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
					placeholder={placeholder}
					onChange={changePriceNum}
					value={priceNum}
				/>
			</div>
		</div>
	);
}

PriceInput.propsTypes = {
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default PriceInput;
