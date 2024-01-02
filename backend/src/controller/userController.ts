import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { AppDataSource } from '../config/db';
import {User} from "../entity/User";

const repository = AppDataSource.getRepository(User);

interface UserRegister {
  name: string;
  email: string;
  uid: string;
  pwd: string;
  nickname: string;
  phone: string;
  address: string;
  birth: Date;
  banknum: string;
  bank: string;
}

export async function register( req: Request<{}, {}, UserRegister>, res: Response) {
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
    } = req.body;

    const grade = 0; // 회원 등급 (일반회원, 관리자)

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(10);
    pwd = await bcrypt.hash(pwd, salt);

    const user = repository.create({name, email, uid, pwd, nickname, phone, address, birth, banknum, bank, grade});
    user.birth = new Date();
    const userData = await repository.save(user)
    console.log(userData);
    res.json({msg: `${uid}님 회원가입이 완료되었습니다.`})
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
