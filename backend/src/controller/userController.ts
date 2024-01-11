import { Request, Response } from 'express';
import { UserInterface } from '../model/userModel';
import { registerService, loginService } from '../service/userService';

export async function register(req: Request<{}, {}, UserInterface>, res: Response) {
	try {
		const userData = await registerService(req.body);
		console.log(userData);
		res.send({ msg: `${userData.uid}님 회원가입이 완료되었습니다.` });
	} catch (e) {
		console.log(e);
		res.status(500).send({ msg: '회원가입 실패' });
	}
}

export async function login(
	req: Request<{}, {}, UserInterface> & { session: { loginUserId?: string } },
	res: Response
) {
	try {
		const userData = await loginService(req.body);
		// res.cookie('userId', userData.loginUser!.uid, { httpOnly: true, sameSite: 'none' });
		res.send({ msg: `${userData.loginUser!.uid}님 환영합니다.`, uid: userData.loginUser!.uid });
	} catch (e: any) {
		if (e.message === '비밀번호가 일치하지 않습니다.') {
			res.send({ msg: '비밀번호가 일치하지 않습니다.' });
		} else if (e.message === '사용자를 찾을 수 없습니다.') {
			res.send({ msg: '사용자를 찾을 수 없습니다.' });
		}
		console.log(e);
		res.send({ msg: `${e.message}` });
	}
}

// export async function getMyPage(
// 	req: Request<{}, {}, UserInterface> & { session: { loginUserId?: string } },
// 	res: Response
// ) {
// 	const userId = req.cookies.userId;
//
// 	if (userId) {
// 		res.json({ userId: userId });
// 	}
// }

export async function logout(req: Request, res: Response) {
	res.clearCookie('userId'); // userId cookie 삭제
	res.send({ msg: '로그아웃 성공' }); //로그아웃 성공 메세지 보내기
}
