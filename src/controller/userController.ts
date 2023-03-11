import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma = new PrismaClient()

export class UserController {

  async getAll(req: Request, res: Response) {
    const user = (await prisma.user.findMany()).map((user) => user)

    res.json(user)
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id)
      }
    }
    )
    res.json(user)
  }


  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const idUser = parseInt(id)

    const user = await prisma.user.findUnique(
      {
        where: {
          id: idUser
        }
      }
    )

    if (user != null) {
      await prisma.user.delete({
        where: {
          id: user.id
        }
      })

      return res.json(user).status(200)
    }
    return res.json("Usuario Inexistente").status(400)

  }

  async created(req: Request, res: Response) {
    const { name, email, senha } = req.body


    const user = await prisma.user.create(
      { 
        data: {
          name: name,
          email: email,
          senha: senha
        }
      }
    )
    res.json(user).status(201)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const user = await prisma.user.findUnique(
      {
        where: {
          id: parseInt(id)
        }
      }
    )
    if (user != null) {
       const userUpdate = await prisma.user.update(
        {
          data: {
            name: nome,
            email: email,
            senha: senha
          },
          where: {
            id: parseInt(id)
          }
        }
      )
      return res.json(userUpdate).status(201)
    }
    return res.json("Usuario Inexistente").status(400)


  }
}



