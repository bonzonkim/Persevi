import { Request, Response } from 'express';
export const example = async (req: Request, res: Response) => {
    try {
        res.json({msg:"서버랑 통신 예시"})
    }catch (e) {
        console.log(e)
    }

}