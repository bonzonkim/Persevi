import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

const fileUploadTest = () => {
	const [images, setImages] = useState<File[]>([]);

	function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (files) {
			const newImages = Array.from(files);

			setImages(prevImages => [...prevImages, ...newImages] as File[]);
		}
	}

	const handleUpload = async () => {
		try {
			const formData = new FormData();

			images.forEach(image => {
				//formData.append(`image${index}`, image);
				formData.append(`files`, image);
			});

			const response = await axios.post('http://localhost:3099/api/admin/fileUploadTest', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			console.log('Upload response:', response.data);
		} catch (error) {
			console.error('Error uploading images:', error);
		}
	};

	return (
		<div>
			<input type="file" accept="image/*" multiple onChange={handleImageChange} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default fileUploadTest;
