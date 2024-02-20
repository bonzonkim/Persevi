import { Request, Response } from 'express';
import { ProductInterface } from '../model/productModel';
import { productService } from '../service/productService';

import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cd) {
		cd(null, 'uploads/');
	},
	filename: function (req, file, cd) {
		const fileName = file.originalname.split('.')[0];
		cd(null, `${Date.now()}_${fileName}`);
	}
});

const upload = multer({ storage: storage });

export async function productregistration(req: Request<object, object, ProductInterface>, res: Response) {
	try {
		req.body.prod_size = req.body.prod_size.toString(); //Array -> String
		console.log(req.body);
		const prodData = await productService(req.body);
		res.json({ msg: `상품등록이 완료되었습니다.` });
	} catch (e) {
		console.log(`error: ${e}`);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

export async function fileUploadTest(req: Request, res: Response) {
	upload.array('files')(req, res, async err => {
		if (err) {
			console.error('Error uploading files:', err);
			return res.status(500).json({ message: 'Error uploading files' });
		}

		// 업로드된 파일에 접근
		console.log('Received files:', req.files);

		if (req.files instanceof Array) {
			req.files.forEach(file => {
				console.log('File:', file.originalname);
				console.log('Path:', file.path);
			});
		}

		res.status(200).json({ message: 'Files uploaded successfully' });
	});
}
