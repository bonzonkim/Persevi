import { Request, Response } from 'express';
import {UserInterface} from "../model/userModel";
import { registerService, loginService } from '../service/userService'

export async function register(req: Request<{}, {}, UserInterface>, res: Response) {
  try {
    const userData = await registerService(req.body);
    console.log(userData);
    res.json({ msg: `${userData.uid}님 회원가입이 완료되었습니다.` });
  } catch (e) {
    console.log(e);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
 export async function login(req: Request<{}, {}, UserInterface>, res: Response) {
  try {
    const userData = await loginService((req.body));
    console.log(userData);
    res.json({msg: `${userData.uid}님 환영합니다.`})
  } catch (e){
      console.log(e);
      res.status(401).json({error: '로그인실패'})
  }
}
