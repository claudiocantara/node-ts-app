import { Request, Response } from 'express'
import { UserModel } from './user.schema'

export class UserController {
  async list(_req: Request, res: Response) {
    const users = await UserModel.find()
    return res.json(users).status(200)
  }

  async create(req: Request, res: Response) {
    const { body } = req

    try {
      const user = await UserModel.create({
        name: body.name,
        birth_date: body.birth_date,
      })
      if (!user) {
        return res.json({ message: 'Something went wrong' }).status(400)
      }

      return res.json({ user }).status(200)
    } catch (error) {
      return res.json({ message: 'Something went wrong' }).status(400)
    }
  }
}
