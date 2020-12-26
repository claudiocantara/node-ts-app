import { Request, Response } from 'express'

export class UserController {
  async teste (req: Request, res: Response) {
    return res.json({ teste: 'teste aqui tio' })
  }
}
