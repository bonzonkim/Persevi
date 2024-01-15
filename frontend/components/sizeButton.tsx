import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SizeButton({ id, size, dataUpdate }) {
	const [isSizeButtonClicked, setSizeButtonClicked] = useState(false);

	function sizeButtonClick() {
		setSizeButtonClicked(!isSizeButtonClicked);
		dataUpdate(id, isSizeButtonClicked);
	}

	return (
		<div className="mt-2">
			<div className="flex rounded-md shadow-sm sm:max-w-md">
				<button
					name={id}
					id={id}
					className={`block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white border rounded-md ${
						isSizeButtonClicked ? 'border-persevi-blue' : 'border-white'
					} `}
					onClick={sizeButtonClick}
				>
					{size}
				</button>
			</div>
		</div>
	);
}

SizeButton.propsTypes = {
	id: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired
};

export default SizeButton;
