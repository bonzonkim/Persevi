import {AppDataSource} from "../config/db";
import {User} from "../entity/User";
import { UserInterface} from "../model/userModel";
import bcrypt from "bcrypt";
import userRouter from "../routes/userRouter";

const repository = AppDataSource.getRepository(User);

export async function registerService(userRegisterData: UserInterface) {
    try {
        let { name,
            email,
            uid,
            pwd,
            nickname,
            phone,
            address,
            birth,
            banknum,
            bank
        } = userRegisterData;

        const grade = 0; // 회원 등급 (일반회원, 관리자)

        // 비밀번호 암호화
        const salt = await bcrypt.genSalt(10);
        pwd = await bcrypt.hash('1234', salt);

        const user = repository.create({name, email, uid, pwd, nickname, phone, address, birth, banknum, bank, grade});
        const userData = await repository.save(user)
        return userData
    }
    catch (e) {
        console.log(e);
        throw new Error('User registeration failed.')
    }
}
export async function loginService(userLoginData: UserInterface) {
    try {
        let {
            uid,
            pwd
        } = userLoginData;

        const loginUser = await repository.findOneBy({uid: uid})

        if (!loginUser) {
            throw new Error('사용자를 찾을 수 없습니다.');
        }

        const isPwdMatch = await bcrypt.compare(pwd, <string>loginUser?.pwd);

        if (!isPwdMatch) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }
        return loginUser;
    } catch (e) {
        console.log(e);
        throw new Error('User Login Failed.');
    }
}