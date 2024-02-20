import React, { useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface IFileUploaderProps {
	imgUpdate: (images: FileList) => void;
}

function FileUploader({ imgUpdate }: IFileUploaderProps) {
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

	function removeImage(index: number) {
		if (images !== null) {
			if (images[index] === selectedImage) {
				setSelectedImage(images[0]);
			}

			const arrImages = Array.from(images);
			arrImages.splice(index, 1);

			// Array -> FileList convert
			const dataTransfer = new DataTransfer();
			arrImages.forEach(file => {
				dataTransfer.items.add(file);
			});

			const newImages = dataTransfer.files;

			newImages.length === 0 ? setImages(null) : setImages(newImages);
		}
	}

	function UploadBtnClick() {
		if (images !== null && images.length !== undefined && images?.length > 0) {
			imgUpdate(images);
			// for (let i = 0; i < images.length; i++) {
			// 	let propName = 'prod_img';
			// 	if (i !== 0) propName += i;

			// 	const reader = new FileReader();
			// 	reader.readAsArrayBuffer(images[i]);
			// 	reader.onloadend = () => {
			// 		const blobImg = new Blob([reader.result as ArrayBuffer], { type: images[i].type });
			// 		imgUpdate(propName, blobImg);
			// 	};
			// }
		}
	}

	return (
		<div className=" mt-2 card flex bg-transparent h-60 w-8/12">
			{images ? (
				<div className="w-1/2 border-t border-l border-b border-white border-dashed rounded-bl-md rounded-tl-md p-3 relative">
					<ul>
						{Array.from(images).map((img, index) => (
							<li key={index} className="flex justify-between items-center p-1 border-b border-gray-500">
								<span
									className="text-white cursor-pointer hover:text-persevi-blue"
									onClick={() => handleImageSelect(index)}
								>
									{img.name} ({(img.size / (1024 * 1024)).toPrecision(5)} MB)
								</span>
								<span
									className="ml-auto text-white cursor-pointer hover:text-gray-500"
									onClick={() => removeImage(index)}
								>
									x
								</span>
							</li>
						))}
					</ul>
					<div className="absolute bottom-0 right-0 mr-2 mb-2">
						<button
							className="p-1 rounded-bl-md rounded-tl-md border bg-transparent w-20 text-white hover:text-gray-500"
							type="button"
							onClick={() => setImages(null)}
						>
							Reset
						</button>
						<button
							className="p-1 rounded-br-md rounded-tr-md bg-persevi-blue border border-white w-20 text-white hover:text-gray-500"
							type="button"
							onClick={UploadBtnClick}
						>
							Upload
						</button>
					</div>
				</div>
			) : (
				<div className="w-1/2 border-t border-l border-b border-white border-dashed rounded-bl-md rounded-tl-md flex items-center justify-center">
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
				</div>
			)}
			<div className="w-1/2 block border border-white rounded-br-md rounded-tr-md flex items-center justify-center">
				{selectedImage && (
					<img className="block max-w-full max-h-full" src={URL.createObjectURL(selectedImage)} alt="Preview" />
				)}
			</div>
		</div>
	);
}

FileUploader.propsTypes = {
	imgUpdate: PropTypes.func.isRequired
};

export default FileUploader;
