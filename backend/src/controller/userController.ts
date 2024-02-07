import { Request, Response } from 'express';
import { UserInterface } from '../model/userModel';
import { registerService } from '../service/userService';
import bcrypt from 'bcrypt';
import { AppDataSource } from '../config/db';
import { User } from '../entity/User';

const repository = AppDataSource.getRepository(User);

export async function register(req: Request<UserInterface>, res: Response) {
	try {
		const userData = await registerService(req.body);
		console.log(userData);
		res.send({ msg: `${userData.uid}님 회원가입이 완료되었습니다.` });
	} catch (e) {
		console.log(e);
		res.status(500).send({ msg: '회원가입 실패' });
	}
}

export async function login(req: Request, res: Response) {
	try {
		const { uid, pwd } = req.body;

		// findOneBy 함수의 첫번째 매개변수는 where절
		const user = await repository.findOneBy({ uid: uid });

		if (!user) {
			return res.status(404).send('사용자를 찾을 수 없습니다');
		}
		// 암호화된 비밀번호 비교
		const passwordMatch = await bcrypt.compare(pwd, <string>user?.pwd);

		if (!passwordMatch) {
			return res.status(401).send('비밀번호가 일치하지 않습니다');
		}
		res.cookie('userId', uid, { httpOnly: true });
		res.json({ msg: '로그인 성공', uid: uid });
	} catch (e: unknown) {
		console.log(e);
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

export async function getUserId(req: Request, res: Response) {
  const userId = req.cookies.userId;
  console.log(userId);
  res.json({userId: userId});
}
