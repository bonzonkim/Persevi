import { AppDataSource } from '../config/db';
import { User } from '../entity/User';
import { UserInterface } from '../model/userModel';
import bcrypt from 'bcrypt';

const repository = AppDataSource.getRepository(User);

export async function registerService(userRegisterData: UserInterface) {
	try {
		// eslint-disable-next-line prefer-const
		let { name, email, uid, pwd, nickname, phone, address, birth, banknum, bank } = userRegisterData;

		const grade = 0; // 회원 등급 (일반회원, 관리자)

		// 비밀번호 암호화
		const salt = await bcrypt.genSalt(10);
		pwd = await bcrypt.hash(pwd, salt);

		const user = repository.create({ name, email, uid, pwd, nickname, phone, address, birth, banknum, bank, grade });
		const userData = await repository.save(user);

		return userData;
	} catch (e) {
		console.log(e);
		throw new Error('회원가입 실패');
	}
}
export async function loginService(userLoginData: UserInterface) {
	try {
		const { uid, pwd } = userLoginData;

		const loginUser = await repository.findOneBy({ uid: uid });
		const loginObj = {
			loginUser: loginUser,
			msg: ''
		};

		if (!loginUser) {
			loginObj.msg = '사용자를 찾을 수 없습니다.';
			throw new Error('사용자를 찾을 수 없습니다.');
		}

		const isPwdMatch = await bcrypt.compare(pwd, loginUser.pwd);

		// console.log(`isPwdMatch ${isPwdMatch}`);
		if (!isPwdMatch) {
			loginObj.msg = '비밀번호가 일치하지 않습니다.';
			throw new Error('비밀번호가 일치하지 않습니다.');
		}

		return loginObj;
	} catch (e) {
		console.log(e);
		throw new Error('로그인 실패');
	}
}

export async function isLoggedInService(uid: string | undefined) {
	try {
		const loginUser = await repository.findOneBy({ uid: uid });

		console.log(loginUser);

		return loginUser;
	} catch (e) {
		console.log(e);
	}
}
