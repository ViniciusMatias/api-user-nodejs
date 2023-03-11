

import { Request, Response, Router } from "express";
import { UserController } from "../controller/userController";

const router = Router()
const userController = new UserController();

router.get('/user', userController.getAll)
router.post('/user', userController.created)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.update)
router.use('', (req: Request, res: Response) => {
  res.send(
    "<h1>pagina não encontrada</h1>"
  )
})
export { router }