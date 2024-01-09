import React from 'react';

export default function PhotoAddCard() {
	return (
		<div className="mt-2 card flex w-44 h-44 bg-transparent rounded-md border border-dashed items-center justify-center">
			<label
				htmlFor="file-upload"
				className="relative cursor-pointer rounded-md bg-transparent text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-persevi-blue text-5xl"
			>
				<span>+</span>
				<input id="file-upload" name="file-upload" type="file" className="sr-only" />
			</label>
		</div>
	);
}
