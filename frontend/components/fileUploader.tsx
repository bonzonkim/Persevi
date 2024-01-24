import React, { useState, ChangeEvent } from 'react';
//import PropTypes from 'prop-types';

//interface IFileUploaderProps {
//
//}

function FileUploader() {
	const [images, setImages] = useState<FileList | null>(null);
	const [selectedImage, setSelectedImage] = useState<File | null>(null);

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		setImages(files);
		if (files !== null) setSelectedImage(files[0]);
	}

	function handleImageSelect(index: number) {
		if (images !== null) setSelectedImage(images[index]);
	}

	return (
		<div className=" mt-2 card flex bg-transparent h-60 w-8/12">
			<div className="w-1/2 border-t border-l border-b border-white border-dashed rounded-bl-md rounded-tl-md flex items-center justify-center">
				{images ? (
					<ul>
						{Array.from(images).map((img, index) => (
							<li key={index}>
								<p
									className="flex text-white cursor-pointer hover:text-persevi-blue"
									onClick={() => handleImageSelect(index)}
								>
									{img.name} ({(img.size / (1024 * 1024)).toPrecision(5)} MB)
									<span className="ml-auto">x</span>
								</p>
							</li>
						))}
					</ul>
				) : (
					<div className="text-center">
						<div className="flex text-sm leading-6 text-gray-600">
							<label
								htmlFor="file-upload"
								className="relative cursor-pointer rounded-md bg-transparent font-semibold text-persevi-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
							>
								<span>Upload a file</span>
								<input
									id="file-upload"
									name="file-upload"
									type="file"
									className="sr-only"
									multiple={true}
									onChange={handleFileChange}
								/>
							</label>
							<p className="pl-1">or drag and drop</p>
						</div>
						<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
					</div>
				)}
			</div>
			<div className="w-1/2 block border border-white rounded-br-md rounded-tr-md flex items-center justify-center">
				{selectedImage && (
					<img className="block max-w-full max-h-full" src={URL.createObjectURL(selectedImage)} alt="Preview" />
				)}
			</div>
		</div>
	);
}

// FileUploader.propsTypes = {
// id: PropTypes.string.isRequired,
// placeholder: PropTypes.string.isRequired,
// onChange: PropTypes.func.isRequired
// };

export default FileUploader;
